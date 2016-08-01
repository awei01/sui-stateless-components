import without from 'lodash/without'
import React, { PropTypes } from 'react';
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS, COUNTS as BASE_COUNTS} from '../../utils';
import 'semantic-ui-css/components/menu.css';

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const fitted = makeOptionForValuesAndSuffix([true, 'horizontally', 'vertically'], 'fitted')
export const COLORS = without(OPTIONS.color, 'black')

/*
 |---------------------------
 | Menu
 |---------------------------
 */
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
 */
export const makeItemClasses = makeClassnameFactory({
  suffix: 'item',
  options: {
    fitted,
    color: COLORS
  }
})
export const Item = ({
                      fitted, color,
                      active, down, link, header,
                      href,
                      className, ...rest }) => {
  const classes = makeItemClasses({
    fitted, color,
    active, down, link, header
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
 | SubMenu
 |---------------------------
 */
export const makeSubMenuClasses = makeClassnameFactory({
  suffix: 'menu'
})
export const SubMenu = ({ right, className, ...rest }) => {
  const classes = makeSubMenuClasses({ right }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
