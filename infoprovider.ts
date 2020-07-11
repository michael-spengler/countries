import { isoCountries } from "https://deno.land/x/countries/countries.ts"

export class CountryInfoProvider {

    public static getCountryCodeFromCountryName(countryName: string): string {

        return isoCountries.filter((entry) => entry.countryName.toLowerCase() === countryName.toLowerCase())[0].countryCode
    }
    
    public static getCountryNameFromCountryCode(countryCode: string): string {
        return isoCountries.filter((entry) => entry.countryCode === countryCode)[0].countryName
    }

}