import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import List, { listDefinition, itemDefinition, contentDefinition } from './index'
import Icon from '../../elements/Icon'
import Image from '../../elements/Image'

const _otherProps = {
  href: {
    description: 'When passed, component will render as an <a /> tag'
  }
}

const Item = List.Item
const { Header, Description, Content } = Item

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
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
          <Example title='[className] gets passsed'>
            <List className='horizontal'>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example>
            <List format='bulleted'>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
            <List format='ordered'>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='link'>
          <Example>
            <List link>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='horizontal'>
          <Example>
            <List horizontal>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <List inverted>
                <Item>
                  <Header>header one</Header>
                  <Description>description one</Description>
                </Item>
                <Item>
                  <Header>header two</Header>
                  <Description>description two</Description>
                </Item>
                <Item>
                  <Header>header three</Header>
                  <Description>description three</Description>
                </Item>
              </List>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='selection'>
          <Example>
            <List selection>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='animated'>
          <Example>
            <List animated>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='relaxed'>
          <Example title='(true)'>
            <List relaxed>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
          <Example title='very'>
            <List relaxed='very'>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='divided'>
          <Example title='(true)'>
            <List divided>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
          <Example title='celled'>
            <List divided='celled'>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={List} propKey='size' definition={listDefinition} props={{
            children: () => {
              return [<Item key='one'>one</Item>, <Item key='two'>two</Item>, <Item key='three'>three</Item>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <List valigned='top'>
              <Item>
                <Image src='images/jenny.jpg' />
                <Content>top valigned</Content>
              </Item>
            </List>
            <List valigned='middle'>
              <Item>
                <Image src='images/jenny.jpg' />
                <Content>middle valigned</Content>
              </Item>
            </List>
            <List valigned='bottom'>
              <Item>
                <Image src='images/jenny.jpg' />
                <Content>bottom valigned</Content>
              </Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <List floated='right'>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
            <List floated='left'>
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
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
              <Item>one</Item>
              <Item>two</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>When passed, component will render as an {'<a />'} tag</p>
          <Example>
            <List>
              <Item href='http://www.google.com' target='_blank'>actual link</Item>
              <Item href={null}>looks like a link</Item>
              <Item>three</Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <List>
              <Item disabled>disabled</Item>
              <Item>two</Item>
              <Item>three</Item>
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
              <Item>
                <Header>header one</Header>
                some other content
              </Item>
              <Item>
                <Header>header two</Header>
                some other content
              </Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>When passed, component will render as an {'<a />'} tag</p>
          <Example>
            <List>
              <Item>
                <Header href='http://www.google.com' target='_blank'>link header</Header>
                some other content
              </Item>
              <Item>
                <Header href={null}>looks like a link</Header>
                some other content
              </Item>
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
              <Item>
                <Icon glyph='home' />
                <Content>home content</Content>
              </Item>
              <Item>
                <Icon glyph='user' />
                <Content>user content</Content>
              </Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <List horizontal>
              <Item>
                <Image src='images/jenny.jpg' />
                <Content valigned='top'>top valigned</Content>
              </Item>
              <Item>
                <Image src='images/jenny.jpg' />
                <Content valigned='middle'>middle valigned</Content>
              </Item>
              <Item>
                <Image src='images/jenny.jpg' />
                <Content valigned='bottom'>bottom valigned</Content>
              </Item>
            </List>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <List>
              <Item>
                <Content floated='right'>right floated</Content>
                <Content floated='left'>left floated</Content>
                <Content>content</Content>
              </Item>
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
              <Item>
                <Header>header</Header>
                <Description>description</Description>
              </Item>
              <Item>
                <Icon glyph='user' />
                <Content>
                  <Header>header</Header>
                  <Description>description</Description>
                </Content>
              </Item>
            </List>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
