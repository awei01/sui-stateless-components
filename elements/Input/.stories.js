import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makeColorStory, makePassesPropsStory, extractOptionsValues } from '../../.storybook/utils';
import { Input } from './index'
import { Icon } from '../../elements/Icon'
import { Label } from '../../elements/Label'
import { Button } from '../../elements/Button'
import { Divider } from '../../elements/Divider'

storiesOf('Input', module)
  .add('<Input> default', () => {
    return (
      <Story examples='<Input>{ content }</Input>'>
        <Input>
          <input placeholder='default input...'/>
        </Input>
      </Story>
    )
  })
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
