# Drupal React Courses Shared

Common code for showing courses in a given [subject(s)](https://bitbucket.brown.edu/projects/DREACT/repos/drupal-react-courses/browse) or [concentration(s)](https://bitbucket.brown.edu/projects/DREACT/repos/drupal-react-concentration-courses/browse), or with [specific crn(s)](https://bitbucket.brown.edu/projects/DREACT/repos/drupal-react-specific-courses/browse).

---

## Usage

1. Install packages

```sh
// npm
npm i git@github.com:BrownUniversity/drupal-react-courses-shared.git

// yarn
yarn add git@github.com:BrownUniversity/drupal-react-courses-shared.git
```

### Required Peer Dependencies

These libraries are not bundled with Drupal React Bill Estimator Shared and are required at runtime:

- [**brown-university-components**](https://github.com/BrownUniversity/brown-university-components/)
- [**brown-university-styles**](https://github.com/BrownUniversity/brown-university-styles/)
- [**graphql**](https://www.npmjs.com/package/graphql)
- [**graphql-tag**](https://www.npmjs.com/package/graphql-tag)
- [**moment**](https://www.npmjs.com/package/moment)
- [**react**](https://www.npmjs.com/package/react)
- [**react-router-dom**](https://www.npmjs.com/package/react-router-dom)
- [**styled-components**](https://www.npmjs.com/package/styled-components)
- [**@testing-library/react**](https://www.npmjs.com/package/@testing-library/react)

### 2. Import styles from Brown University Styles

---

## Development

### Install dependencies

```sh
npm install
```

### Recommended workflow

Run TSDX in one terminal:

```sh
npm start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run the example inside another:

```sh
cd example
npm install
npm start
```

### Lint

```sh
npm run lint
```

### Test

```sh
npm test
```

---

## Deployment

To publish a new version, do the following:

1. Bump version in `package.json` and `package-lock.json`
2. Bump version in `README.md` install instructions (for major and minor version bumps only)
3. Update `CHANGELOG.md`
4. `npm run build`
5. Commit changes
6. Tag new version
7. Push main and tags to all remotes

---

## Boilerplate

This project was bootstraped with [TSDX](https://github.com/jaredpalmer/tsdx).
