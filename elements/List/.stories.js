import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import List, { listDefinition, itemDefinition, contentDefinition } from './index'
import Icon from '../../elements/Icon'
import Image from '../../elements/Image'

const _otherProps = {
  href: {
    description: 'When passed, component will render as an <a /> tag'
  }
}

storiesOf('List', module)
  .add('<List />', () => {
    return (
      <Story title='<List />'>
        <Api definition={listDefinition}>
          import List from 'sui-stateless-components/elements/List'
        </Api>
        <Story.Segment title='(default)'>
          <p>This component will render as a {'<div />'} tag</p>
          <Example>
            <List>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
          <Example title='[className] gets passsed'>
            <List className='horizontal'>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example>
            <List format='bulleted'>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
            <List format='ordered'>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='link'>
          <Example>
            <List link>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='horizontal'>
          <Example>
            <List horizontal>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <List inverted>
                <List.Item>
                  <List.Item.Header>header one</List.Item.Header>
                  <List.Item.Description>description one</List.Item.Description>
                </List.Item>
                <List.Item>
                  <List.Item.Header>header two</List.Item.Header>
                  <List.Item.Description>description two</List.Item.Description>
                </List.Item>
                <List.Item>
                  <List.Item.Header>header three</List.Item.Header>
                  <List.Item.Description>description three</List.Item.Description>
                </List.Item>
              </List>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='selection'>
          <Example>
            <List selection>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='animated'>
          <Example>
            <List animated>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='relaxed'>
          <Example title='(true)'>
            <List relaxed>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
          <Example title='very'>
            <List relaxed='very'>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='divided'>
          <Example title='(true)'>
            <List divided>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
          <Example title='celled'>
            <List divided='celled'>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={List} propKey='size' definition={listDefinition} props={{
            children: () => {
              return [<List.Item key='one'>one</List.Item>, <List.Item key='two'>two</List.Item>, <List.Item key='three'>three</List.Item>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <List valigned='top'>
              <List.Item>
                <Image src='images/jenny.jpg' />
                <List.Item.Content>top valigned</List.Item.Content>
              </List.Item>
            </List>
            <List valigned='middle'>
              <List.Item>
                <Image src='images/jenny.jpg' />
                <List.Item.Content>middle valigned</List.Item.Content>
              </List.Item>
            </List>
            <List valigned='bottom'>
              <List.Item>
                <Image src='images/jenny.jpg' />
                <List.Item.Content>bottom valigned</List.Item.Content>
              </List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <List floated='right'>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
            <List floated='left'>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<List.Item />', () => {
    return (
      <Story title='<List.Item />'>
        <Api definition={itemDefinition} otherProps={_otherProps} />
        <Story.Segment title='(default)'>
          <p>This component will render as a {'<div />'} tag</p>
          <Example>
            <List>
              <List.Item>one</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>When passed, component will render as an {'<a />'} tag</p>
          <Example>
            <List>
              <List.Item href='http://www.google.com' target='_blank'>href</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <List>
              <List.Item disabled>disabled</List.Item>
              <List.Item>two</List.Item>
              <List.Item>three</List.Item>
            </List>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<List.Item.Header />', () => {
    return (
      <Story title='<List.Item.Header />'>
        <Api otherProps={_otherProps} />
        <Story.Segment title='(default)'>
          <p>This component will render as a {'<div />'} tag</p>
          <Example>
            <List>
              <List.Item>
                <List.Item.Header>header one</List.Item.Header>
                some other content
              </List.Item>
              <List.Item>
                <List.Item.Header>header two</List.Item.Header>
                some other content
              </List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>When passed, component will render as an {'<a />'} tag</p>
          <Example>
            <List>
              <List.Item>
                <List.Item.Header href='http://www.google.com' target='_blank'>href header</List.Item.Header>
                some other content
              </List.Item>
              <List.Item>
                <List.Item.Header>header two</List.Item.Header>
                some other content
              </List.Item>
            </List>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<List.Item.Content />', () => {
    return (
      <Story definition={contentDefinition} title='<List.Item.Content />'>
        <Story.Segment title='(default)'>
          <p>This component helps position content along side {'<Icon /> or <Image />'}</p>
          <Example>
            <List>
              <List.Item>
                <Icon glyph='home' />
                <List.Item.Content>home content</List.Item.Content>
              </List.Item>
              <List.Item>
                <Icon glyph='user' />
                <List.Item.Content>user content</List.Item.Content>
              </List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <List horizontal>
              <List.Item>
                <Image src='images/jenny.jpg' />
                <List.Item.Content valigned='top'>top valigned</List.Item.Content>
              </List.Item>
              <List.Item>
                <Image src='images/jenny.jpg' />
                <List.Item.Content valigned='middle'>middle valigned</List.Item.Content>
              </List.Item>
              <List.Item>
                <Image src='images/jenny.jpg' />
                <List.Item.Content valigned='bottom'>bottom valigned</List.Item.Content>
              </List.Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <List>
              <List.Item>
                <List.Item.Content floated='right'>right floated</List.Item.Content>
                <List.Item.Content floated='left'>left floated</List.Item.Content>
                <List.Item.Content>content</List.Item.Content>
              </List.Item>
            </List>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<List.Item.Description />', () => {
    return (
      <Story title='<List.Item.Description />'>
        <Story.Segment title='(default)'>
          <p>This component is to be used within {'<List.Item /> or <List.Item.Content />'}</p>
          <Example>
            <List>
              <List.Item>
                <List.Item.Header>header</List.Item.Header>
                <List.Item.Description>description</List.Item.Description>
              </List.Item>
              <List.Item>
                <Icon glyph='user' />
                <List.Item.Content>
                  <List.Item.Header>header</List.Item.Header>
                  <List.Item.Description>description</List.Item.Description>
                </List.Item.Content>
              </List.Item>
            </List>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
