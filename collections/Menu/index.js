import React, { PropTypes } from 'react';
import classnames from 'classnames';

import 'semantic-ui-css/components/menu.css';

export const makeMenuClasses = (classes) => {
	return classnames('ui', classes, 'menu');
}
export const Menu = ({ attached, secondary, pointing, borderless, vertical, ...rest }) => {	// eslint-disable-line
	const classes = makeMenuClasses({ attached, secondary, pointing, borderless, vertical });
	return (
		<div { ...rest } className={ classes } />
	);
}

export const makeSubMenuClasses = (classes) => {
	return classnames(classes, 'menu');
}
export const SubMenu = ({ right, children }) => {
	const classes = makeSubMenuClasses({ right });
	return (
		<div className={ classes }>{ children }</div>
	);
}

export const makeMenuItemClasses = (classes) => {
	return classnames(classes, 'item');
}
export const MenuItem = ({ header, align, ...rest }) => {	// eslint-disable-line
	const classes = makeMenuItemClasses({ header, [align]: true });
	return (
		<div { ...rest } className={ classes } />
	);
}
export const MenuLink = ({ right, ...rest }) => {	// eslint-disable-line
	const classes = makeMenuItemClasses({ right });
	return (
		<a { ...rest } className={ classes } />
	);
}
MenuLink.defaultProps ={
	href: "#"
}
