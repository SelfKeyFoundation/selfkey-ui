# SelfKey UI Library

This module contains common UI components for the SelfKey family of applications written in Typescript.

It uses [Storybook](https://storybook.js.org/) for development, [Yarn](https://yarnpkg.com/en/) for dependency management and [Jest](https://facebook.github.io/jest/) for testing.

Components hot-reload during development and stories are automatically loaded from the `stories` directory from any files with the `.stories.tsx` extension.

## Setup

```bash
yarn
yarn global add @storybook/cli
yarn start
```

Storybook will be available in your browser at http://localhost:6006 after the bundle is built.

## Commitizen

This project uses Commitizen with the Jira Smart Commit adapter. Please install commitizen and use the `git cz` command when creating commit messages.

```bash
npm install -g commitizen

# Make changes to things
git add .
git cz
```

Commitizen ensures that commit messages are formatted correctly and contain the required keywords and tags for our Jira workflow automation to trigger.
