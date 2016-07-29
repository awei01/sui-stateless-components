import React, { PropTypes } from 'react'
import { makeClassnameFactory, OPTIONS, COUNTS } from '../../utils';
import 'semantic-ui-css/components/form.css'
import 'semantic-ui-css/components/checkbox.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { size, equalWidth, wide } = OPTIONS

/*
 |---------------------------
 | Form
 |---------------------------
 */
export const makeFormClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'form',
  options: {
    size,
    equalWidth,
    state: ['success', 'error', 'warning']
  }
})
export const Form = ({
                      size, equalWidth,
                      inverted, loading,
                      state,
                      className, ...rest }) => {
  const classes = makeFormClasses({
    size, equalWidth,
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
export const makeFieldsClasses = makeClassnameFactory({
  suffix: 'fields',
  options: {
    fields: COUNTS,
    equalWidth
  }
})
export const Fields = ({
                        fields, grouped, equalWidth, inline,
                        className, ...rest
                        }) => {
  const classes = makeFieldsClasses({
    fields, grouped, equalWidth, inline
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
        */}
        <label htmlFor={id} style={id && { cursor: 'pointer' }}>{label}</label>
      </div>
    </Field>
  )
}
CheckboxOrRadio.propTypes = {
  label: PropTypes.string.isRequired
}

export const makeCheckboxClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'checkbox',
  options: {
    type: ['slider', 'toggle']
  }
})
export const Checkbox = ({ type, className, ...rest }) => {
  const classes = makeCheckboxClasses({ type }, className)
  return (
    <CheckboxOrRadio {...rest} type='checkbox' className={classes}/>
  )
}
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
