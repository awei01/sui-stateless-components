import React, { PropTypes } from 'react';
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/button.css';

const { color, size } = OPTIONS;

export const makeClasses = makeClassnameFactory({
  prefix: "ui",
  suffix: "button",
  options: {
    emphasis: ['primary', 'secondary'],
    hint: ['positive', 'negative'],
    color,
    size,
    labeled: {
      values: [true, 'left', 'right'],
      makeKey: (value) => {
        let result = 'labeled'
        if (value !== true) {
          result = `${value} ${result}`
        }
        return result;
      }
    }

  }
});

export const Button = ({
                        type,   // not SUI option
                        emphasis, hint,
                        active, loading, disabled,
                        icon, circular,
                        color, size,
                        labeled,
                        className, ...rest }) => {

  let element = 'button'
  const passedProps = { ...rest, type, disabled }

  if (labeled && !icon) {
    // this is a labeled div tag with content
    passedProps.className = makeClasses({ labeled, disabled }, className)
    passedProps.tabIndex = 0
    delete passedProps.disabled
    element = 'div'
  } else {
    passedProps.className = makeClasses({
      emphasis, hint,
      active, loading,
      // we're going to handle disabled by setting attribute, otherwise ENTER can still submit on form
      icon, circular,
      color, size,
      labeled
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
