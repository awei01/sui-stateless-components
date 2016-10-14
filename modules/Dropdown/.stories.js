import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/comps'
import Dropdown, { dropdownDefinition, textDefinition } from './index'
const { Text, Icon, Menu, Item } = Dropdown

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
              <Menu>
                <Item>item one</Item>
                <Item>item two</Item>
              </Menu>
            </Dropdown>
          </Example>
          <Example title='[className] gets passed'>
            <Dropdown className='selection'>
              <Text>dropdown</Text>
              <Icon />
              <Menu>
                <Item>item one</Item>
                <Item>item two</Item>
              </Menu>
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='selection'>
          <Example>
            <Dropdown selection>
              <Text>selection dropdown</Text>
              <Icon />
              <Menu>
                <Item>item one</Item>
                <Item>item two</Item>
              </Menu>
            </Dropdown>
          </Example>
        </Story.Segment>
        <Story.Segment title='search'>
          <Example>
            <Dropdown search>
              <Text>search dropdown</Text>
              <Icon />
              <Menu>
                <Item>item one</Item>
                <Item>item two</Item>
              </Menu>
            </Dropdown>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
