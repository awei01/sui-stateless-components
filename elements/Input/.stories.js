import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Input, { inputDefinition } from './index'
import Icon from '../../elements/Icon'
import Button from '../../elements/Button'
import Label from '../../elements/Label'

storiesOf('Input', module)
  .add('<Input />', () => {
    return (
      <Story title='<Input />'>
        <Api definition={inputDefinition}>
          import Input from 'sui-stateless-components/elements/Input'
        </Api>
        <Story.Segment title='(default)'>
          <p>This component renders a wrapper {'<div />'}. It does not render the actual {'<input />'}</p>
          <Example>
            <Input>
              <input placeholder='placeholder'/>
            </Input>
          </Example>
          <Example title='[className] gets passed'>
            <Input className='mini'>
              <input placeholder='placeholder'/>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='focus'>
          <Example>
            <Input focus>
              <input placeholder='focus'/>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='loading'>
          <Example>
            <Input loading className='icon'>
              <input placeholder='loading'/>
              <Icon glyph='search' />
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Input disabled>
              <input placeholder='disabled'/>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='error'>
          <Example>
            <Input error>
              <input placeholder='error'/>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='icon'>
          <Example>
            <Input icon>
              <input placeholder='icon'/>
              <Icon glyph='search' />
            </Input>
            {' '}
            <Input icon='left'>
              <input placeholder='left icon'/>
              <Icon glyph='user' />
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='labeled'>
          <Example>
            <Input labeled>
              <Label>L</Label>
              <input placeholder='labeled'/>
            </Input>
            {' '}
            <Input labeled='right'>
              <input placeholder='right labeled'/>
              <Label>R</Label>
            </Input>
            {' '}
            <Input labeled='right'>
              <Label>L</Label>
              <input placeholder='right & left labeled'/>
              <Label>R</Label>
            </Input>
          </Example>
          <Example title='corner labeled'>
            <Input labeled='left corner'>
              <input placeholder='left corner labeled'/>
              <Label corner='left'><Icon glyph='asterisk' /></Label>
            </Input>
            {' '}
            <Input labeled='corner'>
              <input placeholder='corner labeled'/>
              <Label corner><Icon glyph='asterisk' /></Label>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='action'>
          <Example>
            <Input action>
              <input placeholder='action'/>
              <Button>button</Button>
            </Input>
            {' '}
            <Input action='left'>
              <Button>button</Button>
              <input placeholder='left action'/>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='transparent'>
          <Example>
            <Input transparent>
              <input placeholder='transparent'/>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <Input inverted>
                <input placeholder='inverted'/>
              </Input>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <Input fluid>
              <input placeholder='fluid'/>
            </Input>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Input} propKey='size' definition={inputDefinition} props={{
            children: (value) => {
              return (<input placeholder={value} />)
            }
          }} />
        </Story.Segment>
      </Story>
    )
  })
