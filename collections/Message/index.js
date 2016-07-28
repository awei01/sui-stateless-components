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
  if (compact) {
    // kludge hack. looks like there is a bug in SUI where
    // .ui.visible.compact.message takes .ui.visible.message rule of {display: block}
    visible = undefined
  }

	const classes = makeClasses({
    visible, type, color, size,
    icon, floating, compact
  }, className)
	return (
		<div {...rest} className={classes}/>
	)
}
Message.defaultProps = {
  visible: true
}

export const MessageHeader = makeComponentWithClasses({ classes: 'header' })
export const MessageContent = makeComponentWithClasses({ classes: 'content' })
