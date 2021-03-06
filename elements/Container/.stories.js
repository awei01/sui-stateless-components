import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Container, { containerDefinition } from '../Container'

const _path = 'sui-stateless-components/elements/Container'

storiesOf('Container', module)
  .add('<Container />', () => {
    return (
      <Story examples='<Container />'>
        <Api definition={containerDefinition}>
          import Container from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Container>{makeLipsum(200)}</Container>
          </Example>
          <Example title='[className] gets passed'>
            <Container className='right aligned'>{makeLipsum(200)}</Container>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example title='fluid'>
            <Container format='fluid'>{makeLipsum(200)}</Container>
          </Example>
          <Example title='text'>
            <Container format='text'>{makeLipsum(200)}</Container>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example title='left'>
            <Container aligned='left'>{makeLipsum()}</Container>
          </Example>
          <Example title='right'>
            <Container aligned='right'>{makeLipsum()}</Container>
          </Example>
          <Example title='center'>
            <Container aligned='center'>{makeLipsum()}</Container>
          </Example>
          <Example title='justified'>
            <Container aligned='justified'>{makeLipsum()}</Container>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
