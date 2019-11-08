# Tapmod boilerplate

This is boilerplate project for all other tapmod projects.

## Guidelines

### structure
- create new components with `npm run component` command
- if component has complex logic extract it to the custom hooks in `{Component name}.style.js` file
- keep all constants in `src/consts/*.js`

### styling
Look at **Header** component for styling example
- We use `styled-components` for styling.
- We keep styles in `{Component name}.style.js`
- keep all styling variables in `theme.js` (e.g., colors, font sizes, media qureies etc.)

### git flow
You must work in `development` branch. Push all local commits from local `development` branch to remote `development` branch. Use `npm run commit` for commits.


**flow**

- create new feature branch `git checkout -b my-new-feature-branch`
- develop commit changes to the branch with `npm run commit`
- after you finish merge your branch to `development`
    - `git checkout development`
    - `git merge my-new-feature-branch`
- publish your changes `git push origin development`
- when you are ready to publish your updates to master create pull reqeust from development branch

#### Links
- [closing github issues using keywords](https://help.github.com/en/github/managing-your-work-on-github/closing-issues-using-keywords)
- [the GitHub flow](https://guides.github.com/introduction/flow/)


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
- (*optional*) Component.hooks.js

### `npm test`

Run all tests

### `npm test:watch`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run commit`

Run interactive commit using [commitizen](https://github.com/commitizen/cz-cli)
