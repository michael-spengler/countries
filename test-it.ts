import { CountryInfoProvider } from "./infoprovider.ts" //"https://deno.land/x/countries/infoprovider.ts"

const countryCode = CountryInfoProvider.getCountryCodeFromCountryName('Germany')
console.log(`\nCountry Code: ${countryCode}`)


const countryName = CountryInfoProvider.getCountryNameFromCountryCode('DE')
console.log(`\nCountry Name: ${countryName}\n`)


const country = CountryInfoProvider.getCountryFromName('Swaziland');
console.log(`Country:`, country);
