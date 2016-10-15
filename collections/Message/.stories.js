import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Message, { messageDefinition } from './index'
import Icon from '../../elements/Icon'
import Segment from '../../elements/Segment'

const { Header, List, Content, Close } = Message

storiesOf('Message', module)
  .add('<Message />', () => {
    return (
      <Story title='<Message />'>
        <Api definition={messageDefinition}>
          import Message from 'sui-stateless-components/collections/Message'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Message>some message</Message>
          </Example>
          <Example title='[className] gets passed'>
            <Message className='error'>some message</Message>
          </Example>
        </Story.Segment>
        <Story.Segment title='icon'>
          <Example>
            <Message icon>
              <Icon glyph='user' />
              <Content>
                <Header>message header</Header>
                some other content
              </Content>
            </Message>
          </Example>
        </Story.Segment>
        <Story.Segment title='visible'>
          <Example title='(true)'>
            <Message visible>
              visible message
            </Message>
          </Example>
          <Example title='(false)'>
            <Message visible={false}>
              hidden message
            </Message>
          </Example>
        </Story.Segment>
        <Story.Segment title='floating'>
          <Example>
            <Message floating>
              floating message
            </Message>
          </Example>
        </Story.Segment>
        <Story.Segment title='compact'>
          <Example>
            <Message compact>
              compact message
            </Message>
          </Example>
        </Story.Segment>
        <Story.Segment title='attached'>
          <Example>
            <Message attached='top'>
              top attached message
            </Message>
            <Segment attached />
            <Message attached='bottom'>
              bottom attached message
            </Message>
          </Example>
        </Story.Segment>
        <Story.Segment title='state'>
          <Example>
            <Message state='warning'>
              warning message
            </Message>
            <Message state='info'>
              info message
            </Message>
            <Message state='success'>
              success message
            </Message>
            <Message state='error'>
              error message
            </Message>
            <Message state='positive'>
              positive message
            </Message>
            <Message state='negative'>
              negative message
            </Message>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Message} propKey='color' definition={messageDefinition} />
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Message} propKey='size' definition={messageDefinition} />
        </Story.Segment>
      </Story>
    )
  })
  .add('<Message.Header />', () => {
    return (
      <Story title='<Message.Header />'>
        <p>This component is to be used within {'<Message />'}</p>
        <Story.Segment title='(default)'>
          <Example>
            <Message>
              <Header>message header</Header>
            </Message>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Message.List />', () => {
    return (
      <Story title='<Message.List />'>
        <p>This component is to be used within {'<Message />'}</p>
        <Story.Segment title='(default)'>
          <Example>
            <Message>
              <Header>message header</Header>
              <List>
                <li>item one</li>
                <li>item two</li>
              </List>
            </Message>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Message.Content />', () => {
    return (
      <Story title='<Message.Content />'>
        <p>This component is to be used within {'<Message />'} to help format content alongside {'<Icon />'}</p>
        <Story.Segment title='(default)'>
          <Example>
            <Message icon>
              <Icon glyph='user' />
              <Content>
                <Header>some header</Header>
                some other content
              </Content>
            </Message>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Message.Close />', () => {
    return (
      <Story title='<Message.Close />'>
        <p>This component is to be used within {'<Message />'}. It is just shorthand for {'<Icon glyph="close" />'}</p>
        <Story.Segment title='(default)'>
          <Example>
            <Message icon>
              <Close />
              <Content>
                <Header>some header</Header>
                some other content
              </Content>
            </Message>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
