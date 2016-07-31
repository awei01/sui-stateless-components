import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeLipsum, extractOptionsValues, makeSizeStory, makePassesPropsStory } from '../../.storybook/utils';
import { List, Item, Content, SIZES } from './index'
import { Icon } from '../../elements/Icon'
import { Segment } from '../../elements/Segment'

const _makeItems = (items, props) => {
  items = items || ['Item 1', 'Item 2', 'Item 3']
  return items.map((item, index) => {
    return (
      <Item {...props} key={index}>{item}</Item>
    )
  })
}

storiesOf('List', module)
  .add('<List>', () => {
    return (
      <Story examples='<List><Item/></List>'
        notes='The <List> specifically renders a <div> tag. To render <ul> or <li> use exported makeListClasses() method to generate the [className] prop.'
        >
        <List>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<List> format', () => {
    return (
      <Story examples='<List format=[ "bulleted" | "ordered" ]><Item/></List>'>
        <List format='bulleted'>
          {_makeItems()}
        </List>
        <List format='ordered'>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<List> horizontal', () => {
    return (
      <Story examples='<List horizontal><Item/></List>'>
        <List horizontal>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<List> inverted', () => {
    return (
      <Story examples='<List inverted><Item/></List>'>
        <Segment inverted>
          <List inverted>
            {_makeItems()}
          </List>
        </Segment>
      </Story>
    )
  })
  .add('<List> selection', () => {
    return (
      <Story examples='<List selection><Item/></List>'>
        <List selection>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<List> animated', () => {
    return (
      <Story examples='<List animated><Item/></List>'>
        <List animated>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<List> relaxed', () => {
    return (
      <Story examples='<List relaxed=[ true | "very "]><Item/></List>'>
        <List>
          <Item>non-relaxed list</Item>
          {_makeItems()}
        </List>
        <List relaxed>
          <Item>relaxed list</Item>
          {_makeItems()}
        </List>
        <List relaxed='very'>
          <Item>very relaxed list</Item>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<List> divided', () => {
    return (
      <Story examples='<List divided=[ true | "celled "]><Item/></List>'>
        <List>
          <Item>non-divided list</Item>
          {_makeItems()}
        </List>
        <List divided>
          <Item>divided list</Item>
          {_makeItems()}
        </List>
        <List divided='celled'>
          <Item>celled list</Item>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<List> size', makeSizeStory(List, {
    options: SIZES,
    props: { children: _makeItems() }
  }))
  .add('<List> passes .className and other props', makePassesPropsStory(List, {
    props: {
      className: 'bulleted',
      onClick: action('List was clicked'),
      children: _makeItems()
    }
  }))
  .add('<Item> default', () => {
    return (
      <Story examples='<List><Item/></List>'
        notes='Item renders as <div> by default. To generate an <a> tag look at link.'>
        <List>
          {_makeItems()}
        </List>
      </Story>
    )
  })
  .add('<Item> link', () => {
    return (
      <Story examples={[
          '<List><Item link/></List>',
          '<List><Item href={url}/></List>'
        ]} notes='An <Item> with [link] or [href] will generate an <a> tag'>
        <List>
          <Item>Item has link</Item>
          {_makeItems(null, { link: true })}
        </List>
        <List>
          <Item>Item has href</Item>
          {_makeItems(null, { href: 'http://www.google.com', target: '_blank' })}
        </List>
      </Story>
    )
  })
  .add('<Item> icon content', () => {
    return (
      <Story examples='<List><Item><Icon/><Content/></Item></List>'>
        <List>
          <Item>
            <Icon glyph='close'/>
            <Content>item content here</Content>
          </Item>
          <Item>
            <Icon glyph='hand pointer'/>
            <Content>item content here</Content>
          </Item>
          <Item>
            <Icon glyph='add'/>
            <Content>item content here</Content>
          </Item>
        </List>
      </Story>
    )
  })
  .add('<Item> passes .className and other props', () => {
    return (
      <Story examples='<List><Item className="link" onClick={ function }/></List>'>
        <List>
          <Item className='link' onClick={action('Item was clicked')}>
            link clickable item
          </Item>
        </List>
      </Story>
    )
  })
  .add('<Content> valign', () => {
    return (
      <Story examples='<List><Item><Content valign=[ "top" | "middle" | "bottom" ]/></Item></List>'>
        <List selection>
          <Item>
            <Icon size='big' glyph='user'/>
            <Content>non-aligned content</Content>
          </Item>
          <Item>
            <Icon size='big' glyph='user'/>
            <Content valign='top'>top aligned content</Content>
          </Item>
          <Item>
            <Icon size='big' glyph='user'/>
            <Content valign='middle'>middle aligned content</Content>
          </Item>
          <Item>
            <Icon size='big' glyph='user'/>
            <Content valign='bottom'>bottom aligned content</Content>
          </Item>
        </List>
      </Story>
    )
  })
  .add('<Content> float', () => {
    return (
      <Story examples='<List><Item><Content float=[ "left" | "right" ]/></Item></List>'>
        <List selection>
          <Item>
            <Content float='right'>right floated</Content>
            <Content float='left'>left floated</Content>
          </Item>
        </List>
      </Story>
    )
  })
  .add('<Content> passes .className and other props', () => {
    return (
      <Story examples='<List><Item><Content className="bottom aligned" onClick={ function }/></Item></List>'>
        <List>
          <Item>
            <Icon size='big' glyph='user'/>
            <Content className='bottom aligned' onClick={action('Content was clicked')}>
              bottom aligned clickable item
            </Content>
          </Item>
        </List>
      </Story>
    )
  })
