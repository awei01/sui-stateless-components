import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeStoryUsingOptions, makeColorStory, makeAlignStory, makePassesPropsStory } from '../../.storybook/utils';
import { Header, SIZES } from '../Header'

storiesOf('Header', module)
  .add('size', makeStoryUsingOptions(Header, { key: 'size', options: SIZES }))
  .add('sub', () => {
    return (
      <Story examples='<Header sub/>'>
        <Header sub>Sub Header</Header>
      </Story>
    )
  })
  .add('disabled', () => {
    return (
      <Story examples='<Header disabled/>'>
        <Header disabled>Disabled Header</Header>
      </Story>
    )
  })
  .add('dividing', () => {
    return (
      <Story examples='<Header dividing/>'>
        <Header dividing>Dividing Header</Header>
      </Story>
    )
  })
  .add('block', () => {
    return (
      <Story examples='<Header block/>'>
        <Header block>Block Header</Header>
      </Story>
    )
  })
  .add('align', makeAlignStory(Header))
  .add('color', makeColorStory(Header))
  .add('inverted', () => {
    return (
      <Story examples='<Header inverted>' style={{ backgroundColor: '#666', padding: '1em' }}>
        <Header inverted>Inverted Header</Header>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Header, {
    className: 'red',
    children: 'Red Clickable Header',
    onClick: action('Header was clicked'),
  }))
