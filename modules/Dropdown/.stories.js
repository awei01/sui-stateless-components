import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { extractOptionsValues, makePassesPropsStory } from '../../.storybook/utils';
import { Dropdown, SELECTIONS, POINTINGS, Menu, Item, Search, Text, Header, Divider, Description } from './index'
import { Icon } from '../../elements/Icon'
import { Grid, Row, Column } from '../../collections/Grid'
import { Label } from '../../elements/Label'

const MultipleSelectionLabel = ({ children, ...rest }) => {
  return (<Label {...rest} link>{children}<Icon glyph='delete'/></Label>)
}

const _makeItems = (options = {}) => {
  let { count, prefix, selected } = options
  count = count || 3
  prefix = prefix ? prefix + ' ' : ''
  selected = selected || 1
  const result = []
  for (let i = 1; i < count + 1; i ++) {
    result.push(
      <Item key={i} selected={selected === i} onClick={ action(`${prefix}Item ${i} was clicked`) }>Item {i}</Item>
    )
  }
  return result
}

storiesOf('Dropdown', module)
  .add('<Dropdown> default', () => {
    return (
      <Story examples='<Dropdown>{ content }<Menu/></Button>'
          notes='This component does not rely on SUI javascript. All events/states are managed via props.'>
        <Dropdown>
          <Text>dropdown menu</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> active', () => {
    return (
      <Story examples='<Dropdown active>{ content }<Menu/></Button>'>
        <Dropdown active>
          <Text>dropdown menu</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> selection', () => {
    const selections = extractOptionsValues(SELECTIONS)
    return (
      <Story examples={'<Dropdown selection=[ ' + selections + ' ]>{ content }<Menu/></Button>'}>
        <Grid columns='two'>
          <Column>
            <h4>selection dropdown</h4>
            <Dropdown selection>
              <Icon glyph='dropdown'/>
              <Text default>default text</Text>
              <Menu>{_makeItems({ prefix: 'Selection' })}</Menu>
            </Dropdown>
          </Column>
          <Column>
            <h4>active selection dropdown</h4>
            <Dropdown active selection>
              <Icon glyph='dropdown'/>
              <Text default>default text</Text>
              <Menu>{_makeItems({ prefix: 'Selection' })}</Menu>
            </Dropdown>
          </Column>
        </Grid>
      </Story>
    )
  })
  .add('<Dropdown> selection=search', () => {
    const selections = extractOptionsValues(SELECTIONS)
    return (
      <Story examples={'<Dropdown selection=[ ' + selections + ' ]>{ content }<Menu/></Button>'}>
        <Grid columns='two'>
          <Column>
            <h4>search dropdown</h4>
            <Dropdown selection='search'>
              <Icon glyph='dropdown'/>
              <Search placeholder='Search...'/>
              <Menu>{_makeItems('selection')}</Menu>
            </Dropdown>
          </Column>
          <Column>
            <h4>active search dropdown</h4>
            <Dropdown active selection='search'>
              <Icon glyph='dropdown'/>
              <Search placeholder='Search...'/>
              <Menu>{_makeItems('selection')}</Menu>
            </Dropdown>
          </Column>
        </Grid>
      </Story>
    )
  })
  .add('<Dropdown> selection=multiple', () => {
    const selections = extractOptionsValues(SELECTIONS)
    return (
      <Story examples={'<Dropdown selection=[ ' + selections + ' ]>{ content }<Menu/></Button>'}>
        <Grid columns='one'>
          <Column>
            <h4>multiple dropdown</h4>
            <Dropdown fluid selection='multiple'>
              <Icon glyph='dropdown'/>
              <MultipleSelectionLabel>Selected 1</MultipleSelectionLabel>
              <MultipleSelectionLabel>Selected 2</MultipleSelectionLabel>
              <Menu>{_makeItems('selection')}</Menu>
            </Dropdown>
          </Column>
          <Column>
            <h4>active multiple dropdown</h4>
            <Dropdown active fluid selection='multiple'>
              <Icon glyph='dropdown'/>
              <MultipleSelectionLabel>Selected 1</MultipleSelectionLabel>
              <MultipleSelectionLabel>Selected 2</MultipleSelectionLabel>
              <Menu>
                {_makeItems('selection')}
                <Item filtered>Selected 1</Item>
                <Item filtered>Selected 2</Item>
              </Menu>
            </Dropdown>
          </Column>
        </Grid>
      </Story>
    )
  })
  .add('<Dropdown> selection=multiple search', () => {
    const selections = extractOptionsValues(SELECTIONS)
    return (
      <Story examples={'<Dropdown selection=[ ' + selections + ' ]>{ content }<Menu/></Button>'}>
        <Grid columns='one'>
          <Column>
            <h4>multiple search dropdown</h4>
            <Dropdown fluid selection='multiple search'>
              <Icon glyph='dropdown'/>
              <MultipleSelectionLabel>Selected 1</MultipleSelectionLabel>
              <MultipleSelectionLabel>Selected 2</MultipleSelectionLabel>
              <Search placeholder='Search...'/>
              <Menu>{_makeItems('selection')}</Menu>
            </Dropdown>
          </Column>
          <Column>
            <h4>active multiple search dropdown</h4>
            <Dropdown active fluid selection='multiple search'>
              <Icon glyph='dropdown'/>
              <MultipleSelectionLabel>Selected 1</MultipleSelectionLabel>
              <MultipleSelectionLabel>Selected 2</MultipleSelectionLabel>
              <Search placeholder='Search...'/>
              <Menu>
                {_makeItems('selection')}
                <Item filtered>Selected 1</Item>
                <Item filtered>Selected 2</Item>
              </Menu>
            </Dropdown>
          </Column>
        </Grid>
      </Story>
    )
  })
  .add('<Dropdown> inline', () => {
    return (
      <Story examples='<Dropdown inline>{ content }<Menu/></Button>'>
        This is some text {' '}
        <Dropdown active inline>
          <Text>inline</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
        surrounding the dropdown
      </Story>
    )
  })
  .add('<Dropdown> pointing', () => {
    const pointings = extractOptionsValues(POINTINGS)
    class Example extends React.Component {
      state = {}
      render() {
        let { current, active } = this.state
        current = current || 0
        active = active || false
        return (
          <Grid aligned='center' equal>
            <Row><Column>
              <label>select [pointing] value: </label>
              <select onChange={ (event) => {
                this.setState({ current: event.target.selectedIndex })
              }} value={current}>
                {
                  POINTINGS.map((item, index) => {
                    item = item === true ? 'true' : '"' + item + '"'
                    return (<option key={index} value={index}>{item}</option>)
                  })
                }
              </select>
              {' | '}
              <label>set active</label>
              {' '}
              <input type='checkbox' checked={active} onClick={ (event) => {
                this.setState({ active: !active })
              }}/>
            </Column></Row>
            <Row><Column>
              <Dropdown active={active} pointing={POINTINGS[current]}>
                <Text>{POINTINGS[current]} pointing dropdown</Text>
                <Icon glyph='dropdown'/>
                <Menu>{_makeItems()}</Menu>
              </Dropdown>
            </Column></Row>
          </Grid>
        )
      }
    }
    return (
      <Story examples={'<Dropdown pointing=[ ' + pointings + ' ]>{ content }<Menu/></Button>'}>
        <Example/>
      </Story>
    )
  })
  .add('<Dropdown> floating', () => {
    return (
      <Story examples='<Dropdown floating>{ content }<Menu/></Button>'>
        <Dropdown active floating>
          <Text>floating</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> simple', () => {
    return (
      <Story examples='<Dropdown simple>{ content }<Menu/></Button>'>
        <Dropdown simple>
          <Text>simple</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> loading', () => {
    return (
      <Story examples='<Dropdown loading>{ content }<Menu/></Button>'>
        <Dropdown loading>
          <Text>loading</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> error', () => {
    return (
      <Story examples='<Dropdown error>{ content }<Menu/></Button>'>
        <Dropdown active error>
          <Text>error</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> disabled', () => {
    return (
      <Story examples='<Dropdown disabled>{ content }<Menu/></Button>'>
        <Dropdown active disabled>
          <Text>active and disabled</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> scrolling', () => {
    return (
      <Story examples='<Dropdown scrolling>{ content }<Menu/></Button>'>
        <Dropdown active scrolling>
          <Text>scrolling</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems({ count: 20 })}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> compact', () => {
    return (
      <Story examples='<Dropdown compact>{ content }<Menu/></Button>'>
        <Dropdown active compact selection>
          <Text>compact</Text>
          <Icon glyph='dropdown'/>
          <Menu>
            <Item>1</Item><Item>2</Item><Item>3</Item>
          </Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Dropdown> fluid', () => {
    return (
      <Story examples='<Dropdown fluid>{ content }<Menu/></Button>'>
        <Dropdown active fluid selection>
          <Text>fluid</Text>
          <Icon glyph='dropdown'/>
          <Menu>{_makeItems()}</Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Dropdown, { props: {
    active: true,
    className: "fluid",
    onClick: action('Dropdown was clicked'),
    children: [<Icon key='icon' glyph='dropdown'/>, <Text key='text'>dropdown menu</Text>, <Menu key='menu'>{_makeItems()}</Menu>]
  }}))
  .add('<Menu> scrolling', () => {
    return (
      <Story examples='<Dropdown><Menu scrolling/></Button>'>
        <Dropdown active>
          <Text>Dropdown</Text>
          <Icon glyph='dropdown'/>
          <Menu>
            <Header>scrolling sub menu</Header>
            <Menu active scrolling>
              {_makeItems({ count: 20 })}
            </Menu>
          </Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Menu> direction', () => {
    return (
      <Story examples='<Dropdown><Menu direction=[ "left" | "right" ]/></Button>'>
        <Grid aligned='center' equal>
          <Column>
            <Dropdown active>
              <Text>Dropdown</Text>
              <Icon glyph='dropdown'/>
              <Menu>
                <Item>
                  <Icon glyph='left dropdown'/>
                  Left menu
                  <Menu direction='left' active>{_makeItems()}</Menu>
                </Item>
                <Item>
                  <Icon glyph='dropdown'/>
                  Right menu
                  <Menu direction='right' active>{_makeItems()}</Menu>
                </Item>
              </Menu>
            </Dropdown>
          </Column>
        </Grid>
      </Story>
    )
  })
  .add('<Item> disabled', () => {
    return (
      <Story examples='<Dropdown><Menu><Item disabled/></Menu></Button>'>
        <Dropdown simple>
          <Text>Dropdown</Text>
          <Icon glyph='dropdown'/>
          <Menu>
            {_makeItems()}
            <Item disabled>Item 4</Item>
          </Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Item> submenu', () => {
    return (
      <Story examples='<Dropdown><Menu><Item><Menu/></Item></Menu></Button>'>
        <Dropdown active>
          <Text>Dropdown</Text>
          <Icon glyph='dropdown'/>
          <Menu>
            {_makeItems()}
            <Item>
              <Icon glyph='dropdown'/>
              Submenu
              <Menu active>{_makeItems()}</Menu>
            </Item>
          </Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Header>', () => {
    return (
      <Story examples='<Dropdown><Menu><Header/></Menu></Button>'>
        <Dropdown active>
          <Text>Dropdown</Text>
          <Icon glyph='dropdown'/>
          <Menu>
            <Header>A header</Header>
            {_makeItems()}
          </Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Divider>', () => {
    return (
      <Story examples='<Dropdown><Menu><Divider/></Menu></Button>'>
        <Dropdown active>
          <Text>Dropdown</Text>
          <Icon glyph='dropdown'/>
          <Menu>
            <Header>A header</Header>
            <Divider/>
            {_makeItems()}
          </Menu>
        </Dropdown>
      </Story>
    )
  })
  .add('<Description>', () => {
    return (
      <Story examples='<Dropdown><Menu><Item><Description/></Item></Menu></Button>'>
        <Dropdown active>
          <Text>Dropdown</Text>
          <Icon glyph='dropdown'/>
          <Menu style={{ width: '15em' }}>
            <Item><Text>Item</Text><Description>Desc 1</Description></Item>
            <Item><Text>Item</Text><Description>Desc 2</Description></Item>
            <Item><Text>Item</Text><Description>Desc 3</Description></Item>
          </Menu>
        </Dropdown>
      </Story>
    )
  })
