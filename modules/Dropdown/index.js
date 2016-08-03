import React from 'react';
import { makeClassnameFactory, makeComponentWithClasses, makeOptionForValuesAndSuffix, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/dropdown.css';

/*
 |---------------------------
 | Shared options
 |---------------------------
 */


/*
 |---------------------------
 | Dropdown
 |---------------------------
 */
export const SELECTIONS = [true, 'search', 'multiple', 'multiple search']
export const POINTINGS = [true, 'top left', 'top right', 'left', 'right', 'bottom', 'bottom left', 'bottom right', 'upward']
export const makeDropdownClasses = makeClassnameFactory({
  prefix: "ui",
  suffix: "dropdown",
  options: {
    selection: makeOptionForValuesAndSuffix(SELECTIONS, 'selection'),
    pointing: makeOptionForValuesAndSuffix(POINTINGS, 'pointing')
  }
});
export const Dropdown = ({
                        selection, pointing,
                        active, inline, floating, simple, loading, error, disabled, scrolling, compact, fluid,
                        className, children, ...rest }) => {
  const classes = makeDropdownClasses({
    selection, pointing,
    active, inline, floating, simple, loading, error, disabled, scrolling, compact, fluid
  }, className)
  if (active && !disabled) {
    children = React.Children.map(children, (child) => {
      if (child.type !== Menu) {
        // not a menu, ignore it
        return child
      }
      return React.cloneElement(child, { active: true })
    })
  }
  return (
    <div {...rest} className={classes}>{children}</div>
  )
}

/*
 |---------------------------
 | Menu
 |---------------------------
 */
export const makeMenuClasses = makeClassnameFactory({
  suffix: 'menu',
  options: {
    direction: ['left', 'right']
  }
})
export const Menu = ({
                      active, scrolling, direction,
                      style, className, ...rest }) => {
  style = style || {}
  // active doesn't do anything other than set the style
  const classes = makeMenuClasses({ scrolling, direction }, className)
  if (active) {
    style.display = 'block'
  }
  return (
    <div {...rest} className={classes} style={style}/>
  )
}

/*
 |---------------------------
 | Text
 |---------------------------
 */
export const makeItemClasses = makeClassnameFactory({
  suffix: 'item'
})
export const Item = ({ selected, filtered, disabled, className, ...rest }) => {
  const classes = makeItemClasses({ selected, filtered, disabled }, className)
  return (
    <div {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Text
 |---------------------------
 */
export const makeTextClasses = makeClassnameFactory({
  suffix: 'text'
})
export const Text = ({ filtered, className, ...rest }) => {
  // special handling for [default] key because it causes syntax errors
  const isDefault = {
    default: rest.default
  }
  delete rest.default
  const classes = makeTextClasses({ filtered, ...isDefault }, className)
  return (
    <span {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Supporting components
 |---------------------------
 */
export const Search = makeComponentWithClasses('search', 'input')
export const Header = makeComponentWithClasses('header')
export const Divider = makeComponentWithClasses('divider')
export const Description = makeComponentWithClasses('description', 'span')
