import without from 'lodash/without'
import React, { PropTypes } from 'react';
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/segment.css';

/*
 |---------------------------
 | Shared options
 |---------------------------
 */

/*
 |---------------------------
 | Segment
 |---------------------------
 */
const { color, float, align } = OPTIONS
export const SEGMENT_FORMATS = ['raised', 'stacked', 'tall stacked', 'piled', 'vertical']
export const makeSegmentClasses = makeClassnameFactory({
  prefix: "ui",
  suffix: "segment",
  options: {
    format: SEGMENT_FORMATS,
    attached: makeOptionForValuesAndSuffix([true, 'top', 'bottom'], 'attached'),
    padded: makeOptionForValuesAndSuffix([true, 'very'], 'padded'),
    color,
    emphasis: ['secondary', 'tertiary'],
    float,
    align: {
      ...align,
      values: without(align.values, 'justified')
    }
  }
});
export const Segment = ({
                        format, attached, padded, color, emphasis, float, align,
                        basic, inverted, compact, clearing,
                        className, ...rest }) => {
  const classes = makeSegmentClasses({
    format, attached, padded, color, emphasis, float, align,
    basic, inverted, compact, clearing
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Segments
 |---------------------------
 */
export const SEGMENTS_FORMATS = ['raised', 'stacked', 'piled']
export const makeSegementsClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'segments',
  options: {
    format: SEGMENTS_FORMATS
  }
})
export const Segments = ({
                          format,
                          horizontal,
                          className, ...rest }) => {
  const classes = makeSegementsClasses({
    format,
    horizontal
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
