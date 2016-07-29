import React, { PropTypes } from 'react';
import { makeClassnameFactory, useSuffixedStringValueAsKey } from '../../utils';
import 'semantic-ui-css/components/divider.css';

export const makeClasses = makeClassnameFactory({
  prefix: "ui",
  suffix: "divider",
  options: {
    orientation: ['horizontal', 'vertical'],
    margin: ['fitted', 'section']
  }
});

export const Divider = ({
                        orientation, margin,
                        inverted, hidden, clearing,
                        className, ...rest }) => {
  const classes = makeClasses({
    orientation, margin,
    inverted, hidden, clearing
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
