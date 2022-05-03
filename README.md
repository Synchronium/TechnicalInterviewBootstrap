# Technical Interview Bootstrap

A small repo containing enough config to bootstrap a JavaScript-based technical interview. Contains [ESLint](https://eslint.org/), [Jest](https://jestjs.io/) and some node scripts to run them. Also includes example code and test file.

Clone this repo into a new directory and install the dependencies before starting a technical interview:

```
git clone https://github.com/Synchronium/TechnicalInterviewBootstrap.git
cd ./TechnicalInterviewBootstrap
npm install
```

When everything has finished installing, you can create new JS files and test files (ending in `.test.js`) within the main directory. See `fibonnaci.js` and `fibonnaci.test.js` for an example.

ESLint is set up using the [AirBnB style guide](https://github.com/airbnb/javascript), and can be run via `npm run lint` to show linting errors or `npm run lint:fix` to attempt to automatically fix them.

Jest can be run via `npm run test` and will run any tests within `.test.js ` files. You can also run jest in watch mode via `npm run test:watch`, which makes repeated testing faster.

If you don't care about testing, just run your JS files in the usual way via `node file.js`
