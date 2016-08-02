import React from 'react'
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS } from '../../utils'
import 'semantic-ui-css/components/input.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */

/*
 |---------------------------
 | Input
 |---------------------------
 */
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
