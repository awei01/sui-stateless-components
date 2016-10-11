import React, { PropTypes } from 'react';
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/header.css';

/*
 |---------------------------
 | List
 |---------------------------
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
}) */

export const headerOptions = {
  size: ['tiny', 'small', 'medium', 'large', 'huge'],
  icon: true,
  sub: true,
  disabled: true,
  format: ['dividing', 'block'],
  attached: {
    values: [true, 'top', 'bottom'],
    makeClassname: makeSuffixedClass.bind(null, 'attached')
  },
  floated: options.floated,
  aligned: options.aligned,
  color: enums.colors,
  inverted: true
}
const _headerFactory = makeFactory(headerOptions)

const Header = (props) => {
  const [classes, rest] = _headerFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'header')
  return (
    <div {...rest} className={className}/>
  );
}
Header.propTypes = { ..._headerFactory.propTypes }
export default Header

const Sub = (props) => {
  const { className, ...rest } = props
  const classes = classnames(className, 'sub header')
  return (
    <div {...rest} className={classes} />
  )
}
Sub.displayName = 'Header.Sub'
Header.Sub = Sub

const Content = (props) => {
  const { className, ...rest } = props
  const classes = classnames(className, 'content')
  return (
    <div {...rest} className={classes} />
  )
}
Content.displayName = 'Header.Content'
Header.Content = Content
/*
 |---------------------------
 | Supporting components
 |---------------------------

export const Content = makeComponentWithClasses('content')
export const Subheader = makeComponentWithClasses('sub header')
 */
