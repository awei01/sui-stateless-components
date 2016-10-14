import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/form.css'

/*
 |---------------------------
 | Form
 |---------------------------
 */
export const formDefinition = {
  loading: true,
  state: ['success', 'warning', 'error'],
  size: enums.sizes,
  equalWidth: options.equalWidth,
  inverted: true
}
const _formFactory = makeFactory(formDefinition)
const Form = (props) => {
  const [classes, rest] = _formFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'form')
  let element = 'div'
  if ('action' in rest) {
    element = 'form'
  }
  return React.createElement(element, { ...rest, className })
}
Form.propTypes = { ..._formFactory.propTypes }
export default Form

/*
 |---------------------------
 | Form.Field
 |---------------------------
 */
export const fieldDefinition = {
  error: true,
  disabled: true,
  inline: true,
  wide: options.wide,
  required: true
}
const _fieldFactory = makeFactory(fieldDefinition)
const Field = (props) => {
  const [classes, rest] = _fieldFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'field')
  return (
    <div {...rest} className={className} />
  )
}
Field.propTypes = { ..._fieldFactory.propTypes }
Field.displayName = 'Form.Field'
Form.Field = Field

/*
 |---------------------------
 | Form.Fields
 |---------------------------
 */
export const fieldsDefinition = {
  error: true,
  disabled: true,
  equalWidth: options.equalWidth,
  inline: true,
  required: true,
  count: {
    values: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
    makeClassname: makeSuffixedClass.bind(null, 'fields')
  },
  grouped: true
}
const _fieldsFactory = makeFactory(fieldsDefinition)
const Fields = (props) => {
  const [classes, rest] = _fieldsFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'fields')
  return (
    <div {...rest} className={className} />
  )
}
Fields.propTypes = { ..._fieldsFactory.propTypes }
Fields.displayName = 'Form.Fields'
Form.Fields = Fields
