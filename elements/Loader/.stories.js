import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Loader, { loaderDefinition } from './index'
import Segment from '../../elements/Segment'

storiesOf('Loader', module)
  .add('<Loader />', () => {
    return (
      <Story title='<Loader />'>
        <Api definition={loaderDefinition}>
          import Loader from 'sui-stateless-components/elements/Loader'
        </Api>
        <Story.Segment title='(default)'>
          <p>This component is hidden by default</p>
          <Example>
            <Segment style={{ height: '100px' }}>
              <Loader />
            </Segment>
          </Example>
          <Example title='[className] gets passed'>
            <Segment style={{ height: '100px' }}>
              <Loader className='active'/>
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <Segment style={{ height: '100px' }}>
              <Loader active />
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='text'>
          <Example>
            <Segment style={{ height: '100px' }}>
              <Loader text active>
                text loader
              </Loader>
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='inline'>
          <Example>
            <div>
              {makeLipsum(100)}
              <Loader inline active />
              {makeLipsum(100)}
            </div>
            <Loader inline='centered' active />
            <div>
              {makeLipsum(100)}
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example>
            <Segment style={{ height: '150px' }}>
              <Loader active size='massive' />
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <Segment inverted style={{ height: '100px' }}>
              <Loader active inverted />
            </Segment>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
