import React, { PropTypes } from 'react';
import { makeClassnameFactory, OPTIONS, makeComponentWithClasses, makeOptionForValuesAndSuffix } from '../../utils';
import 'semantic-ui-css/components/header.css';

/*
 |---------------------------
 | List
 |---------------------------
 */
export const SIZES = ['tiny', 'small', 'medium', 'large', 'huge']
const { color, aligned, floated } = OPTIONS
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'header',
  options: {
    size: SIZES,
    aligned,
    color,
    format: ['dividing', 'block'],
    attached: makeOptionForValuesAndSuffix(['top', 'bottom'], 'attached'),
    floated
  }
})
export const Header = ({
                        size, aligned, color, format, attached, floated,
                        icon, sub, inverted,
                        className, ...rest }) => {

  const classes = makeClasses({
    size, aligned, color, format, attached, floated,
    icon, sub, inverted
  }, className);
  return (
    <div { ...rest } className={ classes }/>
  );
}

/*
 |---------------------------
 | Supporting components
 |---------------------------
 */
export const Content = makeComponentWithClasses('content')
export const Subheader = makeComponentWithClasses('sub header')
