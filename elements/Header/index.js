import React, { PropTypes } from 'react';
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/header.css';

export const SIZES = ['tiny', 'small', 'medium', 'large', 'huge']

const { color, align } = OPTIONS
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'header',
  options: {
    size: SIZES,
    align,
    color,
    format: ['dividing', 'block']
  }
})

export const Header = ({
  size, align, color, format,
  sub, block, inverted,
  className, ...rest }) => {

  const classes = makeClasses({
    size, align, color, format,
    sub, block, inverted
  }, className);
  return (
    <div { ...rest } className={ classes }/>
  );
}
