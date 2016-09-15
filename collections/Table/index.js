import React, { PropTypes } from 'react'
import { makeClassnameFactory, OPTIONS, makeOptionForValuesAndSuffix } from '../../utils';
import 'semantic-ui-css/components/table.css'

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { aligned, valigned } = OPTIONS

/*
 |---------------------------
 | Table
 |---------------------------
 */
export const makeTableClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'table',
  options: {
    stackable: {
      values: [true, false, 'tablet'],
      makeKey: (value) => {
        if (!value) {
          return 'unstackable'
        }
        return value === true ? '' : `${value} stackable`
      }
    },
    singleLine: {
      // this can actually go on any descendant of table according to SUI css
      values: [true],
      makeKey: () => {
        return 'single line'
      }
    },
    compact: makeOptionForValuesAndSuffix([true, 'very'], 'compact'),
    size: ['small', 'large']
  }
})
export const Table = ({
                      stackable, singleLine, compact, size,
                      definition, structured, fixed,
                      className, ...rest }) => {
  const classes = makeTableClasses({
    stackable, singleLine, compact, size,
    definition, structured, fixed
  }, className)
  return (
    <table {...rest} className={classes}/>
  )
}
Table.defaultProps = {
  stackable: true
}

/*
 |---------------------------
 | Thead
 |---------------------------
 */
export const makeTheadClasses = makeClassnameFactory({
})
export const Thead = ({
                    className, ...rest }) => {
  const classes = makeTheadClasses({}, className)
  return (
    <thead {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Tbody
 |---------------------------
 */
export const Tbody = (props) => {
  return (
    <tbody {...props}/>
  )
}

/*
 |---------------------------
 | Th
 |---------------------------
 */
export const makeThClasses = makeClassnameFactory({
})
export const Th = ({
                    className, ...rest }) => {
  const classes = makeThClasses({}, className)
  return (
    <th {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Tr, Td
 |---------------------------
 */
export const makeTrTdClasses = makeClassnameFactory({
  options: {
    state: ['positive', 'negative', 'error', 'warning', 'active', 'disabled'],
    valigned
  }
})
export const Tr = ({
                    state, valigned,
                    className, ...rest }) => {
  const classes = makeTrTdClasses({ state, valigned }, className)
  return (
    <tr {...rest} className={classes}/>
  )
}
export const Td = ({
                    state, valigned,
                    className, ...rest }) => {
  const classes = makeTrTdClasses({ state, valigned }, className)
  return (
    <td {...rest} className={classes}/>
  )
}

