import React,{useEffect} from 'react';
import {HashRouter,Routes,Route,Navigate,useLocation} from 'react-router-dom';
import {useApp} from './hooks/useApp.ts';
import {startSimulation} from './services/mockService.ts';
import {AppLayout,GlobalUI} from './layouts/Layout.tsx';
import {Landing} from './pages/Landing.tsx';
import {Auth} from './pages/Auth.tsx';
import {Home,Services} from './pages/Home.tsx';
import {RequestForm,Estimate} from './pages/RequestFlow.tsx';
import {Dispatch,Tracking} from './pages/Tracking.tsx';
import {Payment,Rating,Receipt} from './pages/Payment.tsx';
import {History,HistoryDetail} from './pages/History.tsx';
import {Profile} from './pages/Profile.tsx';
import {SOS} from './pages/SOS.tsx';
import {ProviderHome,ProviderActive,ProviderComplete} from './pages/Provider.tsx';
import {Support} from './pages/Support.tsx';
import {EmptyState} from './components/ui.tsx';
import {config} from './config/app.ts';
function Protected(){const state=useApp();const loc=useLocation();if(!state.authenticated)return <Navigate to="/login" state={{from:loc.pathname+loc.search}} replace/>;return <AppLayout/>;}
function PageMeta(){const location=useLocation();useEffect(()=>{const route=location.pathname.split('/')[1]||'Roadside assistance';document.title=`${config.name} — ${route.charAt(0).toUpperCase()+route.slice(1)}`;},[location.pathname]);return null;}
export function App(){useEffect(()=>startSimulation(),[]);return <HashRouter><PageMeta/><Routes><Route path="/" element={<Landing/>}/><Route path="/login" element={<Auth/>}/><Route path="/otp" element={<Auth otp/>}/><Route path="/help" element={<Support/>}/><Route path="/terms" element={<Support type="terms"/>}/><Route path="/privacy" element={<Support type="privacy"/>}/><Route element={<Protected/>}><Route path="/home" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/request" element={<RequestForm/>}/><Route path="/estimate" element={<Estimate/>}/><Route path="/dispatch" element={<Dispatch/>}/><Route path="/tracking" element={<Tracking/>}/><Route path="/payment" element={<Payment/>}/><Route path="/rating" element={<Rating/>}/><Route path="/receipt" element={<Receipt/>}/><Route path="/history" element={<History/>}/><Route path="/history/:id" element={<HistoryDetail/>}/><Route path="/profile" element={<Profile/>}/><Route path="/sos" element={<SOS/>}/><Route path="/provider" element={<ProviderHome/>}/><Route path="/provider/job" element={<ProviderHome jobOnly/>}/><Route path="/provider/active" element={<ProviderActive/>}/><Route path="/provider/complete" element={<ProviderComplete/>}/></Route><Route path="*" element={<EmptyState title="Looks like a little detour." description="That page doesn’t exist. Let’s get you back on track." action="Back to home" to="/"/>}/></Routes><GlobalUI/></HashRouter>;}
