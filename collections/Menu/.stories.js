import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Menu, { menuDefinition, itemDefinition, submenuDefinition } from './index'
import Input from '../../elements/Input'
import Icon from '../../elements/Icon'
import Segment from '../../elements/Segment'
const { Item, Submenu } = Menu

const _otherProps = {
  href: {
    description: 'When passed, this causes the component to render as an <a />'
  }
}

storiesOf('Menu', module)
  .add('<Menu />', () => {
    return (
      <Story title='<Menu />'>
        <Api definition={menuDefinition}>
          import Menu from 'sui-stateless-components/collections/Menu'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Menu>
              <Item>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
          <Example title='[className] gets passed'>
            <Menu className='secondary'>
              <Item>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example title='secondary'>
            <Menu format='secondary'>
              <Item className='active'>active item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
          <Example title='tabular'>
            <Menu format='tabular'>
              <Item className='active'>active item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
          <Example title='text'>
            <Menu format='text'>
              <Item className='active'>active item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
          <Example title='pagination'>
            <Menu format='pagination'>
              <Item className='active'>1</Item>
              <Item>2</Item>
              <Item>3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='pointing'>
          <Example>
            <Menu pointing>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='vertical'>
          <Example>
            <Menu vertical>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='fixed'>
          <Example title='top'>
            <div style={{ background: '#ccc', WebkitTransform: 'translateZ(0)', height: '100px', border: '1px solid #999' }}>
              <Menu fixed='top'>
                <Item className='active'>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
              </Menu>
            </div>
          </Example>
          <Example title='bottom'>
            <div style={{ background: '#ccc', WebkitTransform: 'translateZ(0)', height: '100px', border: '1px solid #999' }}>
              <Menu fixed='bottom'>
                <Item className='active'>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
              </Menu>
            </div>
          </Example>
          <Example title='left/right'>
            <div style={{ background: '#ccc', WebkitTransform: 'translateZ(0)', height: '150px', border: '1px solid #999' }}>
              <Menu fixed='left' vertical>
                <Item className='active'>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
              </Menu>
              <Menu fixed='right' vertical>
                <Item className='active'>item 1</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
              </Menu>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <Menu inverted>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Menu} propKey='color' definition={menuDefinition} props={{
            children: (value) => {
              return [<Item header key='1'>{value} menu</Item>, <Item active key='2'>active</Item>, <Item key='3'>item</Item>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='icon'>
          <Example>
            <Menu icon>
              <Item className='active'><Icon glyph='home' /></Item>
              <Item><Icon glyph='user' /></Item>
              <Item><Icon glyph='close' /></Item>
            </Menu>
            <Menu icon='labeled'>
              <Item className='active'><Icon glyph='home' />home</Item>
              <Item><Icon glyph='user' />user</Item>
              <Item><Icon glyph='close' />close</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='fit'>
          <Example>
            <Menu fit='fluid' vertical>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
            <Menu fit='compact'>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Menu count='two'>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
            </Menu>
            <Menu count='four'>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
              <Item>item 4</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Menu} propKey='size' definition={menuDefinition} props={{
            children: (value) => {
              return [<Item header key='1'>{value} menu</Item>, <Item active key='2'>active</Item>, <Item key='3'>item</Item>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='fitted'>
          <Example>
            <Menu fitted vertical>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
            <Menu fitted='vertically' vertical>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
            <Menu fitted='horizontally'>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='borderless'>
          <Example>
            <Menu borderless>
              <Item className='active'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Menu.Item />', () => {
    return (
      <Story title='<Menu.Item />'>
        <Api definition={itemDefinition} otherProps={_otherProps} />
        <Story.Segment title='(default)'>
          <Example>
            <Menu>
              <Item>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
          <Example title='[className] gets passed'>
            <Menu>
              <Item className='header'>item 1</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>This will cause the component to render as an {'<a />'}</p>
          <Example>
            <Menu>
              <Item href='http://www.google.com' target='_blank'>href item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='header'>
          <Example>
            <Menu>
              <Item header>header item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='link'>
          <Example>
            <Menu>
              <Item link>link item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='dropdown'>
          <Example>
            need Dropdown component
          </Example>
        </Story.Segment>
        <Story.Segment title='down'>
          <Example>
            <Menu>
              <Item down>down item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <Menu>
              <Item active>active item</Item>
              <Item>item 2</Item>
              <Item>item 3</Item>
            </Menu>
          </Example>
        </Story.Segment>
        <Story.Segment title='fitted'>
          <Example>
            <Menu vertical>
              <Item fitted>fitted item</Item>
              <Item fitted='vertically'>vertically fitted item</Item>
              <Item fitted='horizontally'>horizontally fitted item</Item>
            </Menu>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Menu.Submenu />', () => {
    return (
      <Story title='<Menu.Submenu />'>
        <Api definition={submenuDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Menu vertical>
              <Item>item 1</Item>
              <Submenu>
                <Item>sub menu item 1</Item>
                <Item>sub menu item 2</Item>
              </Submenu>
            </Menu>
          </Example>
          <Example title='[className] gets passed'>
            <Menu>
              <Item>item 1</Item>
              <Submenu className='right'>
                <Item>sub menu item 1</Item>
                <Item>sub menu item 2</Item>
              </Submenu>
            </Menu>
          </Example>
        </Story.Segment>
      </Story>
    )
  })

        /*
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
  .add('<Menu> vertical', () => {
    return (
      <Story examples='<Menu vertical>{ content }</Menu>'>
        <Menu vertical>{_makeItems()}</Menu>
        <Menu format='secondary' vertical>{_makeItems()}</Menu>
        <Menu format='text' vertical>{_makeItems()}</Menu>
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
  .add('<Menu> fixed', () => {
    return (
      <Story examples='<Menu fixed=[ "top" | "bottom" | "left" | "right" ]>{ content }</Menu>'>
        <p>The menus are fixed to the top and bottom of this { '<iframe>' }</p>
        <Menu fixed='left' vertical>{_makeItems()}</Menu>
        <Menu fixed='right' vertical>{_makeItems()}</Menu>
        <Menu fixed='top'>{_makeItems()}</Menu>
        <Menu fixed='bottom'>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> stackable', () => {
    return (
      <Story examples='<Menu stackable>{ content }</Menu>' showToggleNote>
        <Menu stackable>{_makeItems()}</Menu>
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
  .add('<Menu> color', makeColorStory(Menu, {
    props: {
      children: _makeItems(),
    },
    options: COLORS
  }))
  .add('<Menu> icon', () => {
    return (
      <Story examples='<Menu icon=[ true | "labeled" ]><Item><Icon/></Item></Menu>'>
        <Menu icon>
          {_makeItems([<Icon glyph='user'/>, <Icon glyph='close'/>, <Icon glyph='cloud'/>])}
        </Menu>
        <Menu icon='labeled'>
          <Item active><Icon glyph='user'/>User</Item>
          <Item><Icon glyph='close'/>Close</Item>
          <Item><Icon glyph='cloud'/>Cloud</Item>
        </Menu>
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
  .add('<Menu> items', () => {
    const values = extractOptionsValues(COUNTS)
    return (
      <Story examples={'<Menu items=[ ' + values + ' ]>{ content }</Menu>'}>
        <Menu items='twelve'>{_makeItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])}</Menu>
        <Menu items='three'>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> attached', () => {
    return (
      <Story examples='<Menu attached=[ "top" | "bottom" ]>{ content }</Menu>'>
        <Menu attached='top'>{_makeItems()}</Menu>
        <Segment attached>{makeLipsum()}</Segment>
        <Menu attached='bottom'>{_makeItems()}</Menu>
      </Story>
    )
  })
  .add('<Menu> size', makeSizeStory(Menu, {
    props: {
      children: _makeItems()
    },
    options: SIZES
  }))
  .add('<Menu> fitted', () => {
    return (
      <Story examples='<Menu fitted=[ true | "horizontally" | "vertically" ]>{ content }</Menu>'>
        <Menu fitted>{_makeItems(['Fitted 1', 'Fitted 2', 'Fitted 3'])}</Menu>
        <Menu fitted='horizontally'>{_makeItems(['Horizontally Fitted 1', 'Horizontally Fitted 2', 'Horizontally Fitted 3'])}</Menu>
        <Menu fitted='vertically'>{_makeItems(['Vertically Fitted 1', 'Vertically Fitted 2', 'Vertically Fitted 3'])}</Menu>
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
  .add('<Item> right', () => {
    return (
      <Story examples='<Menu><Item right/></Menu>'>
        <Menu>
          {_makeItems()}
          <Item right>Right Item</Item>
        </Menu>
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
  .add('<Item> dropdown', () => {
    return (
      <Story examples='<Menu><Item dropdown/></Menu>'>
        <Menu>
          {_makeItems()}
          <Item dropdown>
            Dropdown
            <Icon glyph='dropdown'/>
            <DropdownMenu active>
              {_makeItems()}
            </DropdownMenu>
          </Item>
        </Menu>
      </Story>
    )
  })
  .add('<Item> search', () => {
  })
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
  .add('<Submenu>', () => {
    return (
      <Story examples='<Menu><Submenu>{ content }</Submenu></Menu>'
        notes='<Submenu> can be on same level as <Menu> items'>
        <Menu>
          <Item>Item 1</Item><Item>Item 2</Item>
          <Submenu><Item>Submenu Item 1</Item><Item>Submenu Item 2</Item></Submenu>
        </Menu>
      </Story>
    )
  })
  .add('<Submenu> right', () => {
    return (
      <Story examples='<Menu><Submenu right>{ content }</Submenu></Menu>'>
        <Menu>
          <Item>Item 1</Item><Item>Item 2</Item>
          <Submenu right><Item>Submenu Item 1</Item><Item>Submenu Item 2</Item></Submenu>
        </Menu>
      </Story>
    )
  })
  .add('<Submenu> nested', () => {
    return (
      <Story examples='<Menu><Item><Submenu>{ content }</Submenu></Item></Menu>'
        notes='<Submenu> can be within an <Item>. This works best with vertical <Menu>'>
        <Menu vertical>
          <Item>Item 1</Item><Item>Item 2</Item>
          <Item>
            <Submenu>
              <Item header>Submenu Header</Item>
              <Item>Submenu Item 1</Item><Item>Submenu Item 2</Item>
            </Submenu>
          </Item>
        </Menu>
      </Story>
    )
  })
*/
