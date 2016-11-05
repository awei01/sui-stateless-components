import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/button.css'

/*
 |-----------------------
 | shared
 |-----------------------
 */
const makeAttachedClassname = makeSuffixedClass.bind(null, 'attached')

/*
 |-----------------------
 | Button
 |-----------------------
 */
export const buttonDefinition = {
  emphasis: ['primary', 'secondary'],
  animated: {
    values: [true, 'vertical', 'fade'],
    makeClassname: makeSuffixedClass.bind(null, 'animated')
  },
  labeled: {
    values: [true, 'left', 'right'],
    makeClassname: makeSuffixedClass.bind(null, 'labeled')
  },
  icon: true,
  basic: true,
  inverted: true,
  active: true,
  disabled: true,
  loading: true,
  social: ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube'],
  size: enums.sizes,
  floated: options.floated,
  color: enums.colors,
  compact: true,
  toggle: {
    values: [true, 'active'],
    makeClassname: makeSuffixedClass.bind(null, 'toggle')
  },
  fluid: true,
  circular: true,
  attached: {
    values: ['top', 'bottom', 'left', 'right'],
    makeClassname: makeAttachedClassname
  },
  hint: ['positive', 'negative']
}

const _buttonFactory = makeFactory(buttonDefinition)

const Button = (props) => {
  const [classes, rest] = _buttonFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'button')
  let element = 'button'
  switch (true) {
    case !!props.animated :
    case !!props.labeled :
    case props.attached === 'top' || props.attached === 'bottom' :
      element = 'div'
      break;
    case !!props.href :
      element = 'a'
      break;
  }
  return React.createElement(element, {
    ...rest,
    className,
    disabled: props.disabled
  })
}
Button.propTypes = { ..._buttonFactory.propTypes }
Button.displayName = 'Button'
export default Button

/*
 |-----------------------
 | Button.Content
 |-----------------------
 */
export const contentDefinition = {
  visible: {
    makeClassname: (value) => {
      return value ? 'visible' : 'hidden'
    },
    isRequired: true
  }
}
const _contentFactory = makeFactory(contentDefinition)
const Content = (props) => {
  const [classes, rest] = _contentFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'content')
  return (
    <div {...rest} className={className} />
  )
}
Content.propTypes = { ..._contentFactory.propTypes }
Content.displayName = 'Button.Content'
Button.Content = Content

/*
 |-----------------------
 | Buttons
 |-----------------------
 */
export const buttonsDefinition = {
  icon: true,
  attached: {
    values: ['top', 'bottom'],
    makeClassname: makeAttachedClassname
  },
  vertical: true,
  labeled: true,
  count: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
  basic: true,
  color: enums.colors,
  size: enums.sizes
}
const _buttonsFactory = makeFactory(buttonsDefinition)
export const Buttons = (props) => {
  const [classes, rest] = _buttonsFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'buttons')
  return (<div {...rest} className={className} />)
}
Buttons.displayName = 'Buttons'
Buttons.propTypes = { ... _buttonsFactory.propTypes }

/*
 |-----------------------
 | Buttons.Or
 |-----------------------
 */
const Or = (props) => {
  return (<div {...props} className='or' />)
}
Or.displayName = 'Buttons.Or'
Buttons.Or = Or
