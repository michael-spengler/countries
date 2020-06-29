# Countries Module

## Usage example for your code

```

import { CountryInfoProvider } from "./infoprovider.ts"

const countryCode = CountryInfoProvider.getCountryCodeFromCountryName('Germany')
console.log(`\nCountry Code: ${countryCode}`)


const countryName = CountryInfoProvider.getCountryNameFromCountryCode('DE')
console.log(`\nCountry Name: ${countryName}\n`)

```

You can also use the country flag server by:
```
deno run --allow-net --allow-read --reload https://raw.githubusercontent.com/michael-spengler/countries/master/server.ts
deno run --allow-net --allow-read --reload https://deno.land/x/countries/server.ts
```

http://localhost:8025?countryCode=it
http://localhost:8025?countryCode=de
...


## Test it via command line
```
deno run --allow-net --allow-read https://raw.githubusercontent.com/michael-spengler/countries/master/test-it.ts
<!-- deno run --allow-net --allow-read https://deno.land/x/countries/test-it.ts -->

```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things.