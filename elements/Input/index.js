import React, { PropTypes } from 'react';
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/input.css'
/*
 |---------------------------
 | Input
 |---------------------------
 */
export const inputOptions = {
  focus: true,
  loading: true,
  disabled: true,
  error: true,
  icon: {
    values: [true, 'left'],
    makeClassname: makeSuffixedClass.bind(null, 'icon')
  },
  labeled: {
    values: [true, 'right', 'left corner', 'corner'],
    makeClassname: makeSuffixedClass.bind(null, 'labeled')
  },
  action: {
    values: [true, 'left'],
    makeClassname: makeSuffixedClass.bind(null, 'action')
  },
  transparent: true,
  inverted: true,
  fluid: true,
  size: ['mini', 'small', 'large', 'big', 'huge', 'massive']
}
const _inputFactory = makeFactory(inputOptions)
const Input = (props) => {
  const [classes, rest] = _inputFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'input')
  return (
    <div {...rest} className={className} />
  )
}
Input.propTypes = { ..._inputFactory.propTypes }
export default Input

/*
 |---------------------------
 | Input
 |---------------------------
const { size } = OPTIONS
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'input',
  options: {
    icon: makeOptionForValuesAndSuffix([true, 'left'], 'icon'),
    labeled: makeOptionForValuesAndSuffix([true, 'right', 'left corner', 'right corner'], 'labeled'),
    action: makeOptionForValuesAndSuffix([true, 'left'], 'action'),
    size
  }
})
export const Input = ({
                      icon, labeled, action, size,
                      focus, disabled, error, loading, transparent, inverted, fluid,
                      className, ...rest }) => {
  const classes = makeClasses({
    icon, labeled, action, size,
    focus, disabled, error, loading, transparent, inverted, fluid
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
*/
