import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/components'
import Dropdown, { dropdownDefinition, textDefinition, menuDefinition, itemDefinition } from './index'
const { Icon, Text, Menu } = Dropdown
const { Header, Item, Divider } = Menu

storiesOf('Dropdown', module)
  .add('<Dropdown />', () => {
    return (
      <Story title='<Dropdown />'>
        <Api definition={dropdownDefinition}>
          import Dropdown from 'sui-stateless-components/modules/Dropdown'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Dropdown>
              <Text>dropdown menu</Text>
              <Icon />
            </Dropdown>
          </Example>
          <Example title='[className] gets passed'>
            <Dropdown className='selection'>
              <Text>dropdown</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='selection'>
          <Example>
            <Dropdown selection>
              <Text>selection dropdown</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='inline'>
          <Example>
            This is some text
            {' '}
            <Dropdown inline>
              <Text>inline dropdown</Text>
              <Icon />
            </Dropdown>
            surrounding the component
          </Example>
        </Story.Segment>
        <Story.Segment title='pointing'>
          <Example>
            <div style={{ height: '100px' }}>
              <Dropdown pointing>
                <Text>pointing dropdown</Text>
                <Icon />
                <Menu visible>
                  <Item>item one</Item>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='floating'>
          <Example>
            <div style={{ height: '100px' }}>
              <Dropdown floating>
                <Text>floating dropdown</Text>
                <Icon />
                <Menu visible>
                  <Item>item one</Item>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='simple'>
          <Example>
            <Dropdown simple>
              <Text>simple dropdown</Text>
              <Icon />
              <Menu>
                <Item>item one</Item>
                <Item>item two</Item>
              </Menu>
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='loading'>
          <Example>
            <Dropdown loading>
              <Text>loading dropdown</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='error'>
          <Example>
            <Dropdown error>
              <Text>error dropdown</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Dropdown disabled>
              <Text>disabled dropdown</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='compact'>
          <Example>
            <Dropdown compact>
              <Text>compact dropdown</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <Dropdown fluid>
              <Text>fluid dropdown</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Dropdown.Text />', () => {
    return (
      <Story title='<Dropdown.Text />'>
        <Api definition={textDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Dropdown>
              <Text>text component</Text>
              <Icon />
            </Dropdown>
          </Example>
          <Example title='[className] gets passed'>
            <Dropdown>
              <Text className='default'>text component with className</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='default'>
          <Example>
            <Dropdown>
              <Text default>default text</Text>
              <Icon />
            </Dropdown>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Dropdown.Menu />', () => {
    return (
      <Story title='<Dropdown.Menu />'>
        <Api definition={menuDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '100px'}}>
              <Dropdown>
                <Text>dropdown</Text>
                <Icon />
                <Menu visible>
                  <Item>item one</Item>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='visible'>
          The {'<Menu />'} component will be hidden unless [visible] is true
          <Example>
            <div style={{ height: '100px'}}>
              <Dropdown>
                <Text>dropdown</Text>
                <Icon />
                <Menu visible>
                  <Item>item one</Item>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Dropdown.Menu.Header />', () => {
    return (
      <Story title='<Dropdown.Menu.Header />'>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '100px'}}>
              <Dropdown>
                <Text>dropdown</Text>
                <Icon />
                <Menu visible>
                  <Header>menu header</Header>
                  <Item>item one</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Dropdown.Menu.Item />', () => {
    return (
      <Story title='<Dropdown.Menu.Item />'>
        <Api definition={itemDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '100px'}}>
              <Dropdown>
                <Text>dropdown</Text>
                <Icon />
                <Menu visible>
                  <Item>item one</Item>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <div style={{ height: '100px'}}>
              <Dropdown>
                <Text>dropdown</Text>
                <Icon />
                <Menu visible>
                  <Item active>active item</Item>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <div style={{ height: '100px'}}>
              <Dropdown>
                <Text>dropdown</Text>
                <Icon />
                <Menu visible>
                  <Item disabled>disabled item</Item>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Dropdown.Menu.Divider />', () => {
    return (
      <Story title='<Dropdown.Menu.Divider />'>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '150px'}}>
              <Dropdown>
                <Text>dropdown</Text>
                <Icon />
                <Menu visible>
                  <Header>menu header</Header>
                  <Item>item one</Item>
                  <Divider />
                  <Header>another header</Header>
                  <Item>item two</Item>
                </Menu>
              </Dropdown>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
