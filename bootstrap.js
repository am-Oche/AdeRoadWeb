// Static-host entry: compile the same TypeScript/React source used by Vite.
// No server runtime or build tools are required by the hosted preview.
const root = new URL('./', import.meta.url);
const modules = new Map();
async function load(path) {
  const url = new URL(path, root).href;
  if (modules.has(url)) return modules.get(url);
  const pending = (async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Unable to load ${path}. Check your connection and retry.`);
    let source = await response.text();
    const dependencies = [...source.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)].map(m => m[1]);
    for (const dep of new Set(dependencies)) {
      const replacement = await load(new URL(dep, url).href);
      source = source.split(`'${dep}'`).join(`'${replacement}'`).split(`"${dep}"`).join(`"${replacement}"`);
    }
    const transformed = window.Babel.transform(source, {filename: url, presets: [['typescript', {allExtensions:true,isTSX:true}], ['react', {runtime:'classic'}]], sourceType:'module'}).code;
    return URL.createObjectURL(new Blob([transformed], {type:'text/javascript'}));
  })();
  modules.set(url, pending);
  return pending;
}
try {
  while (!window.Babel) await new Promise(r => setTimeout(r, 40));
  await import(await load(document.body.dataset.entry || 'src/main.tsx'));
} catch (error) {
  console.error(error);
  const container = document.getElementById('root');
  container.textContent = '';
  const panel = document.createElement('div'); panel.className = 'boot-screen';
  const title = document.createElement('h2'); title.textContent = 'Let’s try that again';
  const text = document.createElement('p'); text.textContent = 'The app could not load. An internet connection is needed on first visit.';
  const button = document.createElement('button'); button.className = 'btn primary'; button.textContent = 'Retry connection'; button.onclick = () => location.reload();
  panel.append(title,text,button); container.append(panel);
}
