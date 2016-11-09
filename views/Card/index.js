import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/card.css';

/*
 |-----------------------
 | Shared options
 |-----------------------
 */

/*
 |-----------------------
 | Card
 |-----------------------
 */
export const cardDefinition = {
  fluid: true,
  centered: true,
  raised: true,
  color: enums.colors
}
const _cardFactory = makeFactory(cardDefinition)
const Card = (props) => {
  const [classes, rest] = _cardFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'card')
  let element = 'div'
  if ('href' in rest) {
    element = 'a'
  }
  return React.createElement(element, { ...rest, className })
}
Card.propTypes = { ..._cardFactory.propTypes }
Card.displayName = 'Card'
export default Card

/*
 |-----------------------
 | Card.Image
 |-----------------------
 */
const Image = (props) => {
  const { className, src, ...rest } = props
  const classes = classnames(className, 'image')
  const children = src ? (<img src={src} />) : props.children
  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}
Image.displayName = 'Card.Image'
Card.Image = Image


/*
 |-----------------------
 | Card.Content
 |-----------------------
 */
export const contentDefinition = {
  extra: true
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
Content.displayName = 'Card.Content'
Card.Content = Content

/*
 |-----------------------
 | Card.Content.Header
 |-----------------------
 */
const Header = (props) => {
  const className = classnames(props.className, 'header')
  let element = 'div'
  if ('href' in props) {
    element = 'a'
  }
  return React.createElement(element, { ...props, className })
}
Header.displayName = 'Card.Content.Header'
Content.Header = Header

/*
 |-----------------------
 | Card.Content.Meta
 |-----------------------
 */
const Meta = (props) => {
  const className = classnames(props.className, 'meta')
  return (
    <div {...props} className={className} />
  )
}
Meta.displayName = 'Card.Content.Meta'
Content.Meta = Meta

/*
 |-----------------------
 | Card.Content.Description
 |-----------------------
 */
const Description = (props) => {
  const className = classnames(props.className, 'description')
  return (
    <div {...props} className={className} />
  )
}
Description.displayName = 'Card.Content.Description'
Content.Description = Description

/*
 |-----------------------
 | Cards
 |-----------------------
 */
export const cardsDefinition = {
  raised: true,
  centered: true,
  link: true,
  color: enums.colors,
  count: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
  responsive: ['stackable', 'doubling']
}
const _cardsFactory = makeFactory(cardsDefinition)
export const Cards = (props) => {
  const [classes, rest] = _cardsFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'cards')
  return (
    <div {...rest} className={className} />
  )
}
Cards.propTypes = { ..._cardsFactory.propTypes }
Cards.displayName = 'Cards'
