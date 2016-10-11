import { PropTypes } from 'react'

export const useValueAsClass = (value) => {
  return value
}
export const makeSuffixedClass = (suffix, value) => {
  if (typeof value !== 'string') {
    value = ''
  }
  return `${value} ${suffix}`
}

function extractClassesAndProps (props = {}) {
  const classes = {}
  const rest = {}
  const options = this.options
  const makeClassnames = this.makeClassnames
  Object.keys(props).forEach((key) => {
    const value = props[key]
    if (!options[key]) {
      // this prop does not exist in the options, let component handle it
      rest[key] = value
      return
    }
    if (typeof value === 'undefined') {
      // the prop is set to undefined, completely skip it
      return
    }
    // we got here so this prop should be put into classes
    const makeClassname = makeClassnames[key]
    const className = makeClassname ? makeClassname(value) : key
    classes[className] = true
  })
  return [classes, rest]
}

export const makeFactory = (options) => {
  const factory = Object.keys(options).reduce((result, key) => {
    const definition = options[key]
    // define defaults
    let values = true
    let makeClassname
    let isRequired
    if (Array.isArray(definition)) {
      values = definition
    } else if (typeof definition === 'object') {
      // we're passing an object as the option definition
      values = definition.values || values
      makeClassname = definition.makeClassname || makeClassname
      isRequired = definition.isRequired
    }

    // make the propTypes
    let propType = values === true ? PropTypes.bool : PropTypes.oneOf(values)
    if (isRequired) {
      propType = propType.isRequired
    }
    result.propTypes[key] = propType
    result.options[key] = values
    // when makeClassname is set, use it
    // if values === true, don't pass a method
    // otherwise, use the default useValueAsClass
    result.makeClassnames[key] = makeClassname || (values === true ? null : useValueAsClass)
    return result
  }, {
    propTypes: {},
    options: {},
    makeClassnames: {}
  })
  factory.extractClassesAndProps = extractClassesAndProps.bind(factory)
  return factory
}

export const enums = {
  colors: ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'],
  sizes: ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']
}
