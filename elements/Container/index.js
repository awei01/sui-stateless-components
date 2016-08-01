import React, { PropTypes } from 'react';
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/container.css';

const { align } = OPTIONS
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'container',
  options: {
    format: ['text', 'fluid'],
    align
  }
})

export const Container = ({ format, align, className, ...rest }) => {
	const classes = makeClasses({ format, align });
	return (
		<div { ...rest } className={ classes }/>
	);
}
