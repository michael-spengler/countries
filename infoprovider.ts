import { isoCountries } from "./countries.ts" //"https://deno.land/x/countries/countries.ts"

export class CountryInfoProvider {

    public static getCountryCodeFromCountryName(countryName: string): string {

        return isoCountries.filter((entry) => entry.countryName.toLowerCase() === countryName.toLowerCase())[0].countryCode
    }
    
    public static getCountryNameFromCountryCode(countryCode: string): string {
        return isoCountries.filter((entry) => entry.countryCode === countryCode)[0].countryName
    }

    public static getCountryFromName(countryName: string) {
        const country = isoCountries.find((entry) => this.doCountryNamesMatch(entry.countryName, countryName));
        return country || this.getCountryFromAlternativeName(countryName);
    }

    public static getCountryFromAlternativeName(countryName: string) {
        for (const country of isoCountries) {
            for (const alternativeName of country.alternativeNames || []) {
                if (this.doCountryNamesMatch(alternativeName, countryName)) {
                    return country;
                }
            }
        }
    }

    public static doCountryNamesMatch(countryName1: string, countryName2: string) {
        return countryName1.toLowerCase() === countryName2.toLowerCase();
    }

}
