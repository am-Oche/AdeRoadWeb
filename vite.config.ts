import { defineConfig } from 'vite';
export default defineConfig({plugins:[{name:'static-preview-entry',transformIndexHtml:{order:'pre',handler(html){return html.replace(/<script type="importmap">[\s\S]*?<\/script>/,'').replace(/<script src="https:\/\/cdn.jsdelivr.net\/npm\/@babel[^>]*><\/script>/,'').replace('src="bootstrap.js"','src="/src/main.tsx"');}}}],build:{target:'es2022'}});
