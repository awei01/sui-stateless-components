import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/dimmer.css'

/*
 |-----------------------
 | Dimmer
 |-----------------------
 */
export const dimmerDefinition = {
  active: true,
  page: true,
  disabled: true,
  inverted: true
}
const _dimmerFactory = makeFactory(dimmerDefinition)
const Dimmer = (props) => {
  const [classes, rest] = _dimmerFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'dimmer')
  return (
    <div {...rest} className={className} />
  )
}
Dimmer.propTypes = { ..._dimmerFactory.propTypes }
export default Dimmer

/*
 |-----------------------
 | Dimmer.Content
 |-----------------------
 */
export const contentDefinition = {
  aligned: {
    values: ['top', 'bottom'],
    makeClassname: makeSuffixedClass.bind(null, 'aligned')
  }
}
const _contentFactory = makeFactory(contentDefinition)
const Content = (props) => {
  // pull children out to be put inside <div className='content' />
  const { children, ...remaining } = props
  const [classes, rest] = _contentFactory.extractClassesAndProps(remaining)
  const className = classnames(classes, 'content')
  return (
    <div {...rest} className={className}>
      <div className='content'>{children}</div>
    </div>
  )
}
Content.propTypes = { ..._contentFactory.propTypes }
Content.displayName = 'Dimmer.Content'
Dimmer.Content = Content
