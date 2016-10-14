import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/checkbox.css'

/*
 |-----------------------
 | Checkbox
 |-----------------------
 */
export const checkboxDefinition = {
  type: {
    values: ['checkbox', 'radio'],
    makeClassname: (value) => {
      return value === 'radio' ? value : ''
    },
    isRequired: true
  },
  format: ['slider', 'toggle'],
  readOnly: {
    makeClassname: (value) => {
      return value && 'read-only'
    }
  },
  fitted: true
}
const _checkboxFactory = makeFactory(checkboxDefinition)
const Checkbox = (props) => {
  const { id, type, children, readOnly } = props
  const [classes, rest] = _checkboxFactory.extractClassesAndProps(props)
  if (type === 'radio') {
    // the radio cannot have a format='slider|toggle'
    classes.slider = classes.toggle = false
  }
  const className = classnames('ui', classes, 'checkbox')
  // children were provided, assume developer knows what he's doing
  if (children) {
    return (
      <div {...rest} className={className} />
    )
  }
  // pull out props that don't belong on <input />
  const { label, ...remainder } = rest

  let htmlFor = id
  const _inputStyle = {}
  if (readOnly) {
    // remove label clicking and hide the input
    htmlFor = null
    _inputStyle.visibility = 'hidden'
  }

  const _labelStyle = {}
  if (htmlFor) {
    // add in { cursor: pointer } when [id] is present. SUI doesn't do this for us
    _labelStyle.cursor = 'pointer'
  }

  // we CANNOT wrap <label><input/></label> nor can we put <label/> before <input/>
  // because SUI does some funky stuff with CSS to cover up the actual input
  return (
    <div className={className}>
      <input {...remainder} type={type} style={_inputStyle} />
      <label htmlFor={htmlFor} style={_labelStyle}>{label}</label>
    </div>
  )
}
Checkbox.propTypes = {
  ..._checkboxFactory.propTypes,
  label: PropTypes.string
}
Checkbox.defaultProps = {
  type: 'checkbox'
}
export default Checkbox
