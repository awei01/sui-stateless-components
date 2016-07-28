import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, makeAlignStory, LIPSUM } from '../../.storybook/utils';
import { Container } from '../Container'

const _styles = {
  border: ''
}

storiesOf('Container', module)
  .add('default', () => {
    return (
      <Story examples='<Container/>' style={{ border: null }}>
        <Container>{ LIPSUM }</Container>
      </Story>
    )
  })
  .add('fit', () => {
    return (
      <Story examples='<Container fit=[ "text" | "fluid" ]/>' showToggleNote
        style={{ border: null }}>
        <Container fit='text'>{ LIPSUM }</Container>
        <Container fit='fluid'>{ LIPSUM }</Container>
      </Story>
    )
  })
  .add('align', makeAlignStory(Container, { children: LIPSUM, style: { marginBottom: '2em' } }))
  .add('passes .className and other props', makePassesPropsStory(Container, {
    className: 'text',
    children: LIPSUM,
    onClick: action('Container was clicked'),
  }))
