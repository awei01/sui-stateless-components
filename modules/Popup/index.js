import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/popup.css';

const _positions = [
  'top left', 'top center', 'top right',
  'bottom left', 'bottom center', 'bottom right',
  'left center', 'right center'
]

/*
 |---------------------------
 | Tooltip
 |---------------------------
 */
export const tooltipDefinition = {
  position: _positions,
  inverted: true
}
const _tooltipFactory = makeFactory(tooltipDefinition)
export const Tooltip = (props) => {
  // this causes a problem when the children contains an input
  // the input will lose focuse because of cloning
  const { position, message, inverted, children } = props
  const data = {
    'data-position': position || _positions[0],
    'data-tooltip': message
  }
  if (inverted) {
    data['data-inverted'] = ''
  }
  return React.cloneElement(children, data)
}
Tooltip.displayName = 'Tooltip'
Tooltip.propTypes = {
  ..._tooltipFactory.propTypes,
  message: PropTypes.string.isRequired
}

/*
 |---------------------------
 | Popup
 |---------------------------
 */
export const popupDefinition = {
  visible: true,
  position: _positions,
  basic: true,
  width: ['wide', 'very wide', 'flowing', 'fluid'],
  size: ['mini', 'tiny', 'small', 'large', 'huge'],
  inverted: true
}
const _popupFactory = makeFactory(popupDefinition)
const Popup = (props) => {
  const [classes, rest] = _popupFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'popup')
  const style = rest.style || {}
  if (props.width === 'flowing') {
    style.right = 'auto'
  }
  return (
    <div {...rest} className={className} style={style} />
  )
}
Popup.propTypes = { ..._popupFactory.propTypes }
Popup.defaultProps = {
  position: 'top center'  // provide default, otherwise the arrow pointy thing position is screwy
}
Popup.displayName = 'Popup'
export default Popup

/*
 |---------------------------
 | Popup.Header
 |---------------------------
 */
const Header = (props) => {
  const className = classnames(props.className, 'header')
  return (
    <div {...props} className={className} />
  )
}
Header.displayName = 'Popup.Header'
Popup.Header = Header

/*
 |---------------------------
 | Popup.Content
 |---------------------------
 */
const Content = (props) => {
  const className = classnames(props.className, 'content')
  return (
    <div {...props} className={className} />
  )
}
Content.displayName = 'Popup.Content'
Popup.Content = Content
