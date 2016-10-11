import React, { PropTypes } from 'react'
import classnames from 'classnames'
import 'semantic-ui-css/components/button.css'

function useValueAsClass (value) {
  return value
}
function makeSuffixedClass (suffix, value) {
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

function makeFactory (options) {
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

/*
 |-----------------------
 | shared
 |-----------------------
 */
const makeAttachedClassname = makeSuffixedClass.bind(null, 'attached')
const _colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']
const _sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive']
/*
 |-----------------------
 | Button
 |-----------------------
 */
export const buttonOptions = {
  emphasis: ['primary', 'secondary'],
  animated: {
    values: [true, 'vertical', 'fade'],
    makeClassname: makeSuffixedClass.bind(null, 'animated')
  },
  labeled: {
    values: [true, 'left', 'right'],
    makeClassname: makeSuffixedClass.bind(null, 'labeled')
  },
  icon: true,
  basic: true,
  inverted: true,
  active: true,
  disabled: true,
  loading: true,
  social: ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube'],
  size: _sizes,
  floated: {
    values: ['left', 'right'],
    makeClassname: makeSuffixedClass.bind(null, 'floated')
  },
  color: _colors,
  compact: true,
  toggle: {
    values: [true, 'active'],
    makeClassname: makeSuffixedClass.bind(null, 'toggle')
  },
  fluid: true,
  circular: true,
  attached: {
    values: ['top', 'bottom', 'left', 'right'],
    makeClassname: makeAttachedClassname
  },
  hint: ['positive', 'negative']
}

const _buttonFactory = makeFactory(buttonOptions)

const Button = (props) => {
  const [classes, rest] = _buttonFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'button')
  let element = 'button'
  switch (true) {
    case !!props.animated :
    case !!props.labeled :
    case props.attached === 'top' || props.attached === 'bottom' :
      element = 'div'
  }
  return React.createElement(element, {
    ...rest,
    className,
    disabled: props.disabled
  })
}
Button.propTypes = { ..._buttonFactory.propTypes }
export default Button

/*
 |-----------------------
 | Button.Content
 |-----------------------
 */
export const contentOptions = {
  visible: {
    makeClassname: (value) => {
      return value ? 'visible' : 'hidden'
    },
    isRequired: true
  }
}
const _contentFactory = makeFactory(contentOptions)
const Content = (props) => {
  const [classes, rest] = _contentFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'content')
  return (
    <div {...rest} className={className} />
  )
}
Content.propTypes = { ..._contentFactory.propTypes }
Content.displayName = 'Button.Content'
Button.Content = Content

/*
 |-----------------------
 | Buttons
 |-----------------------
 */
export const buttonsOptions = {
  icon: true,
  attached: {
    values: ['top', 'bottom'],
    makeClassname: makeAttachedClassname
  },
  vertical: true,
  labeled: true,
  count: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
  basic: true,
  color: _colors,
  size: _sizes
}
const _buttonsFactory = makeFactory(buttonsOptions)
export const Buttons = (props) => {
  const [classes, rest] = _buttonsFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'buttons')
  return (<div {...rest} className={className} />)
}
Buttons.propTypes = { ... _buttonsFactory.propTypes }

/*
 |-----------------------
 | Buttons.Or
 |-----------------------
 */
const Or = (props) => {
  return (<div {...props} className='or' />)
}
Or.displayName = 'Buttons.Or'
Buttons.Or = Or
