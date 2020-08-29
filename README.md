[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/ijlee2.github.io/workflows/CI/CD/badge.svg)](https://github.com/ijlee2/ijlee2.github.io/actions?query=workflow%3ACI%2FCD)
[![This project uses Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Isaac/ijlee2.github.io)

# ijlee2.github.io

The static website contains the portfolio of Isaac J. Lee.


## Running locally

Run the following commands to locally run the app (built with [Ember.js](https://emberjs.com/)):

```bash
yarn install
yarn start
```


## Continuous integration

The app uses a custom workflow in order to achieve [cross-resolution testing](https://crunchingnumbers.live/2020/06/07/container-queries-cross-resolution-testing/).

Run the following commands to lint and test from local machine:

```bash
yarn lint
yarn test
```


## Continuous deployment

The app is deployed to the `gh-pages` branch for GitHub Pages.

Run the following command to deploy from local machine:

```bash
yarn deploy
```