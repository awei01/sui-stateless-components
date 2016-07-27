import React from 'react';
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/label.css';

const _makePointingKey = (value) => {
  if (value === 'left' || value === 'right') {
    return `${value} pointing`;
  }
  return value === true ? 'pointing' : `pointing ${value}`;
}

const { color, size } = OPTIONS;

export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'label',
  options: {
    pointing: {
      values: [true, 'right', 'left', 'below'],
      makeKey: _makePointingKey
    },
    color,
    size
  }
});

export const Label = ({
  pointing, color, size,    // keyed props
  link, href,
  circular, basic,
  className, ...rest }) => {

  const classes = makeClasses({
    pointing, color, size,
    circular, basic
  }, className);

  const passedProps = {
    ...rest,
    className: classes
  }

  let element = 'div';
  if (link || href) {
    if (href) {
      passedProps.href = href;
    }
    element =  'a';
  }
  return React.createElement(element, passedProps);
}
