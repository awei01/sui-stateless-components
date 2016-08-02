import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, extractOptionsValues, makeLipsum } from '../../.storybook/utils';
import { SIZES } from '../../utils'
import { Loader } from './index'
import { Segment } from '../../elements/Segment'
import { Dimmer } from '../../modules/Dimmer'

storiesOf('Loader', module)
  .add('<Loader> default', () => {
    return (
      <Story examples='<Loader/>'
          notes='<Loader> is hidden by default'>
        <Segment>
          {makeLipsum()}
          <Loader/>
        </Segment>
      </Story>
    )
  })
  .add('<Loader> text', () => {
    return (
      <Story examples='<Loader text>{ content }</Loader>'>
        <Segment>
          {makeLipsum()}
          <Dimmer active>
            <Loader text>Some text in here</Loader>
          </Dimmer>
        </Segment>
      </Story>
    )
  })
  .add('<Loader> indeterminate', () => {
    return (
      <Story examples='<Loader indeterminate/>'>
        <Segment>
          {makeLipsum()}
          <Dimmer active>
            <Loader indeterminate/>
          </Dimmer>
        </Segment>
      </Story>
    )
  })
  .add('<Loader> active', () => {
    return (
      <Story examples='<Loader active/>'>
        <Segment>
          {makeLipsum()}
          <Loader active/>
        </Segment>
      </Story>
    )
  })
  .add('<Loader> disabled', () => {
    return (
      <Story examples='<Loader disabled/>'>
        <Segment>
          {makeLipsum()}
          <Dimmer active>
            <Loader disabled/>
          </Dimmer>
        </Segment>
      </Story>
    )
  })
  .add('<Loader> inline', () => {
    return (
      <Story examples='<Loader inline=[ true | "centered" ]/>'>
        <Segment>
          <p>
            {makeLipsum(100)}
            <Loader inline active/>
            {makeLipsum(100)}
          </p>
          <p>
            {makeLipsum(100)}
            <Loader inline='centered' active/>
            {makeLipsum(100)}
          </p>
        </Segment>
      </Story>
    )
  })
  .add('<Loader> size', () => {
    const sizes = extractOptionsValues(SIZES)
    return (
      <Story examples={'<Loader size=[ ' + sizes + ' ]/>'}>
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
        <Segment>
          {makeLipsum()}
          <Dimmer active>
            <Loader className='huge' onClick={action('Loader was clicked')}/>
          </Dimmer>
        </Segment>
      </Story>
    )
  })
