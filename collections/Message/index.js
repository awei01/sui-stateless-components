import React from 'react';
import classnames from 'classnames'
import { makeClassnameFactory, makeComponentWithClasses, OPTIONS } from '../../utils'
import 'semantic-ui-css/components/message.css'

const { color, size } = OPTIONS
export const STATES = [
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
    state: STATES,
    color,
    size,
  }
})

export const Message = ({
                        visible, state, color, size,
                        icon, floating, compact,
                        className, ...rest }) => {
  const classes = makeClasses({
    visible, state, color, size,
    icon, floating, compact
  }, className)
	return (
		<div {...rest} className={classes}/>
	)
}

export const Header = makeComponentWithClasses('header')
export const Content = makeComponentWithClasses('content')
