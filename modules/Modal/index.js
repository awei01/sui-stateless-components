import React from 'react';
import classnames from 'classnames'
import { makeClassnameFactory, makeComponentWithClasses } from '../../utils';
import 'semantic-ui-css/components/modal.css';

/*
 |---------------------------
 | Modal
 |---------------------------
 */
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'modal',
  options: {
    size: ['fullscreen', 'small', 'large']
  }
})
export const Modal = ({ active, size, className, ...rest }) => {
  const classes = makeClasses({ active, size }, className);
  return (
    <div {...rest} className={ classes }/>
  );
}

/*
 |---------------------------
 | Content
 |---------------------------
 */
export const Content = ({ image, className, ...rest }) => {
  const classes = classnames({image}, className, 'content')
  return (
    <div {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Supporting components
 |---------------------------
 */
export const Header = makeComponentWithClasses('header')
export const Description = makeComponentWithClasses('description')
export const Actions = makeComponentWithClasses('actions')
