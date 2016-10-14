import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/message.css'
import Icon from '../../elements/Icon'

/*
 |-------------------------
 | Message
 |-------------------------
 */
export const messageDefinition = {
  icon: true,
  visible: {
    makeClassname: (value) => {
      return value ? 'visible' : 'hidden'
    }
  },
  floating: true,
  compact: true,
  attached: {
    values: ['top', 'bottom'],
    makeClassname: makeSuffixedClass.bind(null, 'attached')
  },
  state: ['info', 'warning', 'success', 'error', 'positive', 'negative'],
  color: enums.colors,
  size: enums.sizes
}
const _messageFactory = makeFactory(messageDefinition)
const Message = (props) => {
  const [classes, rest] = _messageFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'message')
  return (
    <div {...rest} className={className} />
  )
}
Message.propTypes = { ..._messageFactory.propTypes }
export default Message

/*
 |-------------------------
 | Message.Header
 |-------------------------
 */
const Header = (props) => {
  const className = classnames(props.className, 'header')
  return (
    <div {...props} className={className} />
  )
}
Header.displayName = 'Message.Header'
Message.Header = Header

/*
 |-------------------------
 | Message.List
 |-------------------------
 */
const List = (props) => {
  const className = classnames(props.className, 'list')
  return (
    <ul {...props} className={className} />
  )
}
List.displayName = 'Message.List'
Message.List = List

/*
 |-------------------------
 | Message.Content
 |-------------------------
 */
const Content = (props) => {
  const className = classnames(props.className, 'content')
  return (
    <div {...props} className={className} />
  )
}
Content.displayName = 'Message.Content'
Message.Content = Content

/*
 |-------------------------
 | Message.Close
 |-------------------------
 */
const Close = (props) => {
  return (
    <Icon {...props} glyph='close' />
  )
}
Close.displayName = 'Message.Close'
Message.Close = Close

/*
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
*/
