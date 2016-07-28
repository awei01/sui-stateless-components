import React from 'react';
import classnames from 'classnames'
import { makeClassnameFactory, makeComponentWithClasses, OPTIONS } from '../../utils'
import 'semantic-ui-css/components/message.css'

const { color, size } = OPTIONS
export const TYPES = [
  'warning', 'info',
  'positive', 'success',
  'negative', 'error'
]
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'message',
  options: {
    visible: {
      values: [true, false],
      makeKey: (value) => {
        return value ? 'visible' : 'hidden'
      },
    },
    type: TYPES,
    color,
    size,
  }
})

export const Message = ({
  visible, type, color, size,
  icon, floating, compact,
  className, ...rest }) => {
  const classes = makeClasses({
    visible, type, color, size,
    icon, floating, compact
  }, className)
	return (
		<div {...rest} className={classes}/>
	)
}

export const Header = makeComponentWithClasses({ classes: 'header' })
export const Content = makeComponentWithClasses({ classes: 'content' })
