
import { CountryInfoProvider } from "https://raw.githubusercontent.com/michael-spengler/countries/master/infoprovider.ts"
// import { CountryInfoProvider } from "./infoprovider.ts"

const countryCode = CountryInfoProvider.getCountryCodeFromCountryName('Germany')
console.log(`\nCountry Code: ${countryCode}`)


const countryName = CountryInfoProvider.getCountryNameFromCountryCode('DE')
console.log(`\nCountry Name: ${countryName}\n`)
