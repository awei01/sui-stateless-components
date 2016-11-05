import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/statistic.css';

/*
 |-----------------------
 | Shared options
 |-----------------------
 */
const _shared = {
  horizontal: true,
  color: enums.colors,
  inverted: true,
  floated: options.floated,
  size: ['mini', 'tiny', 'small', 'large', 'huge']
}

/*
 |-----------------------
 | Statistic
 |-----------------------
 */
export const statisticDefinition = {
  ..._shared
}
const _statisticFactory = makeFactory(statisticDefinition)
const Statistic = (props) => {
  const [classes, rest] = _statisticFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'statistic')
  return (
    <div {...rest} className={className} />
  )
}
Statistic.propTypes = { ..._statisticFactory.propTypes }
Statistic.displayName = 'Statistic'
export default Statistic

/*
 |-----------------------
 | Statistic.Value
 |-----------------------
 */
export const valueDefinition = {
  text: true
}
const _valueFactory = makeFactory(valueDefinition)
const Value = (props) => {
  const [classes, rest] = _valueFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'value')
  return (
    <div {...rest} className={className} />
  )
}
Value.propTypes = { ..._valueFactory.propTypes }
Value.displayName = 'Statistic.Value'
Statistic.Value = Value

/*
 |-----------------------
 | Statistic.Label
 |-----------------------
 */
const Label = (props) => {
  const className = classnames(props.className, 'label')
  return (
    <div {...props} className={className} />
  )
}
Label.displayName = 'Statistic.Label'
Statistic.Label = Label

/*
 |-----------------------
 | Statistics
 |-----------------------
 */
export const statisticsDefinition = {
  ..._shared,
  count: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
}
const _statisticsFactory = makeFactory(statisticsDefinition)
export const Statistics = (props) => {
  const [classes, rest] = _statisticsFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'statistics')
  return (
    <div {...rest} className={className} />
  )
}
Statistics.propTypes = { ..._statisticsFactory.propTypes }
Statistics.displayName = 'Statistics'
