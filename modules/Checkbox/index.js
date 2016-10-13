import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/checkbox.css'

/*
 |-----------------------
 | shared
 |-----------------------
const CheckboxOrRadio = ({
                          id, label, type,
                          required, disabled, error,
                          className, ...rest }) => {
  return (
    <Field required={required} disabled={disabled} error={error}>
      <div className={className}>
        <input {...rest} id={id} type={type} disabled={disabled}/>
        {/*
          - we're manually adding in the { cursor: pointer } when [id] is present
            it seems like SUI doesn't do this for us
          - we CANNOT wrap <label><input/></label> nor can we put <label/> before <input/>
            because SUI does some funky stuff with CSS to cover up the actual input
        /}
        <label htmlFor={id} style={id && { cursor: 'pointer' }}>{label}</label>
      </div>
    </Field>
  )
}
CheckboxOrRadio.propTypes = {
  label: PropTypes.string.isRequired
}

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

/*
 |---------------------------
 | Radio
 |---------------------------
export const makeRadioClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'radio checkbox',
})
export const Radio = ({ className, ...rest }) => {
  const classes = makeRadioClasses(className)
  return (
    <CheckboxOrRadio {...rest} type='radio' className={classes}/>
  )
}
*/
