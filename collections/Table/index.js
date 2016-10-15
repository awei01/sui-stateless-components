import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/table.css'

const state = ['positive', 'negative', 'error', 'warning']
const aligned = {
  values: ['left', 'right', 'center'],
  makeClassname: makeSuffixedClass.bind(null, 'aligned')
}

/*
 |---------------------------
 | Table
 |---------------------------
 */
export const tableDefinition = {
  definition: true,
  structured: true,
  singleLine: {
    makeClassname: (value) => {
      return value && 'single line'
    }
  },
  fixed: true,
  selectable: true,
  striped: true,
  celled: true,
  basic: true,
  collapsing: true,
  count: {
    values: options.wide.values,
    makeClassname: makeSuffixedClass.bind(null, 'column')
  },
  color: enums.colors,
  inverted: true,
  sortable: true,
  padded: {
    values: [true, 'very'],
    makeClassname: makeSuffixedClass.bind(null, 'padded')
  },
  compact: {
    values: [true, 'very'],
    makeClassname: makeSuffixedClass.bind(null, 'compact')
  },
  size: ['small', 'large'],
  stackable: {
    values: [false, 'tablet'],
    makeClassname: (value) => {
      return value ? 'tablet stackable' : 'unstackable'
    }
  }
}
const _tableFactory = makeFactory(tableDefinition)
const Table = (props) => {
  const [classes, rest] = _tableFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'table')
  return (
    <table {...rest} className={className} />
  )
}
Table.propTypes = { ..._tableFactory.propTypes }
export default Table

/*
 |---------------------------
 | Table.Th
 |---------------------------
 */
export const thDefinition = {
  valigned: options.valigned,
  aligned,
  collapsing: true,
  wide: options.wide,
  sorted: {
    values: [true, 'ascending', 'descending'],
    makeClassname: (value) => {
      return 'sorted ' + (value === true ? '' : value)
    }
  }
}
const _thFactory = makeFactory(thDefinition)
const Th = (props) => {
  const [classes, rest] = _thFactory.extractClassesAndProps(props)
  const className = classnames(classes)
  return (
    <th {...rest} className={className} />
  )
}
Th.propTypes = { ..._thFactory.propTypes }
Th.displayName = 'Table.Th'
Table.Th = Th

/*
 |---------------------------
 | Table.Td
 |---------------------------
 */
export const tdDefinition = {
  state,
  active: true,
  disabled: true,
  selectable: true,
  valigned: options.valigned,
  aligned,
  collapsing: true,
  wide: options.wide
}
const _tdFactory = makeFactory(tdDefinition)
const Td = (props) => {
  const [classes, rest] = _tdFactory.extractClassesAndProps(props)
  const className = classnames(classes)
  return (
    <td {...rest} className={className} />
  )
}
Td.propTypes = { ..._tdFactory.propTypes }
Td.displayName = 'Table.Td'
Table.Td = Td

/*
 |---------------------------
 | Table.Tr
 |---------------------------
 */
export const trDefinition = {
  state,
  active: true,
  disabled: true,
  valigned: options.valigned,
  aligned
}
const _trFactory = makeFactory(trDefinition)
const Tr = (props) => {
  const [classes, rest] = _trFactory.extractClassesAndProps(props)
  const className = classnames(classes)
  return (
    <tr {...rest} className={className} />
  )
}
Tr.propTypes = { ..._trFactory.propTypes }
Tr.displayName = 'Table.Tr'
Table.Tr = Tr

