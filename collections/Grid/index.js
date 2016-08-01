import React from 'react'
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS, COUNTS } from '../../utils';
import 'semantic-ui-css/components/grid.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { color, aligned, equal, wide, relaxed, valigned } = OPTIONS
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
    aligned,
    valigned,
    divided: makeOptionForValuesAndSuffix([true, 'vertically'], 'divided'),
    celled: makeOptionForValuesAndSuffix([true, 'internally'], 'celled'),
    padded: makeOptionForValuesAndSuffix([true, 'vertically', 'horizontally'], 'padded'),
    relaxed
  }
})
export const Grid = ({
                    stretched, centered,
                    equal, columns, aligned, valigned, padded, relaxed, divided, celled,
                    className, ...rest }) => {
  const classes = makeGridClasses({
    stretched, centered,
    equal, columns, aligned, valigned, padded, relaxed, divided, celled
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
    aligned,
    valigned
  }
})
export const Row = ({
                    stretched, centered,
                    equal, columns, color, aligned, valigned,
                    className, ...rest }) => {
  const classes = makeRowClasses({
    stretched, centered,
    equal, columns, color, aligned, valigned,
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
const { floated } = OPTIONS
export const makeColumnClasses = makeClassnameFactory({
  suffix: 'column',
  options: {
    color,
    aligned,
    wide,
    floated
  }
})
export const Column = ({
                        wide, floated, color, aligned,
                        className, ...rest }) => {
  const classes = makeColumnClasses({
    wide, floated, color, aligned
  }, className)
  return (
    <div { ...rest } className={classes}/>
  )
}

