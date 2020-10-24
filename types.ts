export interface ICountry {
  countryCode: string;
  countryName: string;
  alpha3Code: string;
  numericCode: string | number;
  alternativeNames?: string[];
}
