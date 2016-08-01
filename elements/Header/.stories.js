import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makeColorStory, makeAlignStory, makePassesPropsStory } from '../../.storybook/utils';
import { Header, SIZES } from '../Header'

storiesOf('Header', module)
  .add('size', makeSizeStory(Header, { options: SIZES }))
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
  .add('format', () => {
    return (
      <Story examples='<Header format=[ "dividing" | "block" ]/>'>
        <Header format='dividing'>Dividing Header</Header>
        <Header format='block'>Block Header</Header>
      </Story>
    )
  })
  .add('aligned', makeAlignStory(Header))
  .add('color', makeColorStory(Header))
  .add('inverted', () => {
    return (
      <Story examples='<Header inverted>' style={{ backgroundColor: '#666', padding: '1em' }}>
        <Header inverted>Inverted Header</Header>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Header, { props: {
    className: 'red',
    children: 'Red Clickable Header',
    onClick: action('Header was clicked'),
  }}))
