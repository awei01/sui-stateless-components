import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/list.css';

/*
 |---------------------------
 | List
 |---------------------------
 */
export const listDefinition = {
  format: ['bulleted', 'ordered'],
  link: true,
  horizontal: true,
  inverted: true,
  selection: true,
  animated: true,
  relaxed: {
    values: [true, 'very'],
    makeClassname: makeSuffixedClass.bind(null, 'relaxed')
  },
  divided: {
    values: [true, 'celled'],
    makeClassname: (value) => {
      return value === true ? 'divided' : value
    }
  },
  size: ['tiny', 'mini', 'small', 'large', 'big', 'huge', 'massive'],
  valigned: options.valigned,
  floated: options.floated
}
const _listFactory = makeFactory(listDefinition)
const List = (props) => {
  const [classes, rest] = _listFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'list')
  return (
    <div {...rest} className={className} />
  )
}
List.propTypes = { ..._listFactory.propTypes }
export default List

/*
 |---------------------------
 | List.Item
 |---------------------------
 */
export const itemDefinition = {
  disabled: true
}
const _itemFactory = makeFactory(itemDefinition)
const Item = (props) => {
  const [classes, rest] = _itemFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'item')
  let element = 'div'
  if ('href' in rest) {
    element = 'a'
  }
  return React.createElement(element, {...rest, className})
}
Item.propTypes = { ..._itemFactory.propTypes }
Item.displayName = 'List.Item'
List.Item = Item

/*
 |---------------------------
 | List.Item.Header
 |---------------------------
 */
const Header = (props) => {
  const className = classnames(props.className, 'header')
  let element = 'div'
  if ('href' in props) {
    element = 'a'
  }
  return React.createElement(element, {...props, className})
}
Header.displayName = 'List.Item.Header'
Item.Header = Header

/*
 |---------------------------
 | List.Item.Content
 |---------------------------
 */
export const contentDefinition = {
  valigned: options.valigned,
  floated: options.floated
}
const _contentFactory = makeFactory(contentDefinition)
const Content = (props) => {
  const [classes, rest] = _contentFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'content')
  return (
    <div {...rest} className={className} />
  )
}
Content.propTypes = { ..._contentFactory.propTypes }
Content.displayName = 'List.Item.Content'
Item.Content = Content

/*
 |---------------------------
 | List.Item.Description
 |---------------------------
 */
const Description = (props) => {
  const className = classnames(props.className, 'description')
  return (
    <div {...props} className={className} />
  )
}
Description.displayName = 'List.Item.Description'
Item.Description = Description
