// I'm relatively new to deno. If there is a better way to do this, please let me know.

import { Application, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const port = 8025

app.use(async (context) => {
  const code = context.request.url.href.split(`${port}/?countryCode=`)[1]
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/flags`,
    index: `${code}.svg`,
  });
});

const countryCode = 'it'
console.log(`Country Flag Server providing flags via http://localhost:${port}/?countryCode=${countryCode}.`)

await app.listen({ port });

