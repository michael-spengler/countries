[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/countries)

# Countries Module

## Usage example for your code

```typescript

import { CountryInfoProvider } from "https://deno.land/x/countries/infoprovider.ts"

const countryCode = CountryInfoProvider.getCountryCodeFromCountryName('Germany')
// 'DE'

const countryName = CountryInfoProvider.getCountryNameFromCountryCode('DE')
// 'Germany'

const country = CountryInfoProvider.getCountryFromName('Swaziland')
/* {
 *   countryCode: "SZ",
 *   countryName: "Eswatini",
 *   alpha3Code: "SWZ",
 *   numericCode: "748",
 *   alternativeNames: [ "Swaziland" ]
 * }
 */

const country2 = CountryInfoProvider.getCountryFromCode(188)
/* {
 *   countryCode: "CR",
 *   countryName: "Costa Rica",
 *   alpha3Code: "CRI",
 *   numericCode: "188"
 * }
 */

const country3 = CountryInfoProvider.getCountryFromName('thiscountrydoesnotexist')
// undefined

```

## Test it via command line
```
deno run --allow-net --allow-read https://deno.land/x/countries/test-it.ts

```

## Country Flags
If you can't access the flag images via the raw files (e.g. https://github.com/michael-spengler/countries/blob/master/flags/ru.svg), you can e.g. use the country flag server by:
```
deno run --allow-net --allow-read --reload https://deno.land/x/countries/server.ts
```

or e.g. via pm2 accordingly.

This will serve the flags e.g. at:  
  
http://localhost:8025?countryCode=it  
http://localhost:8025?countryCode=de  
...


## Contributions are welcome
Feel free to create a pull request if you would like to improve things.
