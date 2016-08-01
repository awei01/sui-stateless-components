import React, { PropTypes } from 'react';
import { makeClassnameFactory, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/container.css';

const { aligned } = OPTIONS
export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'container',
  options: {
    format: ['text', 'fluid'],
    aligned
  }
})

export const Container = ({ format, aligned, className, ...rest }) => {
	const classes = makeClasses({ format, aligned });
	return (
		<div { ...rest } className={ classes }/>
	);
}
