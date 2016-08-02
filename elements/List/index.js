import without from 'lodash/without'
import classnames from 'classnames'
import React from 'react';
import { makeClassnameFactory, makeComponentWithClasses, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/list.css';

/*
 |---------------------------
 | Shared options
 |---------------------------
 */

/*
 |---------------------------
 | List
 |---------------------------
 */
const { relaxed, size } = OPTIONS
export const SIZES = without(size, 'medium')
export const makeListClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'list',
  options: {
    format: ['bulleted', 'ordered'],
    relaxed,
    divided: {
      values: [true, 'celled'],
      makeKey: (value) => {
        if (value === true) {
          return 'divided'
        }
        return value
      }
    },
    size: SIZES
  }
})
export const List = ({
                      format, relaxed, divided, size,
                      horizontal, inverted, selection, animated,
                      className, ...rest}) => {
  const classes = makeListClasses({
    format, relaxed, divided, size,
    horizontal, inverted, selection, animated
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Item
 |---------------------------
 */
export const Item = ({
                      link, href,
                      className, ...rest}) => {
  const classes = classnames(className, 'item')
  const passedProps = { ...rest, className: classes }
  let element = 'div'
  if (link || href) {
    element = 'a'
    if (href) {
      passedProps.href = href
    }
  }
  return React.createElement(element, passedProps)
}

/*
 |---------------------------
 | Content
 |---------------------------
 */
 const { valigned, floated } = OPTIONS
export const makeContentClasses = makeClassnameFactory({
  suffix: 'content',
  options: {
    valigned,
    floated
  }
})
export const Content = ({ valigned, floated, className, ...rest }) => {
  const classes = makeContentClasses({ valigned, floated }, className)
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
