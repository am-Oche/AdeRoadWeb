import type {Service,Provider,User,Location,Request} from '../types/index.ts';
export const locations:Location[] = [
 {id:'wuse',name:'Wuse 2, Abuja',address:'Adetokunbo Ademola Crescent, Wuse 2, Abuja',coordinates:[9.0783,7.4758]},
 {id:'maitama',name:'Maitama, Abuja',address:'Gana Street, Maitama, Abuja',coordinates:[9.0943,7.4871]},
 {id:'garki',name:'Garki, Abuja',address:'Ahmadu Bello Way, Garki, Abuja',coordinates:[9.0328,7.4893]},
 {id:'jabi',name:'Jabi, Abuja',address:'Jabi Lake Road, Jabi, Abuja',coordinates:[9.0749,7.4221]},
];
export const services:Service[] = [
 {id:'towing',name:'Towing',icon:'Truck',description:'A safe ride for your vehicle.',base:15000,distanceCharge:4000,eta:'8–15 min',problemOptions:['Vehicle won’t start','Accident recovery','Move to a workshop']},
 {id:'tyre',name:'Flat Tyre',icon:'CircleDot',description:'Flat tyre? We’ll sort it out.',base:5000,distanceCharge:1000,eta:'10–15 min',problemOptions:['Punctured tyre','Need a spare fitted','Multiple flat tyres']},
 {id:'battery',name:'Battery Jump Start',icon:'BatteryCharging',description:'A little boost. A fresh start.',base:7000,distanceCharge:1500,eta:'8–12 min',problemOptions:['Dead battery','Car won’t crank','Battery warning light']},
 {id:'fuel',name:'Fuel Delivery',icon:'Fuel',description:'Fuel delivered, wherever you are.',base:5000,distanceCharge:1000,eta:'10–20 min',problemOptions:['Out of petrol','Out of diesel','Fuel gauge issue']},
 {id:'engine',name:'Engine Trouble',icon:'Gauge',description:'Expert help under the bonnet.',base:10000,distanceCharge:2000,eta:'15–25 min',problemOptions:['Engine overheating','Check engine light','Unusual engine noise']},
 {id:'mechanic',name:'Mechanic',icon:'Wrench',description:'A trusted mechanic, on the way.',base:10000,distanceCharge:2000,eta:'15–25 min',problemOptions:['General inspection','Brake trouble','Car stopped suddenly']},
 {id:'lockout',name:'Lockout',icon:'KeyRound',description:'Back in your car. Back on track.',base:8000,distanceCharge:1500,eta:'10–20 min',problemOptions:['Keys locked inside','Lost keys','Key won’t turn']},
];
export const providers:Provider[] = [
 {id:'daniel',name:'Daniel Okoro',initials:'DO',rating:4.9,jobs:248,vehicle:'Toyota Hilux',plate:'ABJ 482 DK',distance:'2.4 km'},
 {id:'emeka',name:'Emeka Nwosu',initials:'EN',rating:4.8,jobs:183,vehicle:'Toyota Hilux',plate:'ABC 201 EN',distance:'3.1 km'},
];
export const demoUser:User = {name:'John Adebayo',phone:'+234 803 123 4567',vehicle:{make:'Toyota',model:'Corolla',year:'2018',colour:'Silver',plate:'ABC 123 AB'},contacts:[{id:'contact-1',name:'Amaka Adebayo',phone:'+234 805 234 5678'}],paymentPreference:'Bank Transfer',notifications:true};
export const historySeed:Request[] = [
 {id:'ADR-2026-000121',serviceId:'battery',vehicle:demoUser.vehicle,problem:'Battery would not start',location:locations[0],status:'completed',createdAt:'2026-09-28T10:30:00Z',total:8500,providerId:'daniel',progress:1,stageTicks:0,payment:{id:'PAY-000121',method:'Bank Transfer',paidAt:'2026-09-28T11:05:00Z'},rating:5},
 {id:'ADR-2026-000120',serviceId:'tyre',vehicle:demoUser.vehicle,problem:'Punctured front tyre',location:locations[2],status:'completed',createdAt:'2026-09-14T14:20:00Z',total:6000,providerId:'emeka',progress:1,stageTicks:0,payment:{id:'PAY-000120',method:'Cash',paidAt:'2026-09-14T15:05:00Z'},rating:4},
 {id:'ADR-2026-000119',serviceId:'towing',vehicle:demoUser.vehicle,problem:'Vehicle stopped',location:locations[3],status:'cancelled',createdAt:'2026-09-03T08:20:00Z',total:19000,providerId:null,progress:0,stageTicks:0},
];
export const trackingOffsets:[number,number][] = [[-.014,-.018],[-.012,-.018],[-.01,-.018],[-.01,-.014],[-.008,-.012],[-.005,-.012],[-.005,-.008],[-.003,-.008],[-.003,-.004],[0,-.004],[0,0]];
export const paymentMethods = [{id:'Bank Transfer',icon:'Landmark',description:'A simple, secure bank transfer'},{id:'Card',icon:'CreditCard',description:'Debit or credit card simulation'},{id:'Cash',icon:'Banknote',description:'Pay your provider in person'}];
export const providerJob = {customer:'John Adebayo',distance:'4.2 km',payout:12500,problem:'My car stopped suddenly and won’t start.',serviceId:'towing',location:locations[0]};
export const statusLabels:Record<string,string> = {searching:'Finding a provider',assigned:'Provider assigned',enroute:'On the way',arriving:'Almost there',arrived:'Provider arrived',servicing:'Service in progress',completed:'Completed',cancelled:'Cancelled'};
