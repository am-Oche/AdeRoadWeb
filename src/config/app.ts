export const config = {
  name: 'AdeRoad', tagline: 'Your road. Our responsibility.',
  currency: 'NGN', locale: 'en-NG', countryCode: '+234', otp: '123456',
  storageKey: 'roadside-demo-v1', supportEmail: 'hello@example.com',
  simulation: {delay: 550, tick: 1200, searchingTicks: 4, assignedTicks: 3, routeTicks: 36, serviceTicks: 8},
  map: {tileUrl:'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'},
};
export const money = (value:number) => new Intl.NumberFormat(config.locale, {style:'currency',currency:config.currency,maximumFractionDigits:0}).format(value);
export const date = (value:string) => new Date(value).toLocaleDateString(config.locale,{day:'numeric',month:'short',year:'numeric'});
