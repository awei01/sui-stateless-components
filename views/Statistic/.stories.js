import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Statistic, { Statistics, statisticDefinition, statisticsDefinition, valueDefinition } from './index'
const { Value, Label } = Statistic
const _path = 'sui-stateless-components/views/Statistic'

storiesOf('Statistic', module)
  .add('<Statistic />', () => {
    return (
      <Story title='<Statistic />'>
        <Api definition={statisticDefinition}>
          import Statistic from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Statistic>
              <Value>1,000</Value>
              <Label>some statistic</Label>
            </Statistic>
          </Example>
          <Example title='[className] gets passed'>
            <Statistic className='red'>
              <Value>1,000</Value>
              <Label>some statistic</Label>
            </Statistic>
          </Example>
        </Story.Segment>
        <Story.Segment title='horizontal'>
          <Example>
            <Statistic horizontal>
              <Value>1,000</Value>
              <Label>some statistic</Label>
            </Statistic>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Statistic} propKey='color' definition={statisticDefinition} props={{
            children: (value) => {
              return [<Value key='value'>100</Value>,<Label key='label'>{value} statistic</Label>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <Statistic inverted>
                <Value>1,000</Value>
                <Label>some statistic</Label>
              </Statistic>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example title='left'>
            <Statistic floated='left'>
              <Value>1,000</Value>
              <Label>some statistic</Label>
            </Statistic>
            <p>{makeLipsum()}</p>
          </Example>
          <Example title='right'>
            <Statistic floated='right'>
              <Value>1,000</Value>
              <Label>some statistic</Label>
            </Statistic>
            <p>{makeLipsum()}</p>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Statistic} propKey='size' definition={statisticDefinition} props={{
            children: (value) => {
              return [<Value key='value'>100</Value>,<Label key='label'>{value} statistic</Label>]
            }
          }} />
        </Story.Segment>
      </Story>
    )
  })
  .add('<Statistic.Value />', () => {
    return (
      <Story title='<Statistic.Value />'>
        <Api definition={valueDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Statistic>
              <Value>1,000</Value>
              <Label>some statistic</Label>
            </Statistic>
          </Example>
          <Example title='[className] gets passed'>
            <Statistic>
              <Value className='text'>two<br/>thousand</Value>
              <Label>some statistic</Label>
            </Statistic>
          </Example>
        </Story.Segment>
        <Story.Segment title='text'>
          <Example>
            <Statistic>
              <Value text>two<br/>thousand</Value>
              <Label>some statistic</Label>
            </Statistic>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Statistic.Label />', () => {
    return (
      <Story title='<Statistic.Label />'>
        <Api definition={valueDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Statistic>
              <Value>1,000</Value>
              <Label>some statistic</Label>
            </Statistic>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Statistics />', () => {
    return (
      <Story title='<Statistics />'>
        <Api definition={statisticsDefinition}>
          {'import { Statistic } from \'' + _path + '\''}
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Statistics>
              <Statistic>
                <Value>1,000</Value>
                <Label>some statistic</Label>
              </Statistic>
              <Statistic>
                <Value>2,000</Value>
                <Label>some statistic</Label>
              </Statistic>
            </Statistics>
          </Example>
          <Example title='[className] gets passed'>
            <Statistics className='red'>
              <Statistic>
                <Value>1,000</Value>
                <Label>some statistic</Label>
              </Statistic>
              <Statistic>
                <Value>2,000</Value>
                <Label>some statistic</Label>
              </Statistic>
            </Statistics>
          </Example>
        </Story.Segment>
        <Story.Segment title='horizontal'>
          <Example>
            <Statistics horizontal>
              <Statistic>
                <Value>1,000</Value>
                <Label>some statistic</Label>
              </Statistic>
              <Statistic>
                <Value>2,000</Value>
                <Label>some statistic</Label>
              </Statistic>
            </Statistics>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Statistics} propKey='color' definition={statisticsDefinition} props={{
            children: (value) => {
              return [
                <Statistic key={1}>
                  <Value>100</Value>
                  <Label>{value} statistics</Label>
                </Statistic>,
                <Statistic key={2}>
                  <Value>200</Value>
                  <Label>{value} statistics</Label>
                </Statistic>
              ]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <Statistics inverted>
                <Statistic>
                  <Value>1,000</Value>
                  <Label>some statistic</Label>
                </Statistic>
                <Statistic>
                  <Value>2,000</Value>
                  <Label>some statistic</Label>
                </Statistic>
              </Statistics>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Statistics count='four'>
              <Statistic>
                <Value>1,000</Value>
                <Label>some statistic</Label>
              </Statistic>
              <Statistic>
                <Value>2,000</Value>
                <Label>some statistic</Label>
              </Statistic>
              <Statistic>
                <Value>3,000</Value>
                <Label>some statistic</Label>
              </Statistic>
              <Statistic>
                <Value>4,000</Value>
                <Label>some statistic</Label>
              </Statistic>
            </Statistics>
            <Statistics count='two'>
              <Statistic>
                <Value>1,000</Value>
                <Label>some statistic</Label>
              </Statistic>
              <Statistic>
                <Value>2,000</Value>
                <Label>some statistic</Label>
              </Statistic>
            </Statistics>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Statistics} propKey='size' definition={statisticsDefinition} props={{
            children: (value) => {
              return [
                <Statistic key={1}>
                  <Value>100</Value>
                  <Label>{value} statistics</Label>
                </Statistic>,
                <Statistic key={2}>
                  <Value>200</Value>
                  <Label>{value} statistics</Label>
                </Statistic>
              ]
            }
          }} />
        </Story.Segment>
      </Story>
    )
  })
