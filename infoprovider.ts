import { isoCountries } from "./countries.ts"
import { ICountry } from "./types.ts"

export class CountryInfoProvider {

    public static getCountryCodeFromCountryName(countryName: string): string | undefined {
        return this.getCountryFromName(countryName)?.countryCode
    }
    
    public static getCountryNameFromCountryCode(countryCode: string): string | undefined {
        return this.getCountryFromCode(countryCode)?.countryName
    }

    public static getCountryFromCode(countryCode: string | number): ICountry | undefined {
        return isoCountries.find((country) =>
            country.countryCode.toLowerCase() === String(countryCode).toLowerCase() ||
            country.alpha3Code.toLowerCase() === String(countryCode).toLowerCase() ||
            Number(country.numericCode) === Number(countryCode)
        )
    }

    public static getCountryFromName(countryName: string): ICountry | undefined {
        const country = isoCountries.find((country) => this.doCountryNamesMatch(country.countryName, countryName))
        return country || this.getCountryFromAlternativeName(countryName)
    }

    public static getCountryFromAlternativeName(countryName: string): ICountry | undefined {
        for (const country of isoCountries) {
            for (const alternativeName of country.alternativeNames || []) {
                if (this.doCountryNamesMatch(alternativeName, countryName)) {
                    return country
                }
            }
        }
    }

    public static doCountryNamesMatch(countryName1: string, countryName2: string): boolean {
        return countryName1.toLowerCase() === countryName2.toLowerCase()
    }

}
