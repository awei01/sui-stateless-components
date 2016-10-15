import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Divider, { dividerDefinition } from './index'
import Grid from '../../collections/Grid'
const { Column } = Grid

storiesOf('Divider', module)
  .add('<Divider />', () => {
    return (
      <Story title='<Divider />'>
        <Api definition={dividerDefinition}>
          import Divider from 'sui-stateless-components/elements/Divider'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <p>{makeLipsum(200)}</p>
            <Divider />
            <p>{makeLipsum(200)}</p>
          </Example>
          <Example title='[className] gets passed'>
            <Divider className='hidden'/>
          </Example>
        </Story.Segment>
        <Story.Segment title='orientation'>
          <p>The element containing a vertical {'<Divider />'} must have [position="relative"]</p>
          <Example title='vertical'>
            <Grid count='two' style={{ position: 'relative' }}>
              <Column>{makeLipsum(200)}</Column>
              <Divider orientation='vertical'>Or</Divider>
              <Column>{makeLipsum(200)}</Column>
            </Grid>
          </Example>
          <Example title='horizontal'>
            <p>{makeLipsum(200)}</p>
            <Divider orientation='horizontal'>Or</Divider>
            <p>{makeLipsum(200)}</p>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em', color: '#fff' }}>
              <p>{makeLipsum(200)}</p>
              <Divider inverted />
              <p>{makeLipsum(200)}</p>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='margin'>
          <Example title='fitted'>
            <p>{makeLipsum(200)}</p>
            <Divider margin='fitted' />
            <p>{makeLipsum(200)}</p>
          </Example>
          <Example title='section'>
            <p>{makeLipsum(200)}</p>
            <Divider margin='section' />
            <p>{makeLipsum(200)}</p>
          </Example>
        </Story.Segment>
        <Story.Segment title='hidden'>
          <Example>
            <p>{makeLipsum(200)}</p>
            <Divider hidden />
            <p>{makeLipsum(200)}</p>
          </Example>
        </Story.Segment>
        <Story.Segment title='clearing'>
          <Example>
            <div style={{ float: 'right' }}>right floated</div>
            <Divider clearing />
            <p>{makeLipsum(200)}</p>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
