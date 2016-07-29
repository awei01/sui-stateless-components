import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makeColorStory, makePassesPropsStory } from '../../.storybook/utils';
import { Label } from './index'

storiesOf('Label', module)
  .add('link', () => {
    return (
      <Story examples={['<Label link>', '<Label href="some link">']}>
        <Label link>link</Label>
        <Label href='http://www.google.com' target='_blank'>open google</Label>
      </Story>
    )
  })
  .add('pointing', () => {
    return (
      <Story examples='<Label pointing=[ true | "left" | "right" | "below" ]/>'>
        <Label pointing>true</Label>
        <Label pointing='left'>left</Label>
        <Label pointing='right'>right</Label>
        <Label pointing='below'>below</Label>
      </Story>
    )
  })
  .add('color', makeColorStory(Label))
  .add('size', makeSizeStory(Label))
  .add('circular', () => {
    return (
      <Story examples='<Label circular/>'>
        <Label circular>circular</Label>
      </Story>
    )
  })
  .add('basic', () => {
    return (
      <Story examples='<Label basic/>'>
        <Label basic>basic</Label>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Label, { props: {
    className: 'red',
    onClick: action('Label was clicked'),
    children: 'I am red and clickable'
  }}))
