import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeSizeStory, makeColorStory, makeStoryForKeyAndOptions, makePassesPropsStory } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Message, Header, Content, STATES } from './index'
import { Icon } from '../../elements/Icon'

storiesOf('Message', module)
  .add('<Message> default', () => {
    return (
      <Story examples='<Message>{ content }</Message>'>
        <Message>some message</Message>
      </Story>
    )
  })
  .add('<Message> icon', () => {
    return (
      <Story examples='<Message icon><Icon/><Content>{ content }</Content></Message>'>
        <Message icon>
          <Icon glyph='user'/>
          <Content>
            Icon message
          </Content>
        </Message>
      </Story>
    )
  })
  .add('<Message> visible', () => {
    return (
      <Story examples='<Message visible=[ true | false ]>{ content }</Message>'>
        <Message visible={true}>You can see this message</Message>
        <Message visible={false}>You can't see this message</Message>
      </Story>
    )
  })
  .add('<Message> floating', () => {
    return (
      <Story examples='<Message floating>{ content }</Message>'>
        <Message floating>some message</Message>
      </Story>
    )
  })
  .add('<Message> compact', () => {
    return (
      <Story examples='<Message compact>{ content }</Message>'>
        <Message compact>some message</Message>
      </Story>
    )
  })
  .add('<Message> state', makeStoryForKeyAndOptions(Message, { key: 'state', options: STATES }))
  .add('<Message> color', makeColorStory(Message))
  .add('<Message> size', makeSizeStory(Message))
  .add('<Message> passes .className and other props', makePassesPropsStory(Message, { props: {
    className: "red",
    onClick: action('Message was clicked'),
    children: 'I am red and clickable'
  }}))
  .add('<Header>', () => {
    return (
      <Story examples='<Message><Header/></Message>'>
        <Message>
          <Header>message header</Header>
          <p>some message</p>
        </Message>
      </Story>
    )
  })
  .add('<Content>', () => {
    return (
      <Story examples='<Message><Content/></Message>'>
        <Message>
          <Content>
            <Header>message header</Header>
            <p>message content</p>
          </Content>
        </Message>
      </Story>
    )
  })
