import React, { PropTypes } from 'react'
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/form.css'
import 'semantic-ui-css/components/checkbox.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { equal, wide } = OPTIONS

/*
 |---------------------------
 | Form
 |---------------------------
 */
const { size } = OPTIONS
export const FORM_STATES = ['success', 'error', 'warning']
export const makeFormClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'form',
  options: {
    size,
    equal,
    state: FORM_STATES
  }
})
export const Form = ({
                      size, equal,
                      inverted, loading,
                      state,
                      className, ...rest }) => {
  const classes = makeFormClasses({
    size, equal,
    inverted, loading,
    state
  }, className)
  return (
    <form {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Fields
 |---------------------------
 */
export const FIELDS_COUNTS = wide.values.slice(1, 10)
export const makeFieldsClasses = makeClassnameFactory({
  suffix: 'fields',
  options: {
    fields: FIELDS_COUNTS,
    equal
  }
})
export const Fields = ({
                        fields, grouped, equal, inline,
                        className, ...rest
                        }) => {
  const classes = makeFieldsClasses({
    fields, grouped, equal, inline
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Field
 |---------------------------
 */
export const makeFieldClasses = makeClassnameFactory({
  suffix: 'field',
  options: {
    wide
  }
})
export const Field = ({
                        wide,
                        inline, required, error, disabled,
                        className, ...rest
                        }) => {
  const classes = makeFieldClasses({
    wide,
    inline, required, error, disabled
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}

// checkbox and radio helpers
const CheckboxOrRadio = ({
                          id, label, type, disabled,
                          className, ...rest }) => {
  return (
    <div className={className}>
      <input {...rest} id={id} type={type} disabled={disabled}/>
      {/*
        - we're manually adding in the { cursor: pointer } when [id] is present
          it seems like SUI doesn't do this for us
        - we CANNOT wrap <label><input/></label> nor can we put <label/> before <input/>
          because SUI does some funky stuff with CSS to cover up the actual input
        - we ALWAYS render label, otherwise SUI can't display properly
      */}
      <label htmlFor={id} style={id && { cursor: 'pointer' }}>{label}</label>
    </div>
  )
}
CheckboxOrRadio.propTypes = {
  label: PropTypes.string
}

/*
 |---------------------------
 | Checkbox
 |---------------------------
 */
export const makeCheckboxClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'checkbox',
  options: {
    format: ['slider', 'toggle']
  }
})
export const Checkbox = ({ format, className, ...rest }) => {
  const classes = makeCheckboxClasses({ format }, className)
  return (
    <CheckboxOrRadio {...rest} type='checkbox' className={classes}/>
  )
}

/*
 |---------------------------
 | Radio
 |---------------------------
 */
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
