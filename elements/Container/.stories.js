import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Container, { containerOptions } from '../Container'

const _path = 'sui-stateless-components/elements/Container'

storiesOf('Container', module)
  .add('<Container />', () => {
    return (
      <Story examples='<Container />'>
        <Api options={containerOptions}>
          import Container from '{_path}'
        </Api>
        <Story.Segment>
          <Example>
            <Container>{makeLipsum(200)}</Container>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example>
            <Container format='fluid'>{makeLipsum(200)}</Container>
          </Example>
          <Example>
            <Container format='text'>{makeLipsum(200)}</Container>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Container aligned='left'>{makeLipsum()}</Container>
          </Example>
          <Example>
            <Container aligned='right'>{makeLipsum()}</Container>
          </Example>
          <Example>
            <Container aligned='center'>{makeLipsum()}</Container>
          </Example>
          <Example>
            <Container aligned='justified'>{makeLipsum()}</Container>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
