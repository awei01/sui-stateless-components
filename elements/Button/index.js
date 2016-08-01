import without from 'lodash/without'
import React, { PropTypes } from 'react'
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS, COUNTS as BASE_COUNTS } from '../../utils'
import 'semantic-ui-css/components/button.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { color, size } = OPTIONS

/*
 |---------------------------
 | Button
 |---------------------------
 */
const { float } = OPTIONS;
export const SOCIALS = ['facebook', 'twitter', 'google plus', 'vk', 'linkedin', 'instagram', 'youtube']
export const BUTTON_ATTACHEDS = ['top', 'bottom', 'left', 'right']
export const makeButtonClasses = makeClassnameFactory({
  prefix: "ui",
  suffix: "button",
  options: {
    emphasis: ['primary', 'secondary'],
    animated: makeOptionForValuesAndSuffix([true, 'vertical', 'fade'], 'animated'),
    labeled: {
      values: [true, 'left', 'right'],
      makeKey: (value) => {
        let result = 'labeled'
        if (value !== true) {
          result = `${value} ${result}`
        }
        return result;
      }
    },
    social: SOCIALS,
    size,
    float,
    color,
    toggle: makeOptionForValuesAndSuffix([true, 'active'], 'toggle'),
    hint: ['positive', 'negative'],
    attached: makeOptionForValuesAndSuffix(BUTTON_ATTACHEDS, 'attached')
  }
});
export const Button = ({
                        type,   // not SUI option
                        emphasis, animated, labeled, social, size, float, color, toggle, hint, attached,
                        basic, inverted, active, disabled, loading, icon, fluid, circular, compact,
                        className, ...rest }) => {

  let element = 'button'
  const passedProps = { ...rest, type, disabled }

  if (animated || (labeled && !icon)) {
    // this is animated or labeled (but not a labeled icon) so use a div
    // if this is a labeled icon button, we can just use the button tag
    passedProps.className = makeButtonClasses({ labeled, animated, disabled }, className)
    passedProps.tabIndex = 0
    delete passedProps.disabled
    element = 'div'
  } else {
    passedProps.className = makeButtonClasses({
      emphasis, labeled, social, size, float, color, toggle, hint, attached,
      basic, inverted, active, loading, icon, fluid, circular, compact
      // we're going to handle disabled by setting attribute,
      // otherwise ENTER can still submit on form
    }, className)
  }

  return React.createElement(element, passedProps)
}
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired
}
Button.defaultProps = {
  type: "button",
}

/*
 |---------------------------
 | Buttons
 |---------------------------
 */
export const BUTTONS_ATTACHEDS = ['top', 'bottom']
export const COUNTS = without(BASE_COUNTS, 'one', 'thirteen', 'fourteen', 'fifteen', 'sixteen')
export const makeButtonsClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'buttons',
  options: {
    icon: makeOptionForValuesAndSuffix([true, 'labeled'], 'icon'),
    attached: makeOptionForValuesAndSuffix(BUTTONS_ATTACHEDS, 'attached'),
    buttons: COUNTS,
    color,
    size
  }
})
export const Buttons = ({
                        icon, attached, vertical, buttons, color, size,
                        basic,
                        className, ...rest }) => {
  const classes = makeButtonsClasses({
    icon, attached, vertical, buttons, color, size,
    basic
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
