import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Segment, { segmentDefinition, Segments, segmentsDefinition } from './index'

const _path ='sui-stateless-components/elements/Segment'

storiesOf('Segment', module)
  .add('<Segment />', () => {
    return (
      <Story title='<Segment />'>
        <Api definition={segmentDefinition}>
          import Segment from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Segment>{makeLipsum(100)}</Segment>
          </Example>
          <Example title='[className] gets passed'>
            <Segment className='red'>{makeLipsum(100)}</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example.Iterator component={Segment} propKey='format' definition={segmentDefinition} />
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Segment disabled>{makeLipsum(100)}</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='loading'>
          <Example>
            <Segment loading>{makeLipsum(200)}</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <Segment inverted>{makeLipsum(100)}</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='attached'>
          <Example>
            <Segment attached='top'>{makeLipsum(100)}</Segment>
            <Segment attached>{makeLipsum(100)}</Segment>
            <Segment attached='bottom'>{makeLipsum(100)}</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='padded'>
          <Example>
            <Segment padded>{makeLipsum(100)}</Segment>
            <Segment padded='very'>{makeLipsum(100)}</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='compact'>
          <Example>
            <Segment compact>{makeLipsum(100)}</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Segment} propKey='color' definition={segmentDefinition} />
        </Story.Segment>
        <Story.Segment title='emphasis'>
          <Example.Iterator component={Segment} propKey='emphasis' definition={segmentDefinition} />
        </Story.Segment>
        <Story.Segment title='circular'>
          <Example>
            <Segment circular>circular</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='clearing'>
          <Example>
            <Segment clearing><div style={{ float: 'right'}}>floated content</div></Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <Segment floated='right'>right floated</Segment>
            <Segment floated='left'>left floated</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Segment aligned='left'>left aligned</Segment>
            <Segment aligned='center'>center aligned</Segment>
            <Segment aligned='right'>right aligned</Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='basic'>
          <Example>
            <Segment basic>{makeLipsum(100)}</Segment>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Segments />', () => {
    return (
      <Story title='<Segments />'>
        <Api definition={segmentsDefinition}>
          {'import { Segments } from \'' + _path + '\''}
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Segments>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
            </Segments>
          </Example>
          <Example title='[className] gets passed'>
            <Segments className='horizontal'>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
            </Segments>
          </Example>
        </Story.Segment>
        <Story.Segment title='horizontal'>
          <Example>
            <Segments horizontal>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
            </Segments>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example.Iterator component={Segments} propKey='format' definition={segmentsDefinition} props={{
            children: (value) => {
              return [<Segment key='one'>{value}</Segment>, <Segment key='two'>{makeLipsum(50)}</Segment>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='compact'>
          <Example>
            <Segments compact>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
              <Segment>{makeLipsum(50)}</Segment>
            </Segments>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
