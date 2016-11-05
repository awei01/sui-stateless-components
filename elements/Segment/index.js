import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/segment.css'

/*
 |---------------------------
 | Segment
 |---------------------------
 */
export const segmentDefinition = {
  format: ['raised', 'stacked', 'tall stacked', 'piled', 'vertical'],
  disabled: true,
  loading: true,
  inverted: true,
  attached: {
    values: [true, 'top', 'bottom'],
    makeClassname: makeSuffixedClass.bind(null, 'attached')
  },
  padded: {
    values: [true, 'very'],
    makeClassname: makeSuffixedClass.bind(null, 'padded')
  },
  compact: true,
  color: enums.colors,
  emphasis: ['secondary', 'tertiary'],
  circular: true,
  clearing: true,
  floated: options.floated,
  aligned: {
    values: ['left', 'center', 'right'],
    makeClassname: makeSuffixedClass.bind(null, 'aligned')
  },
  basic: true
}
const _segmentFactory = makeFactory(segmentDefinition)
const Segment = (props) => {
  const [classes, rest] = _segmentFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'segment')
  return (
    <div {...rest} className={className} />
  )
}
Segment.propTypes = { ..._segmentFactory.propTypes }
Segment.displayName = 'Segment'
export default Segment

/*
 |---------------------------
 | Segments
 |---------------------------
 */
export const segmentsDefinition = {
  horizontal: true,
  format: ['raised', 'stacked', 'piled'],
  compact: true
}
const _segmentsFactory = makeFactory(segmentsDefinition)
export const Segments = (props) => {
  const [classes, rest] = _segmentsFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'segments')
  return (
    <div {...rest} className={className} />
  )
}
Segments.propTypes = { ..._segmentsFactory.propTypes }
Segments.displayName = 'Segments'
