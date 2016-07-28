import React from 'react'
import { makeClassnameFactory, useSuffixedStringValueAsKey, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/grid.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { color, align } = OPTIONS
const SIZES = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'
]
const column = {
  values: SIZES,
  makeKey: useSuffixedStringValueAsKey.bind(null, 'column')
}
const equalWidth = {
  values: [true],
  makeKey: () => {
    return 'equal width'
  }
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
    column,
    equalWidth,
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
  equalWidth, column,
  align, valign,
  padded, relaxed,
  divided, celled,
  className, ...rest }) => {
  const classes = makeGridClasses({
    stretched, centered,
    equalWidth, column,
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
    column,
    equalWidth,
    color,
    align,
    valign
  }
})
export const Row = ({
  stretched, centered,
  equalWidth, column, color, align, valign,
  className, ...rest }) => {
  const classes = makeRowClasses({
    stretched, centered,
    equalWidth, column, color, align, valign,
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
    wide: {
      values: SIZES,
      makeKey: useSuffixedStringValueAsKey.bind(null, 'wide')
    },
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

