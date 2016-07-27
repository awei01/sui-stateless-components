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
    color
  }
})

export const Header = ({
  size, align, color,
  sub, disabled, dividing, block, inverted,
  className, ...rest }) => {

  const classes = makeClasses({
    size, align, color,
    sub, disabled, dividing, block, inverted
  }, className);
  return (
    <div { ...rest } className={ classes }/>
  );
}
