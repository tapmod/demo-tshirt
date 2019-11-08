[![Netlify Status](https://api.netlify.com/api/v1/badges/7ea80ea0-c84f-458d-9ee9-8850f841099a/deploy-status)](https://app.netlify.com/sites/amazing-mccarthy-331bc9/deploys)

# Tapmod Live Model Demo

This is Live Model demo project which can be used for the testing integration with a webpage.

Ways of usage:

- insert as an `iframe` with `https://demo.tapmod.studio`
- insert as a build React app (see instructions below how to do that)

Logic integration is always an individually implemented step and depends on the environment which will contain our Live Model application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run component`

Creates boilerplate component in `src/components` directory. We are creating every component through this command. <br />
creates these files:

- index.js
- Component.js
- Component.style.js
- Component.test.js
- (_optional_) Component.hooks.js

### `npm test`

Run all tests

### `npm test:watch`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run commit`

Run interactive commit using [commitizen](https://github.com/commitizen/cz-cli)
