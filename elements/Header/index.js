import React, { PropTypes } from 'react';
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/header.css';

export const SIZES = ['tiny', 'small', 'medium', 'large', 'huge']

const { color, aligned } = OPTIONS
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'header',
  options: {
    size: SIZES,
    aligned,
    color,
    format: ['dividing', 'block']
  }
})

export const Header = ({
                        size, aligned, color, format,
                        sub, block, inverted,
                        className, ...rest }) => {

  const classes = makeClasses({
    size, aligned, color, format,
    sub, block, inverted
  }, className);
  return (
    <div { ...rest } className={ classes }/>
  );
}
