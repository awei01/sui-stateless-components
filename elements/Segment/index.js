import React, { PropTypes } from 'react';
import { makeClassnameFactory } from '../../utils';
import 'semantic-ui-css/components/segment.css';

export const makeClasses = makeClassnameFactory({
  prefix: "ui",
  suffix: "segment",
  options: {
    type: ['raised', 'stacked', 'tall stacked', 'piled', 'vertical']
  }
});

export const Segment = ({
                        type,
                        basic, inverted,
                        className, ...rest }) => {
  const classes = makeClasses({
    type,
    basic, inverted
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
