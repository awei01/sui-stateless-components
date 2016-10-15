import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/menu.css';

const fitted = {
  values: [true, 'vertically', 'horizontally'],
  makeClassname: makeSuffixedClass.bind(null, 'fitted')
}

/*
 |---------------------------
 | Menu
 |---------------------------
 */
export const menuDefinition = {
  format: ['secondary', 'tabular', 'text', 'pagination'],
  pointing: true,
  vertical: true,
  fixed: {
    values: ['top', 'left', 'right', 'bottom'],
    makeClassname: makeSuffixedClass.bind(null, 'fixed')
  },
  inverted: true,
  color: enums.colors,
  icon: {
    values: [true, 'labeled'],
    makeClassname: makeSuffixedClass.bind(null, 'icon')
  },
  fit: ['fluid', 'compact'],
  count: {
    values: ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
    makeClassname: makeSuffixedClass.bind(null, 'item')
  },
  attached: options.attached,
  size: enums.sizes,
  fitted,
  borderless: true
}
const _menuFactory = makeFactory(menuDefinition)
const Menu = (props) => {
  const [classes, rest] = _menuFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'menu')
  return (
    <div {...rest} className={className} />
  )
}
Menu.propTypes = { ..._menuFactory.propTypes }
export default Menu

/*
 |---------------------------
 | Menu.Item
 |---------------------------
 */
export const itemDefinition = {
  header: true,
  link: true,
  down: true,
  active: true,
  fitted,
  right: true
}
const _itemFactory = makeFactory(itemDefinition)
const Item = (props) => {
  const [classes, rest] = _itemFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'item')
  let element = 'div'
  if (rest.href) {
    element = 'a'
  }
  return React.createElement(element, { ...rest, className })
}
Item.propTypes = { ..._itemFactory.propTypes }
Item.displayName = 'Menu.Item'
Menu.Item = Item

/*
 |---------------------------
 | Menu.Submenu
 |---------------------------
 */
export const submenuDefinition = {
  right: true
}
const _submenuFactory = makeFactory(submenuDefinition)
const Submenu = (props) => {
  const [classes, rest] = _submenuFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'menu')
  let element = 'div'
  if (rest.href) {
    element = 'a'
  }
  return React.createElement(element, { ...rest, className })
}
Submenu.propTypes = { ..._submenuFactory.propTypes }
Submenu.displayName = 'Menu.Submenu'
Menu.Submenu = Submenu
