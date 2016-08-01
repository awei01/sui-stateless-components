import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makeColorStory, makePassesPropsStory, extractOptionsValues } from '../../.storybook/utils';
import { Button, SOCIALS, BUTTON_ATTACHEDS, Buttons, BUTTONS_ATTACHEDS, COUNTS } from './index'
import { Label } from '../../elements/Label'
import { Icon } from '../../elements/Icon'
import { Segment } from '../../elements/Segment'

storiesOf('Button', module)
  .add('<Button> default', () => {
    return (
      <Story examples='<Button>{ content }</Button>'>
        <Button>some button</Button>
      </Story>
    )
  })
  .add('<Button> emphasis', () => {
    return (
      <Story examples='<Button emphasis=[ "primary" | "secondary" ]>'>
        <Button emphasis="primary">primary</Button>
        <Button emphasis="secondary">secondary</Button>
      </Story>
    )
  })
  .add('<Button> animated', () => {
    const content = [<div key='visible' className='visible content'>visible content</div>, <div key='hidden' className='hidden content'>hidden content</div>]
    return (
      <Story examples='<Button animated=[ true | "vertical" | "fade" ]>'>
        <Button animated>{content}</Button>
        <Button animated="vertical">{content}</Button>
        <Button animated="fade">{content}</Button>
      </Story>
    )
  })
  .add('<Button> labeled', () => {
    return (
      <Story examples={[
        '<Button labeled><Button/><Label/></Button>',
        '<Button labeled="left"><Label/><Button/></Button>',
        '<Button labeled onClick={ function }><Button/><Label/></Button>',
        '<Button labeled="left" disabled onClick={ function }><Label/><Button/></Button>'
        ]}>
        <Button labeled>
          <Button>label</Button><Label>button</Label>
        </Button>
        <Button labeled="left">
          <Label>left label</Label><Button>button</Button>
        </Button>
        <Button labeled className="red" onClick={ action('Labeled Button clicked') }>
          <Button>clickable</Button><Label link>label</Label>
        </Button>
        <Button labeled="left" disabled onClick={ action('Disabled Labeled Button clicked') }>
          <Label link>left label</Label><Button>disabled</Button>
        </Button>
      </Story>
    )
  })
  .add('<Button> icon', () => {
    return (
      <Story examples='<Button icon><Icon/></Button>'>
        <Button icon><Icon glyph="user"/></Button>
      </Story>
    )
  })
  .add('<Button> labeled icon', () => {
    return (
      <Story examples={[
        '<Button labeled icon><Icon/>Value</Button>',
        '<Button labeled="right" icon>Value<Icon/></Button>'
        ]}>
        <Button labeled icon>
          <Icon glyph="user"/>left icon
        </Button>
        <Button labeled="right" icon>
          <Icon glyph="user"/>right icon
        </Button>
      </Story>
    )
  })
  .add('<Button> basic', () => {
    return (
      <Story examples='<Button basic>'>
        <Button basic>basic button</Button>
        <Button basic emphasis="secondary">secondary basic button</Button>
      </Story>
    )
  })
  .add('<Button> inverted', () => {
    return (
      <Story examples='<Button inverted>'>
        <div style={{ backgroundColor: '#666', padding: '1em' }}>
          <Button inverted>inverted button</Button>
        </div>
      </Story>
    )
  })
  .add('<Button> active', () => {
    return (
      <Story examples='<Button active>'>
        <Button active>active</Button>
      </Story>
    )
  })
  .add('<Button> disabled', () => {
    return (
      <Story examples='<Button disabled>' notes='This actually disables the button by setting disabled=true'>
        <p>
          <Button disabled onClick={action('Button was clicked')}>can't click me</Button>
        </p>
        <form onSubmit={action('Form was submtited')}>
          <input type="text" placeholder="try hitting return in here"/>
          <br/>
          <Button type="submit" disabled>Submit</Button>
        </form>
      </Story>
    )
  })
  .add('<Button> loading', () => {
    return (
      <Story examples='<Button loading>'>
        <Button loading>loading</Button>
      </Story>
    )
  })
  .add('<Button> social', () => {
    const socials = extractOptionsValues(SOCIALS, 0)
    return (
      <Story examples={'<Button social=[ ' + socials + ' ]'}>
        { SOCIALS.map((item, index) => {
          return (<Button key={index} social={item}><Icon glyph={item}/>{item}</Button>)
        })}
      </Story>
    )
  })
  .add('<Button> size', makeSizeStory(Button))
  .add('<Button> floated', () => {
    return (
      <Story examples='<Button floated=[ "left" | "right" ]>'>
        <Button floated="left">left floated</Button>
        <Button floated="right">right floated</Button>
      </Story>
    )
  })
  .add('<Button> color', makeColorStory(Button))
  .add('<Button> compact', () => {
    return (
      <Story examples='<Button compact>'>
        <Button>non-compact button</Button>
        <Button compact>compact button</Button>
      </Story>
    )
  })
  .add('<Button> toggle', () => {
    return (
      <Story examples='<Button toggle=[ true | "active" ]>'>
        <Button toggle>toggle not active</Button>
        <Button toggle='active'>toggle active</Button>
      </Story>
    )
  })
  .add('<Button> hint', () => {
    return (
      <Story examples='<Button hint=[ "positive" | "negative" ]>'>
        <Button hint="positive">positive</Button>
        <Button hint="negative">negative</Button>
      </Story>
    )
  })
  .add('<Button> fluid', () => {
    return (
      <Story examples='<Button fluid/>'>
        <Button fluid>fluid</Button>
      </Story>
    )
  })
  .add('<Button> circular', () => {
    return (
      <Story examples='<Button circular/>'>
        <Button circular>circular</Button>
      </Story>
    )
  })
  .add('<Button> attached', () => {
    const attacheds = extractOptionsValues(BUTTON_ATTACHEDS)
    return (
      <Story examples={'<Button attached=[ ' + attacheds + ' ]/>'}>
        <Button fluid attached='top'>top attached</Button>
        <Segment attached>some segement content</Segment>
        <Button fluid attached='bottom'>bottom attached</Button>
        <br/>
        <Button attached='left'>left attached</Button><Button attached='right'>right attached</Button>
      </Story>
    )
  })
  .add('<Button> passes .className and other props', makePassesPropsStory(Button, { props: {
    className: "red",
    onClick: action('Button was clicked'),
    children: 'I am red and clickable'
  }}))
  .add('<Buttons> default', () => {
    return (
      <Story examples='<Buttons><Button/></Buttons>'>
        <Buttons>
          <Button>button 1</Button><Button>button 2</Button><Button>button 3</Button>
        </Buttons>
      </Story>
    )
  })
  .add('<Buttons> icon', () => {
    return (
      <Story examples='<Buttons icon=[ true | "labeled" ]><Button/></Buttons>'>
        <Buttons icon>
          <Button><Icon glyph='user'/></Button><Button><Icon glyph='user'/></Button><Button><Icon glyph='user'/></Button>
        </Buttons>
        <br/><br/>
        <Buttons vertical icon='labeled'>
          <Button><Icon glyph='user'/>button 1</Button><Button><Icon glyph='user'/>button 2</Button><Button><Icon glyph='user'/>button 3</Button>
        </Buttons>
      </Story>
    )
  })
  .add('<Buttons> attached', () => {
    const attacheds = extractOptionsValues(BUTTONS_ATTACHEDS)
    return (
      <Story examples={'<Buttons attached=[ ' + attacheds + ']><Button/></Buttons>'}>
        <Buttons attached='top'>
          <Button>button 1</Button><Button>button 2</Button>
        </Buttons>
        <Segment attached>some attached segment</Segment>
        <Buttons attached='bottom'>
          <Button>button 1</Button><Button>button 2</Button>
        </Buttons>
      </Story>
    )
  })
  .add('<Buttons> vertical', () => {
    return (
      <Story examples={'<Buttons vertical><Button/></Buttons>'}>
        <Buttons vertical>
          <Button>button 1</Button><Button>button 2</Button><Button>button 3</Button>
        </Buttons>
      </Story>
    )
  })
  .add('<Buttons> buttons', () => {
    const buttons = extractOptionsValues(COUNTS)
    return (
      <Story examples={'<Buttons buttons=[ ' + buttons + ' ]><Button/></Buttons>'}>
        <Buttons buttons='two'>
          <Button>button 1</Button><Button>button 2</Button>
        </Buttons>
        <br/><br/>
        <Buttons buttons='four'>
          <Button>button 1</Button><Button>button 2</Button>
          <Button>button 3</Button><Button>button 4</Button>
        </Buttons>
      </Story>
    )
  })
  .add('<Buttons> color', makeColorStory(Buttons, { props: {
    children: [<Button>button 1</Button>, <Button>button 2</Button>]
  }}))
  .add('<Buttons> basic', () => {
    return (
      <Story examples='<Buttons basic><Button/></Buttons>'>
        <Buttons basic>
          <Button>button 1</Button><Button>button 2</Button>
        </Buttons>
      </Story>
    )
  })
  .add('<Buttons> size', makeSizeStory(Buttons, { props: {
    children: [<Button>button 1</Button>, <Button>button 2</Button>]
  }}))
  .add('<Buttons> passes .className and other props', makePassesPropsStory(Buttons, { props: {
    className: "red",
    onClick: action('Buttons was clicked'),
    children: [<Button>button 1</Button>, <Button>button 2</Button>]
  }}))
