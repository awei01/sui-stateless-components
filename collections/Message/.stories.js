import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeSizeStory, makeColorStory, makeStoryForKeyAndOptions, makePassesPropsStory } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Message, Header, Content, TYPES } from './index'
import { Icon } from '../../elements/Icon'

storiesOf('Message', module)
  .add('default', () => {
    return (
      <Story examples='<Message>{ content }</Message>'>
        <Message>some message</Message>
      </Story>
    )
  })
  .add('visible', () => {
    return (
      <Story examples='<Message visible=[ true | false ]>{ content }</Message>'>
        <Message visible={true}>You can see this message</Message>
        <Message visible={false}>You can't see this message</Message>
      </Story>
    )
  })
  .add('floating', () => {
    return (
      <Story examples='<Message floating>{ content }</Message>'>
        <Message floating>some message</Message>
      </Story>
    )
  })
  .add('compact', () => {
    return (
      <Story examples='<Message compact>{ content }</Message>'>
        <Message compact>some message</Message>
      </Story>
    )
  })
  .add('type', makeStoryForKeyAndOptions(Message, { key: 'type', options: TYPES }))
  .add('color', makeColorStory(Message))
  .add('size', makeSizeStory(Message))
  .add('content', () => {
    return (
      <Story examples={[
          '<Message><Header/></Message>',
          '<Message icon><Icon/><Content/></Message>'
        ]}
        >
        <Message>
          <Header>message header</Header>
          <p>some message</p>
        </Message>
        <Message icon>
          <Icon type="user"/>
          <Content>some message</Content>
        </Message>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Message, { props: {
    className: "red",
    onClick: action('Message was clicked'),
    children: 'I am red and clickable'
  }}))
