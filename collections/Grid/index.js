import React from 'react'
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS, COUNTS } from '../../utils';
import 'semantic-ui-css/components/grid.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { color, align, equal, wide, relaxed, valign } = OPTIONS
const columns = makeOptionForValuesAndSuffix(COUNTS, 'column')
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
    relaxed
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
const { float } = OPTIONS
export const makeColumnClasses = makeClassnameFactory({
  suffix: 'column',
  options: {
    color,
    align,
    wide,
    float
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

