# Semantic UI Stateless Components

## Under Development
* There are missing components and missing options for certain components.
* Existing prop keys/values may change.
* File names and `export` statements may change.
* Contributions welcomed

## Requirements
* Uses es6 `import` statements. Currently no way to include directly in browser so you have to use webpack/babel or similar build system. PR welcome.

## Documentation
Auto-generated `storybook` documentation here: https://awei01.github.io/sui-stateless-components

## Usage
* install from npm `npm install -S sui-stateless-components`
* import the component `import { Button } from 'sui-stateless-components'
* use it: <Button hint="positive" disabled>some label</Button>

## Testing
This package uses `@kadira/storybook` to help develop visual tests for components. To test it out do: `npm run storybook`

See https://github.com/kadirahq/react-storybook for more info.

## Contributing
If you have components to add or require additional options for components, please make the code change and add a story for the UI test. See https://github.com/kadirahq/react-storybook for more info.

* fork this repo
* install dependencies: `npm install`
* run storybook so you can watch your components as you develop: `npm run storybook`
* edit files, add stories

Try to follow coding standards and file structure.
