import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/modal.css';

/*
 |---------------------------
 | Modal
 |---------------------------
 */
export const modalDefinition = {
  active: true,
  basic: true,
  size: ['small', 'large', 'fullscreen'],
  scrolling: true
}
const _modalFactory = makeFactory(modalDefinition)
const Modal = (props) => {
  const [classes, rest] = _modalFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'modal')
  return (
    <div {...rest} className={className} />
  )
}
Modal.propTypes = { ..._modalFactory.propTypes }
export default Modal

/*
 |---------------------------
 | Modal.Content
 |---------------------------
 */
export const contentDefnition = {
  image: true
}
const  _contentFactory = makeFactory(contentDefnition)
const Content = (props) => {
  const [classes, rest] = _contentFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'content')
  return (
    <div {...rest} className={className} />
  )
}
Content.propTypes = { ..._contentFactory.propTypes }
Content.displayName = 'Modal.Content'
Modal.Content = Content

/*
 |---------------------------
 | Modal.Content.Description
 |---------------------------
 */
const Description = (props) => {
  const className = classnames(props.className, 'description')
  return (
    <div {...props} className={className} />
  )
}
Description.displayName = 'Modal.Content.Description'
Content.Description = Description


/*
 |---------------------------
 | Modal.Header
 |---------------------------
 */
const Header = (props) => {
  const className = classnames(props.className, 'header')
  return (
    <div {...props} className={className} />
  )
}
Header.displayName = 'Modal.Header'
Modal.Header = Header

/*
 |---------------------------
 | Modal.Actions
 |---------------------------
 */
const Actions = (props) => {
  const className = classnames(props.className, 'actions')
  return (
    <div {...props} className={className} />
  )
}
Actions.displayName = 'Modal.Actions'
Modal.Actions = Actions
