import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeSizeStory, makeColorStory, makePassesPropsStory, extractOptionsValues, makeLipsum } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Menu, Item, SubMenu, SIZES, COLORS, COUNTS, FORMATS } from './index'

const _makeItems = (items, activeIndex = 0) => {
  items = items || ['Menu Item 1', 'Menu Item 2', 'Menu Item 3']
  return items.map((item, index) => {
    const isActive = index === activeIndex
    return <Item key={index} active={isActive}>{item}</Item>
  })
}

storiesOf('Menu', module)
  .add('<Menu> default', () => {
    return (
      <Story examples='<Menu>{ content }</Menu>'>
        <Menu>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> items', () => {
    const values = extractOptionsValues(COUNTS)
    return (
      <Story examples={'<Menu items=[ ' + values + ' ]>{ content }</Menu>'}>
        <Menu items='twelve'>{_makeItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])}</Menu>
        <Menu items='three'>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> format', () => {
    const formats = extractOptionsValues(FORMATS)
    return (
      <Story examples={'<Menu format=[ ' + formats + ' ]>{ content }</Menu>'}>
        <Menu format='secondary'>{_makeItems()}</Menu>
        <Menu format='tabular'>{_makeItems()}</Menu>
        <Menu format='text'>{_makeItems()}</Menu>
        <Menu format='pagination'>{_makeItems([1, 2, 3, 4, 5, 6])}</Menu>
      </Story>
    )
  })
  .add('<Menu> pointing', () => {
    return (
      <Story examples='<Menu pointing>{ content }</Menu>'>
        <Menu pointing>{_makeItems()}</Menu>
        <Menu format='secondary' pointing>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> vertical', () => {
    return (
      <Story examples='<Menu vertical>{ content }</Menu>'>
        <Menu vertical>{_makeItems()}</Menu>
        <Menu format='secondary' vertical>{_makeItems()}</Menu>
        <Menu format='text' vertical>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> fit', () => {
    return (
      <Story examples='<Menu fit=[ "fluid" | "compact" ]>{ content }</Menu>'>
        <Menu fit="fluid" vertical>{_makeItems(['Fluid Menu Item 1', 'Fluid Menu Item 2', 'Fluid Menu Item 3'])}</Menu>
        <Menu fit="compact">{_makeItems(['Compact Item 1', 'Compact Item 2', 'Compact Item 3'])}</Menu>
      </Story>
    )
  })
  .add('<Menu> fitted', () => {
    return (
      <Story examples='<Menu fitted=[ true | "horizontally" | "vertically" ]>{ content }</Menu>'>
        <Menu fitted>{_makeItems(['Fitted 1', 'Fitted 2', 'Fitted 3'])}</Menu>
        <Menu fitted='horizontally'>{_makeItems(['Horizontally Fitted 1', 'Horizontally Fitted 2', 'Horizontally Fitted 3'])}</Menu>
        <Menu fitted='vertically'>{_makeItems(['Vertically Fitted 1', 'Vertically Fitted 2', 'Vertically Fitted 3'])}</Menu>
      </Story>
    )
  })
  .add('<Menu> inverted', () => {
    return (
      <Story examples='<Menu inverted>{ content }</Menu>'>
        <Menu inverted>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> borderless', () => {
    return (
      <Story examples='<Menu borderless>{ content }</Menu>'>
        <Menu borderless>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> color', makeColorStory(Menu, {
    props: {
      children: _makeItems(),
    },
    options: COLORS
  }))
  .add('<Menu> size', makeSizeStory(Menu, {
    props: {
      children: _makeItems()
    },
    options: SIZES
  }))
  .add('<Menu> passes .className and other props', makePassesPropsStory(Menu, { props: {
    className: "inverted",
    onClick: action('Menu was clicked'),
    children: _makeItems()
  }}))
  .add('<Item> active', () => {
    return (
      <Story examples='<Menu><Item active/></Menu>'>
        <Menu>{_makeItems(['Not Active', 'Active', 'Not Active', 'Not Active'], 1)}</Menu>
      </Story>
    )
  })
  .add('<Item> down', () => {
    return (
      <Story examples='<Menu><Item down/></Menu>'>
        <Menu>
          <Item>Not Down</Item>
          <Item down>Down</Item>
          <Item>Not Down</Item>
          <Item>Not Down</Item>
        </Menu>
      </Story>
    )
  })
  .add('<Item> header', () => {
    return (
      <Story examples='<Menu><Item header/></Menu>'>
        <Menu>
          <Item header>Header 1</Item>
          <Item>Item 1</Item>
          <Item header>Header 2</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Menu>
      </Story>
    )
  })
  .add('<Item> link', () => {
    return (
      <Story examples='<Menu><Item link/></Menu>'
        notes='The link property does not actually make the item an <a> tag. Look at [href] to make the item a link'>
        <Menu>
          <Item header link>Header Link</Item>
          <Item link>Link 1</Item>
          <Item link>Link 2</Item>
          <Item link>Link 3</Item>
        </Menu>
      </Story>
    )
  })
  .add('<Item> href', () => {
    return (
      <Story examples='<Menu><Item href={ some link }/></Menu>'
        notes='The [href] prop will create an <a> tag'>
        <Menu>
          <Item header href='http://www.google.com' target='_blank'>Header Href</Item>
          <Item href='http://www.google.com' target='_blank'>Href 2</Item>
          <Item href='http://www.google.com' target='_blank'>Href 3</Item>
          <Item href='http://www.google.com' target='_blank'>Href 4</Item>
        </Menu>
      </Story>
    )
  })
  /*
  .add('<Item> dropdown', () => {
  })
  .add('<Item> popup', () => {
  })
  .add('<Item> search', () => {
  })
  */
  .add('<Item> fitted', () => {
    return (
      <Story examples='<Menu><Item fitted=[ true | "horizontally" | "vertically" ]/></Menu>'>
        <Menu>
          <Item fitted>Fitted</Item><Item fitted>Fitted</Item><Item fitted>Fitted</Item>
        </Menu>
        <Menu>
          <Item fitted='horizontally'>Horizontally Fitted</Item><Item fitted='horizontally'>Horizontally Fitted</Item><Item fitted='horizontally'>Horizontally Fitted</Item>
        </Menu>
        <Menu>
          <Item fitted='vertically'>Vertically Fitted</Item><Item fitted='vertically'>Vertically Fitted</Item><Item fitted='vertically'>Vertically Fitted</Item>
        </Menu>
      </Story>
    )
  })
  .add('<Item> color', () => {
    const values = extractOptionsValues(COLORS)
    return (
      <Story examples={'<Menu><Item color=[' + values + ']/></Menu>'}>
        {
          COLORS.map((color) => {
            return (
              <Menu key={color}>
                <Item color={color}>{color} item</Item><Item active color={color}>active {color} item</Item><Item color={color}>{color} item</Item><Item color={color}>{color} item</Item>
              </Menu>
            )
          })
        }
      </Story>
    )
  })
  .add('<Item> passes .className and other props', () => {
    return (
      <Story examples='<Menu><Item className="header" onClick={function}/></Menu>'>
        <Menu>
          <Item className='header' onClick={action('Item was clicked')}>
            Item is header and clickable
          </Item>
        </Menu>
      </Story>
    )
  })
  .add('<SubMenu>', () => {
    return (
      <Story examples='<Menu><SubMenu>{ content }</SubMenu></Menu>'
        notes='<SubMenu> can be on same level as <Menu> items'>
        <Menu>
          <Item>Item 1</Item><Item>Item 2</Item>
          <SubMenu><Item>SubMenu Item 1</Item><Item>SubMenu Item 2</Item></SubMenu>
        </Menu>
      </Story>
    )
  })
  .add('<SubMenu> right', () => {
    return (
      <Story examples='<Menu><SubMenu right>{ content }</SubMenu></Menu>'>
        <Menu>
          <Item>Item 1</Item><Item>Item 2</Item>
          <SubMenu right><Item>SubMenu Item 1</Item><Item>SubMenu Item 2</Item></SubMenu>
        </Menu>
      </Story>
    )
  })
  .add('<SubMenu> (nested)', () => {
    return (
      <Story examples='<Menu><Item><SubMenu>{ content }</SubMenu></Item></Menu>'
        notes='<SubMenu> can be within an <Item>. This works best with vertical <Menu>'>
        <Menu vertical>
          <Item>Item 1</Item><Item>Item 2</Item>
          <Item>
            <SubMenu>
              <Item header>SubMenu Header</Item>
              <Item>SubMenu Item 1</Item><Item>SubMenu Item 2</Item>
            </SubMenu>
          </Item>
        </Menu>
      </Story>
    )
  })
