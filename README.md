# Outdoorsy Code Challenge

## Assignment

Complete assignment from Outdoorsy:

- [Assignment](https://github.com/outdoorsy/interview-challenge-frontend)

---

## How to run the application

### Development

Start the local development server with `.env.development` config.

```
yarn start
```

### Building the app

Creates a production build of the application inside the `build` directory and takes into effect the `.env.production` config.

```
yarn build
```

---

## Additional commands

### Linter

Run static analysis tool that checks TypeScript code for readability, maintainability and functionality errors:

```
yarn lint
```

### TypeScript CLI

Run TypeScript compiler and performs a type check:

```
yarn tsc
```

### Code Formatter

Run an opinionated code formatter in check mode:

```
yarn prettier:check
```

This will format the entire codebase according to the set rules:

```
yarn prettier:format
```

### Tests

Run all unit tests:

```
yarn test
```

Run all unit test and in the end also generates a coverage report:

```
yarn test:coverage
```

---

## Implementation

### Stack

List of all used libraries/packages in this stack:

- [Create React App](https://create-react-app.dev/)
- [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [JEST](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/)
- [TS Lint](https://palantir.github.io/tslint/)
- [Styled Components](https://styled-components.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Future Improvements

Ideas about possible future improvements that could be implemented if a larger time budget were available. Of course, it
would be based on the requirements of the final product.

- Server Side Rendering
- Better caching using `localStorage` or in-browser database
- Generated code documentation (e.g. `JS docs`)
- GIT pre-commit hooks
- Image optimization
- Splitting main logic parts to reusable packages (e.g. `yarn workspaces`, `Nx`)
- 90 - 100% unit test coverage
- Automation end-to-end testing (e.g. `Cypress`)
- Offline Mode Support
- `PWA`

### Live Demo

The result of the code challenge can be tested live here:

- [jakubjirous.github.io/outdoorsy-code-challenge](https://jakubjirous.github.io/outdoorsy-code-challenge/)
