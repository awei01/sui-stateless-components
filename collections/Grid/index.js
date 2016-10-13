import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/grid.css'

/*
 |---------------------------
 | shared
 |---------------------------
 */
const count = {
  values: options.wide.values,
  makeClassname: makeSuffixedClass.bind(null, 'column')
}

/*
 |---------------------------
 | Grid
 |---------------------------
 */
export const gridDefinition = {
  divided: {
    values: [true, 'vertically', 'celled', 'internally celled'],
    makeClassname: (value) => {
      if (value.toString().indexOf('celled') > -1) {
        return value
      }
      return makeSuffixedClass('divided', value)
    }
  },
  count,
  equalWidth: options.equalWidth,
  stretched: true,
  padded: {
    values: [true, 'vertically', 'horizontally'],
    makeClassname: makeSuffixedClass.bind(null, 'padded')
  },
  relaxed: {
    values: [true, 'very'],
    makeClassname: makeSuffixedClass.bind(null, 'relaxed')
  },
  centered: true,
  aligned: options.aligned,
  valigned: options.valigned
}
const _gridFactory = makeFactory(gridDefinition)
const Grid = (props) => {
  const [classes, rest] = _gridFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'grid')
  return (
    <div {...rest} className={className} />
  )
}
Grid.propTypes = { ..._gridFactory.propTypes }
export default Grid

/*
 |---------------------------
 | Grid.Column
 |---------------------------
 */
export const columnDefinition = {
  floated: options.floated,
  wide: options.wide,
  color: enums.colors,
  aligned: options.aligned,
  valigned: options.valigned
}
const _columnFactory = makeFactory(columnDefinition)
const Column = (props) => {
  const [classes, rest] = _columnFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'column')
  return (
    <div {...rest} className={className} />
  )
}
Column.propTypes = { ..._columnFactory.propTypes }
Column.displayName = 'Grid.Column'
Grid.Column = Column

/*
 |---------------------------
 | Grid.Row
 |---------------------------
 */
export const rowDefinition = {
  count,
  equalWidth: options.equalWidth,
  stretched: true,
  color: enums.colors,
  centered: true,
  aligned: options.aligned,
  valigned: options.valigned
}
const _rowFactory = makeFactory(rowDefinition)
const Row = (props) => {
  const [classes, rest] = _rowFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'row')
  return (
    <div {...rest} className={className} />
  )
}
Row.propTypes = { ..._rowFactory.propTypes }
Row.displayName = 'Grid.Row'
Grid.Row = Row
