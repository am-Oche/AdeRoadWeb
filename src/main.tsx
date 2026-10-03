import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './App.tsx';
class AppErrorBoundary extends React.Component<{children:React.ReactNode},{failed:boolean}> {state={failed:false};static getDerivedStateFromError(){return {failed:true};}componentDidCatch(error:Error){console.error('Application error:',error);}render(){if(this.state.failed)return <main className="boot-screen"><h1>A small bump in the road.</h1><p>The app couldn’t load this screen. Your saved requests are still in this browser.</p><button className="btn primary" onClick={()=>window.location.reload()}>Reload & try again</button></main>;return this.props.children;}}
createRoot(document.getElementById('root')!).render(<AppErrorBoundary><App/></AppErrorBoundary>);
