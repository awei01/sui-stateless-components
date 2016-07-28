import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeSizeStory, makeColorStory, makeStoryUsingOptions, makePassesPropsStory } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Message, MessageHeader, MessageContent, TYPES } from './index'
import { Icon } from '../../elements/Icon'

const _storyStyles = {
  padding: 0
}

storiesOf('Message', module)
  .add('default', () => {
    return (
      <Story examples='<Message>{ content }</Message>'
          notes='The prop [visible] is set to [true] by default'
          style={_storyStyles}>
        <Message>some message</Message>
      </Story>
    )
  })
  .add('visible={ false }', () => {
    return (
      <Story examples='<Message visible={ false }>{ content }</Message>'
          notes='The prop [visible] is set to [true] by default'
          style={_storyStyles}>
        <Message visible={false}>some message</Message>
      </Story>
    )
  })
  .add('floating', () => {
    return (
      <Story examples='<Message floating>{ content }</Message>'
          style={_storyStyles}>
        <Message floating>some message</Message>
      </Story>
    )
  })
  .add('compact', () => {
    return (
      <Story examples='<Message compact>{ content }</Message>'
          style={_storyStyles}>
        <Message compact>some message</Message>
      </Story>
    )
  })
  .add('type', makeStoryUsingOptions(Message, { key: 'type', options: TYPES }))
  .add('color', makeColorStory(Message))
  .add('size', makeSizeStory(Message))
  .add('content', () => {
    return (
      <Story examples={[
          '<Message><MessageHeader/></Message>',
          '<Message icon><Icon/><MessageContent/></Message>'
        ]}
        style={_storyStyles}>
        <Message>
          <MessageHeader>message header</MessageHeader>
          <p>some message</p>
        </Message>
        <Message icon>
          <Icon type="user"/>
          <MessageContent>some message</MessageContent>
        </Message>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Message, {
    className: "red",
    onClick: action('Message was clicked'),
    children: 'I am red and clickable'
  }))
