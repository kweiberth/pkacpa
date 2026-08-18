Website for Palermo/Kissinger & Associates at https://pkacpa.com.

## Local development

Use Node.js 24 and install the locked dependencies:

```sh
nvm use
npm ci
```

Start the development server with `npm run dev`.

## End-to-end tests

Install the Playwright browser binaries once after installing dependencies:

```sh
npm run e2e:install
```

Run the end-to-end suite with `npm run e2e`, or use `npm run e2e:ui` for
Playwright's interactive test runner.
