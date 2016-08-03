import React from 'react';
import { makeClassnameFactory, makeComponentWithClasses } from '../../utils';
import 'semantic-ui-css/components/popup.css';

export const POSITIONS = [
  'top left', 'top center', 'top right',
  'bottom left', 'bottom center', 'bottom right',
  'left center', 'right center'
]

/*
 |---------------------------
 | makeTooltipProps
 |---------------------------
 */
export const makeTooltipProps = (content, options) => {
  options = options || {}
  if (!content || typeof content !== 'string') {
    throw new Error('First argument must be a non-empty string')
  }
  let { position, inverted } = options
  if (position && POSITIONS.indexOf(position) === -1) {
    throw new Error(`Invalid value [${position}] for option [position]`)
  }
  const result = {
    'data-tooltip': content,
    'data-position': position,
  }
  if (inverted) {
    result['data-inverted'] = ''
  }
  return result
}

/*
 |---------------------------
 | Popup
 |---------------------------
 */
export const WIDTHS = ['wide', 'very wide', 'fluid', 'flowing']
export const SIZES = ['mini', 'tiny', 'small', 'large', 'huge']
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'popup',
  options: {
    position: POSITIONS,
    width: WIDTHS,
    size: SIZES
  }
})
export const Popup = ({
                      position, width, size,
                      visible, basic, inverted,
                      style, className, ...rest }) => {
  const classes = makeClasses({
    position, width, size,
    visible, basic, inverted
  }, className)
  // handle flowing style to set right: auto
  style = style || {}
  const passedStyle = { ...style }
  if (width === 'flowing') {
    passedStyle.right = 'auto'
  }
  return (
    <div {...rest} className={classes} style={passedStyle}/>
  )
}
Popup.defaultProps = {
  position: 'top center'
}

/*
 |---------------------------
 | Supporting components
 |---------------------------
 */
export const Header = makeComponentWithClasses('header')
export const Content = makeComponentWithClasses('content')
