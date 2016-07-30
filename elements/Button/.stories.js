import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makeColorStory, makePassesPropsStory } from '../../.storybook/utils';
import { Button } from './index'
import { Label } from '../Label'
import { Icon } from '../Icon'

storiesOf('Button', module)
  .add('default', () => {
    return (
      <Story examples='<Button>{ content }</Button>'>
        <Button>some button</Button>
      </Story>
    )
  })
  .add('emphasis', () => {
    return (
      <Story examples='<Button emphasis=[ "primary" | "secondary" ]>'>
        <Button emphasis="primary">primary</Button>
        <Button emphasis="secondary">secondary</Button>
      </Story>
    )
  })
  .add('hint', () => {
    return (
      <Story examples='<Button hint=[ "positive" | "negative" ]>'>
        <Button hint="positive">positive</Button>
        <Button hint="negative">negative</Button>
      </Story>
    )
  })
  .add('active', () => {
    return (
      <Story examples='<Button active>'>
        <Button active>active</Button>
      </Story>
    )
  })
  .add('icon', () => {
    return (
      <Story examples='<Button icon><Icon/></Button>'>
        <Button icon><Icon format="user"/></Button>
      </Story>
    )
  })
  .add('circular', () => {
    return (
      <Story examples='<Button circular/>'>
        <Button circular>circular</Button>
      </Story>
    )
  })
  .add('disabled', () => {
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
  .add('loading', () => {
    return (
      <Story examples='<Button loading>'>
        <Button loading>loading</Button>
      </Story>
    )
  })
  .add('color', makeColorStory(Button))
  .add('size', makeSizeStory(Button))
  .add('labeled', () => {
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
  .add('labeled icon', () => {
    return (
      <Story examples={[
        '<Button labeled icon><Icon/>Value</Button>',
        '<Button labeled="right">Value<Icon/></Button>'
        ]}>
        <Button labeled icon>
          <Icon format="user"/>left icon
        </Button>
        <Button labeled="right" icon>
          <Icon format="user"/>right icon
        </Button>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Button, { props: {
    className: "red",
    onClick: action('Button was clicked'),
    children: 'I am red and clickable'
  }}))
