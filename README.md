[![This project uses GitHub Actions for continuous integration.](https://github.com/ijlee2/ijlee2.github.io/workflows/CI/badge.svg)](https://github.com/ijlee2/ijlee2.github.io/actions?query=workflow%3ACI)
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

Run the following commands to lint and test:

```bash
yarn lint
yarn test
```


## Deploying

The app is deployed to the `gh-pages` branch for GitHub Pages. The deploy pipleline uses [ember-cli-deploy-git](https://github.com/ef4/ember-cli-deploy-git).

Run the following command to deploy:

```bash
yarn deploy
```