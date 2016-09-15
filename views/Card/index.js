import React from 'react'
import classnames from 'classnames'
import { makeClassnameFactory, makeComponentWithClasses, OPTIONS } from '../../utils'
import 'semantic-ui-css/components/card.css'

/*
 |---------------------------
 | Card
 |---------------------------
 */
const { color } = OPTIONS

export const makeCardClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'card',
  options: {
    color
  }
})
export const Card = (props) => {
  const {
    color,
    className,
    ...rest
  } = props
  const classes = makeCardClasses({ color }, className)
  return (
    <div {...rest} className={ classes } />
  )
}


/*
 |---------------------------
 | Cards
 |---------------------------
 */
export const makeCardsClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'cards',
})
export const Cards = (props) => {
  const {
    className,
    ...rest
  } = props
  const classes = makeCardsClasses({}, className)
  return (
    <div {...rest} className={ classes } />
  )
}

/*
 |---------------------------
 | Content
 |---------------------------
 */
export const makeContentClasses = makeClassnameFactory({
  suffix: 'content'
})
export const Content = (props) => {
  const {
    className,
    ...rest
  } = props
  const classes = makeContentClasses({}, className)
  return (
    <div {...rest} className={ classes } />
  )
}
