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
export const makeSegmentClasses = makeClassnameFactory({
  prefix: "ui",
  suffix: "segment",
  options: {
    type: ['raised', 'stacked', 'tall stacked', 'piled', 'vertical'],
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
                        type, attached, padded, color, emphasis, float, align,
                        basic, inverted, compact, clearing,
                        className, ...rest }) => {
  const classes = makeSegmentClasses({
    type, attached, padded, color, emphasis, float, align,
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
export const makeSegementsClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'segments',
  options: {
    type: ['raised', 'stacked', 'piled']
  }
})
export const Segments = ({
                          type,
                          horizontal,
                          className, ...rest }) => {
  const classes = makeSegementsClasses({
    type,
    horizontal
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
