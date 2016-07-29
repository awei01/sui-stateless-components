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
export const makeMenuClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'menu',
  options: {
    type: ['secondary', 'tabular', 'text', 'pagination'],
    fit: ['fluid', 'compact'],
    fitted,
    size: SIZES,
    color: COLORS,
    items: makeOptionForValuesAndSuffix(COUNTS, 'item')
  }
})
export const Menu = ({
                      type, fit, size, fitted, color, items,
                      pointing, vertical, inverted, borderless,
                      className, ...rest }) => {
  const classes = makeMenuClasses({
    type, fit, size, fitted, color, items,
    pointing, vertical, inverted, borderless
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
