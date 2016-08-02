import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, extractOptionsValues, makeLipsum } from '../../.storybook/utils';
import { SIZES } from '../../utils'
import { Loader } from './index'
import { Dimmer } from '../../modules/Dimmer'
import { Divider } from '../../elements/Divider'
import { Segment } from '../../elements/Segment'

storiesOf('Loader', module)
  .add('<Loader> default', () => {
    return (
      <Story examples='<Loader/>'
        notes='<Loader> is hidden by default'>
        {makeLipsum()}
        <Loader/>
      </Story>
    )
  })
  .add('<Loader> text', () => {
    return (
      <Story examples='<Loader text>{ content }</Loader>'>
        {makeLipsum()}
        <Dimmer active>
          <Loader text>Some text in here</Loader>
        </Dimmer>
      </Story>
    )
  })
  .add('<Loader> indeterminate', () => {
    return (
      <Story examples='<Loader indeterminate/>'>
        {makeLipsum()}
        <Dimmer active>
          <Loader indeterminate/>
        </Dimmer>
      </Story>
    )
  })
  .add('<Loader> active', () => {
    return (
      <Story examples='<Loader active/>'>
        {makeLipsum()}
        <Loader active/>
      </Story>
    )
  })
  .add('<Loader> disabled', () => {
    return (
      <Story examples='<Loader disabled/>'>
        {makeLipsum()}
        <Dimmer active>
          <Loader disabled/>
        </Dimmer>
      </Story>
    )
  })
  .add('<Loader> inline', () => {
    return (
      <Story examples='<Loader inline=[ true | "centered" ]/>'>
        {makeLipsum(100)}
        <Loader inline active/>
        {makeLipsum(100)}
        <Divider/>
        {makeLipsum(100)}
        <Loader inline='centered' active/>
        {makeLipsum(100)}
      </Story>
    )
  })
  .add('<Loader> size', () => {
    const sizes = extractOptionsValues(SIZES)
    return (
      <Story examples={'<Loader size=[ ' + sizes + ' ]/>'} container={{ format: 'vertical' }}>
      {
        SIZES.map((size, index) => {
          return (
            <Segment key={index}>
              {makeLipsum()}
              <Dimmer active>
                <Loader size={size}/>
              </Dimmer>
            </Segment>
          )
        })
      }
      </Story>
    )
  })
  .add('<Loader> passes .className and other props', () => {
    return (
      <Story examples={'<Loader className="huge" onClick={ funciton }/>'}>
        {makeLipsum()}
        <Dimmer active>
          <Loader className='huge' onClick={action('Loader was clicked')}/>
        </Dimmer>
      </Story>
    )
  })
