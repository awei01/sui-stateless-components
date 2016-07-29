import React from 'react'
import { makeClassnameFactory, useSuffixedStringValueAsKey, OPTIONS, COUNTS } from '../../utils';
import 'semantic-ui-css/components/grid.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { color, align, equal, wide } = OPTIONS
const columns = {
  values: COUNTS,
  makeKey: useSuffixedStringValueAsKey.bind(null, 'column')
}
const valign = {
  values: ['top', 'middle', 'bottom'],
  makeKey: useSuffixedStringValueAsKey.bind(null, 'aligned')
}
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
    divided: {
      values: [true, 'vertically'],
      makeKey: useSuffixedStringValueAsKey.bind(null, 'divided')
    },
    celled: {
      values: [true, 'internally'],
      makeKey: useSuffixedStringValueAsKey.bind(null, 'celled')
    },
    padded: {
      values: [true, 'vertically', 'horizontally'],
      makeKey: useSuffixedStringValueAsKey.bind(null, 'padded')
    },
    relaxed: {
      values: [true, 'very'],
      makeKey: useSuffixedStringValueAsKey.bind(null, 'relaxed')
    }
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
      makeKey: useSuffixedStringValueAsKey.bind(null, 'floated')
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

