import React from 'react';
import classnames from 'classnames';
import { makeClassnameFactory } from '../../utils';

import 'semantic-ui-css/components/modal.css';

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
Modal.defaultProps = {
  active: true
}

export const ModalHeader = ({ className, ...rest }) => {
  const classes = classnames('header', className)
  return (
    <div {...rest} className={classes}/>
  )
}
export const ModalContent = ({ className, ...rest }) => {
  const classes = classnames('content', className)
  return (
    <div {...rest} className={classes}/>
  )
}
export const ModalActions = ({ className, ...rest }) => {
  const classes = classnames('actions', className)
  return (
    <div {...rest} className={classes}/>
  )
}

