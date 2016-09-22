import { PropTypes } from 'react'
import classnames from 'classnames'
import without from 'lodash/without'

const _useValueAsClass = (value) => {
  return value
}
export const makeFactory = ({ prefix, suffix, options }) => {
  // first resolve the options to make generate propTypes
  // and to generate the rules to convert props to classes
  options = options || {}
  const propTypes = {}
  const propsToClasses = {}
  Object.keys(options).forEach((key) => {
    if (key === 'className') {
      throw new Error('Invalid options property [className]')
    }
    const option = options[key]
    let values
    let makeClassName
    if (Array.isArray(option)) {
      // this is an option with an array of possible values, use the default makeClassName method
      values = option
      makeClassName = _useValueAsClass
    } else if (typeof option === 'object') {
      ({ values, makeClassName } = option)
    }
    propTypes[key] = values ? PropTypes.oneOf(values) : PropTypes.boolean
    propsToClasses[key] = {
      values,
      makeClassName
    }
  })

  const extractClassName = (props) => {
    const classes = Object.keys(props).reduce((result, key) => {
      const value = props[key]
      if (key === 'className') {
        // passing a className, just set it to true so classnames can handle it
        result[value] = true
        return result
      }
      const option = propsToClasses[key]
      if (!option) {
        // this prop key is not handled by this factory, just skip it
        return result
      }
      result[option.makeClassName(value)] = true
    }, {})
    return classnames(prefix, classes, suffix)
  }

  const

  return {
    prefix,
    suffix,
    propTypes,
    extractClassName
  }
}
