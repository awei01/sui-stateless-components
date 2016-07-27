import React from 'react'
import classnames from 'classnames'

import 'semantic-ui-css/components/form.css'
import 'semantic-ui-css/components/checkbox.css'

export const makeFormClasses = (classes) => {
  return classnames('ui', classes, 'form')
}
export const Form = ({ loading, children, ...rest }) => {	// eslint-disable-line
  const classes = makeFormClasses({ loading })
  return (
    <form {...rest} className={classes}>
      {children}
    </form>
  )
}

export const makeFieldClasses = (classes) => {
  return classnames(classes, 'field')
}
export const Field = ({ required, error, disabled, children }) => {
  const classes = makeFieldClasses({ required, error, disabled})
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export const makeFieldsClasses = (classes) => {
  return classnames(classes, 'fields')
}
export const Fields = ({ inline, children }) => {
  const classes = makeFieldsClasses({ inline})
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export const makeCheckboxClasses = (classes) => {
  return classnames('ui', classes, 'checkbox')
}
export const Checkbox = ({ type, children }) => {
  const classes = makeCheckboxClasses({ [type]: true })
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
