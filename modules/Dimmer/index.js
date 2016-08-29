import React from 'react'
import { makeClassnameFactory } from '../../utils';
import 'semantic-ui-css/components/dimmer.css'

export const makeClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'dimmer'
})
export const Dimmer = ({
  active, page, inverted, modals,
  className, ...rest }) => {
  const classes = makeClasses({ active, page, modals, inverted }, className)
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
