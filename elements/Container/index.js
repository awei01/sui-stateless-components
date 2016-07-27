import React, { PropTypes } from 'react';
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/container.css';

const { align } = OPTIONS
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'container',
  options: {
    fit: ['text', 'fluid'],
    align
  }
})

export const Container = ({ fit, align, className, ...rest }) => {
	const classes = makeClasses({ fit, align });
	return (
		<div { ...rest } className={ classes }/>
	);
}
