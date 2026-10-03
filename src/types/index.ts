export type Status = 'searching'|'assigned'|'enroute'|'arriving'|'arrived'|'servicing'|'completed'|'cancelled';
export interface Vehicle {make:string;model:string;year:string;colour:string;plate:string;}
export interface Contact {id:string;name:string;phone:string;}
export interface User {name:string;phone:string;vehicle:Vehicle;contacts:Contact[];paymentPreference:string;notifications:boolean;}
export interface Service {id:string;name:string;icon:string;description:string;base:number;distanceCharge:number;eta:string;problemOptions:string[];}
export interface Location {id:string;name:string;address:string;coordinates:[number,number];}
export interface Provider {id:string;name:string;initials:string;rating:number;jobs:number;vehicle:string;plate:string;distance:string;}
export interface Request {id:string;serviceId:string;vehicle:Vehicle;problem:string;location:Location;status:Status;createdAt:string;total:number;providerId:string|null;progress:number;stageTicks:number;payment?:{id:string;method:string;paidAt:string};rating?:number;review?:string;}
export interface Draft {serviceId:string;vehicle:Vehicle;problem:string;location:Location;}
export interface AppState {authenticated:boolean;pendingPhone:string;user:User;requests:Request[];activeId:string|null;draft:Draft;offline:boolean;failPayment:boolean;paused:boolean;theme:'light'|'dark';sos:null|{at:string;location:string;contacts:number};}
