# Drupal React Bill Estimator Shared

Common code for showing courses in a given [subject(s)](https://bitbucket.brown.edu/projects/DREACT/repos/drupal-react-courses/browse) or [concentration(s)](https://bitbucket.brown.edu/projects/DREACT/repos/drupal-react-concentration-courses/browse).

---

## Usage

1. Install packages

```sh
// npm
npm i git+https://bitbucket.brown.edu/scm/dreact/drupal-react-courses-shared.git#semver:^0.2

// yarn
yarn add git+https://bitbucket.brown.edu/scm/dreact/drupal-react-courses-shared.git#^0.2
```

_Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

### Required Peer Dependencies

These libraries are not bundled with Drupal React Bill Estimator Shared and are required at runtime:

- [**@apollo/client**](https://www.npmjs.com/package/@apollo/client)
- [**brown-university-components**](https://bitbucket.brown.edu/projects/REACT/repos/brown-university-components)
- [**brown-university-styles**](https://bitbucket.brown.edu/projects/REACT/repos/brown-university-styles)
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
7. Push master and tags to all remotes

---

## Boilerplate

This project was bootstraped with [TSDX](https://github.com/jaredpalmer/tsdx).
