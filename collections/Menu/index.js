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
  format: ['secondary', 'tabular', 'text', 'pointing'],
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
  fitted
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


/*
 |---------------------------
 | Shared options
 |---------------------------

const fitted = makeOptionForValuesAndSuffix([true, 'horizontally', 'vertically'], 'fitted')
export const COLORS = without(OPTIONS.color, 'black')

export const SIZES = without(OPTIONS.size, 'medium', 'huge')
export const COUNTS = without(BASE_COUNTS, 'thirteen', 'fourteen', 'fifteen', 'sixteen')
export const FORMATS = ['secondary', 'tabular', 'text', 'pagination']
export const makeMenuClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'menu',
  options: {
    format: FORMATS,
    fixed: makeOptionForValuesAndSuffix(['top', 'bottom', 'left', 'right'], 'fixed'),
    color: COLORS,
    icon: makeOptionForValuesAndSuffix([true, 'labeled'], 'icon'),
    fit: ['fluid', 'compact'],
    items: makeOptionForValuesAndSuffix(COUNTS, 'item'),
    attached: makeOptionForValuesAndSuffix(['top', 'bottom'], 'attached'),
    fitted,
    size: SIZES
  }
})
export const Menu = ({
                      format, fixed, color, icon, fit, items, attached, size, fitted,
                      pointing, vertical, stackable, inverted, borderless,
                      className, ...rest }) => {
  const classes = makeMenuClasses({
    format, fixed, color, icon, fit, items, attached, size, fitted,
    pointing, vertical, stackable, inverted, borderless
  }, className);
  return (
    <div {...rest} className={classes}/>
  );
}

/*
 |---------------------------
 | Item
 |---------------------------
/
export const makeItemClasses = makeClassnameFactory({
  suffix: 'item',
  options: {
    fitted,
    color: COLORS
  }
})
export const Item = ({
                      fitted, color,
                      active, right, down, link, header, dropdown,
                      href,
                      className, ...rest }) => {
  // special handling for dropdown because it should be 'ui dropdown'
  const isDropdown = {
    'ui dropdown': dropdown
  }
  const classes = makeItemClasses({
    fitted, color,
    active, right, down, link, header, ...isDropdown
  }, className);
  const passedProps = { ...rest, className: classes }
  let element = 'div'
  if (href) {
    element = 'a'
    passedProps.href = href
  }
  return React.createElement(element, passedProps)
}
Item.propTypes = {
  href: PropTypes.string
}


/*
 |---------------------------
 | Submenu
 |---------------------------
export const makeSubmenuClasses = makeClassnameFactory({
  suffix: 'menu'
})
export const Submenu = ({ right, className, ...rest }) => {
  const classes = makeSubmenuClasses({ right }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
*/
