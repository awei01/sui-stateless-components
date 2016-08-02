import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, makeAlignStory, makeLipsum } from '../../.storybook/utils';
import { Container } from '../Container'

const _container = { format: 'vertical' }
storiesOf('Container', module)
  .add('default', () => {
    return (
      <Story examples='<Container/>' container={_container}>
        <Container>{ makeLipsum(200) }</Container>
      </Story>
    )
  })
  .add('format', () => {
    return (
      <Story examples='<Container format=[ "text" | "fluid" ]/>' container={_container} showToggleNote>
        <Container format='text'>{ makeLipsum(200) }</Container>
        <Container format='fluid'>{ makeLipsum(200) }</Container>
      </Story>
    )
  })
  .add('aligned', makeAlignStory(Container, {
    props: {
      children: makeLipsum(300),
      style: { marginBottom: '2em' }
    },
    container: _container
  }))
  .add('passes .className and other props', makePassesPropsStory(Container, {
    props: {
      className: 'right aligned',
      children: makeLipsum(200),
      onClick: action('Container was clicked')
    },
    container: _container
  }))
