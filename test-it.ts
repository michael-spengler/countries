import { CountryInfoProvider } from "./infoprovider.ts"

const countryCode = CountryInfoProvider.getCountryCodeFromCountryName('Germany')
console.log(`\nCountry Code: ${countryCode}`)

const countryName = CountryInfoProvider.getCountryNameFromCountryCode('DE')
console.log(`\nCountry Name: ${countryName}`)

const country = CountryInfoProvider.getCountryFromName('Swaziland')
console.log(`\nCountry from name 'Swaziland':`, country)

const country2 = CountryInfoProvider.getCountryFromCode(188)
console.log(`\nCountry from code '188':`, country2)

const country3 = CountryInfoProvider.getCountryFromName('thiscountrydoesnotexist')
console.log(`\nCountry from name 'thiscountrydoesnotexist':`, country3)
