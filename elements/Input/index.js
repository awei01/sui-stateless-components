import React, { PropTypes } from 'react';
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/input.css'
/*
 |---------------------------
 | Input
 |---------------------------
 */
export const inputDefinition = {
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
const _inputFactory = makeFactory(inputDefinition)
const Input = (props) => {
  const [classes, rest] = _inputFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'input')
  return (
    <div {...rest} className={className} />
  )
}
Input.propTypes = { ..._inputFactory.propTypes }
export default Input
