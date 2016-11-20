import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/dropdown.css'
import BaseIcon from '../../elements/Icon'

/*
 |-----------------------
 | Dropdown
 |-----------------------
 */
export const dropdownDefinition = {
  active: true,
  selection: true,
  inline: true,
  pointing: true,
  floating: true,
  simple: true,
  loading: true,
  error: true,
  disabled: true,
  compact: true,
  fluid: true
}
const _dropdownFactory = makeFactory(dropdownDefinition)
const Dropdown = (props) => {
  const [classes, rest] = _dropdownFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'dropdown')
  return (
    <div {...rest} className={className} />
  )
}
Dropdown.propTypes = { ..._dropdownFactory.propTypes }
Dropdown.displayName = 'Dropdown'
export default Dropdown

/*
 |-----------------------
 | Dropdown.Text
 |-----------------------
 */
export const textDefinition = {
  default: true
}
const _textFactory = makeFactory(textDefinition)
const Text = (props) => {
  const [classes, rest] = _textFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'text')
  return (
    <div {...rest} className={className} />
  )
}
Text.propTypes = { ..._textFactory.propTypes }
Text.displayName = 'Dropdown.Text'
Dropdown.Text = Text

/*
 |-----------------------
 | Dropdown.Icon
 |-----------------------
 */
const Icon = (props) => {
  return (
    <BaseIcon {...props} glyph='dropdown' />
  )
}
Icon.displayName = 'Dropdown.Icon'
Dropdown.Icon = Icon


/*
 |-----------------------
 | Dropdown.Menu
 |-----------------------
 */
export const menuDefinition = {
  visible: true
}
const _menuFactory = makeFactory(menuDefinition)
const Menu = (props) => {
  const [classes, rest] = _menuFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'menu')
  const style = rest.style || {}
  if (props.visible) {
    style.display = 'block'
  }
  return (
    <div {...rest} className={className} style={style}/>
  )
}
Menu.propTypes = { ..._menuFactory.propTypes }
Menu.displayName = 'Dropdown.Menu'
Dropdown.Menu = Menu

/*
 |-----------------------
 | Dropdown.Menu.Header
 |-----------------------
 */
const Header = (props) => {
  const className = classnames(props.className, 'header')
  return (
    <div {...props} className={className} />
  )
}
Header.displayName = 'Dropdown.Menu.Header'
Menu.Header = Header

/*
 |-----------------------
 | Dropdown.Menu.Item
 |-----------------------
 */
export const itemDefinition = {
  active: true,
  disabled: true
}
const _itemFactory = makeFactory(itemDefinition)
const Item = (props) => {
  const [classes, rest] = _itemFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'item')
  return (
    <div {...rest} className={className} />
  )
}
Item.propTypes = { ..._itemFactory.propTypes }
Item.displayName = 'Dropdown.Menu.Item'
Menu.Item = Item

/*
 |-----------------------
 | Dropdown.Menu.Divider
 |-----------------------
 */
const Divider = (props) => {
  const className = classnames(props.className, 'divider')
  return (
    <div {...props} className={className} />
  )
}
Divider.displayName = 'Dropdown.Menu.Divider'
Menu.Divider = Divider
