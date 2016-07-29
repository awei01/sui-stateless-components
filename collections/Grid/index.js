import React from 'react'
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS, COUNTS } from '../../utils';
import 'semantic-ui-css/components/grid.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { color, align, equal, wide } = OPTIONS
const columns = makeOptionForValuesAndSuffix(COUNTS, 'column')
const valign = makeOptionForValuesAndSuffix(['top', 'middle', 'bottom'], 'aligned')
/*
 |---------------------------
 | Grid
 |---------------------------
 */
export const makeGridClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'grid',
  options: {
    columns,
    equal,
    align,
    valign,
    divided: makeOptionForValuesAndSuffix([true, 'vertically'], 'divided'),
    celled: makeOptionForValuesAndSuffix([true, 'internally'], 'celled'),
    padded: makeOptionForValuesAndSuffix([true, 'vertically', 'horizontally'], 'padded'),
    relaxed: makeOptionForValuesAndSuffix([true, 'very'], 'relaxed')
  }
})
export const Grid = ({
  stretched, centered,
  equal, columns,
  align, valign,
  padded, relaxed,
  divided, celled,
  className, ...rest }) => {
  const classes = makeGridClasses({
    stretched, centered,
    equal, columns,
    align, valign,
    padded, relaxed,
    divided, celled
  }, className)
  return (
    <div { ...rest } className={classes}/>
  )
}

/*
 |---------------------------
 | Grid
 |---------------------------
 */
export const makeRowClasses = makeClassnameFactory({
  suffix: 'row',
  options: {
    columns,
    equal,
    color,
    align,
    valign
  }
})
export const Row = ({
  stretched, centered,
  equal, columns, color, align, valign,
  className, ...rest }) => {
  const classes = makeRowClasses({
    stretched, centered,
    equal, columns, color, align, valign,
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}


/*
 |---------------------------
 | Column
 |---------------------------
 */
export const makeColumnClasses = makeClassnameFactory({
  suffix: 'column',
  options: {
    color,
    align,
    wide,
    float: {
      values: ['left', 'right'],
      makeKey: makeOptionForValuesAndSuffix.bind(null, 'floated')
    }
  }
})
export const Column = ({
  wide, float, color, align,
  className, ...rest }) => {
  const classes = makeColumnClasses({
    wide, float, color, align
  }, className)
  return (
    <div { ...rest } className={classes}/>
  )
}

