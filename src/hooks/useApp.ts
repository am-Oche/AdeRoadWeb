import {useState,useSyncExternalStore} from 'react';
import {store} from '../services/mockService.ts';
export function useApp(){return useSyncExternalStore(store.subscribe,store.get);}
export function useTask(){const [loading,setLoading]=useState(false);const [error,setError]=useState('');const [success,setSuccess]=useState('');async function run<T>(fn:()=>Promise<T>,done?:(result:T)=>void){setLoading(true);setError('');setSuccess('');try{const result=await fn();done?.(result);return result;}catch(e){setError(e instanceof Error?e.message:'Something went wrong. Please try again.');}finally{setLoading(false);}}return {loading,error,success,setSuccess,setError,run};}
