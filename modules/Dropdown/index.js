import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/dropdown.css'
import BaseIcon from '../../elements/Icon'
import Menu from '../../collections/Menu'

/*
 |-----------------------
 | Dropdown
 |-----------------------
 */
export const dropdownDefinition = {
  active: true,
  selection: true,
  search: true
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
export default Dropdown

/*
 |-----------------------
 | Dropdown.Text
 |-----------------------
 */
export const textDefinition = {
}
const _textFactory = makeFactory(textDefinition)
const Text = (props) => {
  const [classes, rest] = _textFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'text')
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
Dropdown.Menu = Menu.Submenu

/*
 |-----------------------
 | Dropdown.Item
 |-----------------------
 */
Dropdown.Item = Menu.Item
