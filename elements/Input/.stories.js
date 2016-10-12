import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Input, { inputOptions } from './index'
import Icon from '../../elements/Icon'
import Button from '../../elements/Button'
import { Label } from '../../elements/Label'

storiesOf('Input', module)
  .add('<Input />', () => {
    return (
      <Story title='<Input />'>
        <Api options={inputOptions}>
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
              <Label corner='right'><Icon glyph='asterisk' /></Label>
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
          <Example.Iterator component={Input} propKey='size' options={inputOptions} props={{
            children: (value) => {
              return (<input placeholder={value} />)
            }
          }} />
        </Story.Segment>
      </Story>
    )
  })
  /*
  .add('<Input> focus', () => {
    return (
      <Story examples='<Input focus>{ content }</Input>'>
        <Input focus>
          <input placeholder='focus input...'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> disabled', () => {
    return (
      <Story examples='<Input disabled>{ content }</Input>'
          notes='Setting [disabled] is purely cosmetic and does not actually disable the <input>. Use tab to focus on the input'>
        <Input disabled>
          <input placeholder='disabled input...'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> error', () => {
    return (
      <Story examples='<Input error>{ content }</Input>'>
        <Input error>
          <input placeholder='error input...'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> loading', () => {
    return (
      <Story examples='<Input loading>{ content }<Icon/></Input>'
          notes='To display correctly, [loading] property requires [icon] prop and <Icon/> child'>
        <Input loading icon>
          <input placeholder='loading input...'/>
          <Icon glyph='search'/>
        </Input>
        <Divider/>
        <Input loading icon='left'>
          <input placeholder='left loading input...'/>
          <Icon glyph='search'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> icon', () => {
    return (
      <Story examples='<Input icon=[ true | "left" ]>{ content }<Icon/></Input>'>
        <Input icon>
          <input placeholder='icon input...'/>
          <Icon glyph='search'/>
        </Input>
        <Divider/>
        <Input icon='left'>
          <input placeholder='left icon input...'/>
          <Icon glyph='search'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> labeled', () => {
    return (
      <Story examples='<Input labeled=[ true | "left" | "right" | "left corner" | "right corner" ]><Label/></Input>'>
        <Input labeled>
          <Label>some label</Label>
          <input placeholder='labeled input...'/>
        </Input>
        <Divider/>
        <Input labeled='right'>
          <input placeholder='right labeled input...'/>
          <Label>some label</Label>
        </Input>
        <Divider/>
        <Input labeled='left corner'>
          <input placeholder='left corner labeled input...'/>
          <Label corner='left'><Icon glyph='asterisk'/></Label>
        </Input>
        <Divider/>
        <Input labeled='right corner'>
          <input placeholder='right corner labeled input...'/>
          <Label corner='right'><Icon glyph='asterisk'/></Label>
        </Input>
      </Story>
    )
  })
  .add('<Input> action', () => {
    return (
      <Story examples='<Input action=[ true | "left" ]><Button/></Input>'>
        <Input action>
          <input placeholder='action input...'/>
          <Button>button</Button>
        </Input>
        <Divider/>
        <Input action='left'>
          <Button>button</Button>
          <input placeholder='left action input...'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> transparent', () => {
    return (
      <Story examples='<Input transparent>{ content }</Input>' style={{}}>
        <Input transparent>
          <input placeholder='transparent input...'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> inverted', () => {
    return (
      <Story examples='<Input inverted>{ content }</Input>' container={{ inverted: true }}>
        <Input inverted>
          <input placeholder='inverted input...'/>
        </Input>
        <Divider/>
        <Input inverted transparent>
          <input placeholder='inverted transparent...'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> fluid', () => {
    return (
      <Story examples='<Input fluid>{ content }</Input>'>
        <Input fluid>
          <input placeholder='fluid input...'/>
        </Input>
      </Story>
    )
  })
  .add('<Input> size', makeSizeStory(Input, { props: {
    children: (size) => {
      return (<input placeholder={ size + ' input' }/>)
    }
  }}))
  .add('<Input> passes .className and other props', makePassesPropsStory(Input, { props: {
    className: "fluid",
    onClick: action('Input was clicked'),
    children: (<input placeholder='fluid clickable input'/>)
  }}))
*/
