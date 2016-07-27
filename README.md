# Semantic UI Stateless Components

## Under Development
* Existing prop keys/values should be stable. There are a lot of missing components. There are a lot of missing keys/values for components. I'm currently going through these and adding them as I require for my own projects. If you want to add something, send a PR.
* File names and `export` statements may change.
* Contributions welcomed

## Requirements
* Uses es6 `import` statements. Currently no way to include directly in browser so you have to use webpack/babel or similar build system. PR welcome.

## Usage
* install from npm `npm install -S sui-stateless-components`
* import the component `import { Button } from 'sui-stateless-components'
* use it: <Button hint="positive" disabled>some label</Button>

## Testing
This package uses `@kadira/storybook` to help develop visual tests for components. To test it out do: `npm run storybook`

See https://github.com/kadirahq/react-storybook for more info.

## Contributing
If you have components to add or require additional options for components, please make the code change and add a story for the UI test. See https://github.com/kadirahq/react-storybook for more info.

Try to follow coding standards and file structure.
