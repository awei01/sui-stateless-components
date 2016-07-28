import React from 'react';
import classnames from 'classnames';
import { makeClassnameFactory, makeComponentWithClasses } from '../../utils';

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

export const ModalHeader = makeComponentWithClasses({ classes: 'header' })
export const ModalContent = makeComponentWithClasses({ classes: 'content' })
export const ModalActions = makeComponentWithClasses({ classes: 'actions' })
