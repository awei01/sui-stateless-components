import React, { PropTypes } from 'react'
import { makeClassnameFactory } from '../../utils';

import 'semantic-ui-css/components/dimmer.css'

export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'dimmer'
})
export const Dimmer = ({
  active, page, inverted,
  className, ...rest }) => {
  const classes = makeClasses({ active, page, inverted }, className)
  return (
    <div {...rest} className={classes}/>
  )
}

export const Content = ({ children }) => {
  return (
    <div className='content'>
      <div className='center'>{children}</div>
    </div>
  )
}
