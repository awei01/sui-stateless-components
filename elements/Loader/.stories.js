import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Loader, { loaderDefinition } from './index'
import { Segment } from '../../elements/Segment'

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
            <p>
              {makeLipsum(100)}
              <Loader inline active />
              {makeLipsum(100)}
            </p>
            <Loader inline='centered' active />
            <p>
              {makeLipsum(100)}
            </p>
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
  /*
  .add('<Loader> text', () => {
    return (
      <Story examples='<Loader text>{ content }</Loader>'>
        {makeLipsum()}
        <Dimmer active>
          <Loader text>Some text in here</Loader>
        </Dimmer>
      </Story>
    )
  })
  .add('<Loader> indeterminate', () => {
    return (
      <Story examples='<Loader indeterminate/>'>
        {makeLipsum()}
        <Dimmer active>
          <Loader indeterminate/>
        </Dimmer>
      </Story>
    )
  })
  .add('<Loader> active', () => {
    return (
      <Story examples='<Loader active/>'>
        {makeLipsum()}
        <Loader active/>
      </Story>
    )
  })
  .add('<Loader> disabled', () => {
    return (
      <Story examples='<Loader disabled/>'>
        {makeLipsum()}
        <Dimmer active>
          <Loader disabled/>
        </Dimmer>
      </Story>
    )
  })
  .add('<Loader> inline', () => {
    return (
      <Story examples='<Loader inline=[ true | "centered" ]/>'>
        {makeLipsum(100)}
        <Loader inline active/>
        {makeLipsum(100)}
        <Divider/>
        {makeLipsum(100)}
        <Loader inline='centered' active/>
        {makeLipsum(100)}
      </Story>
    )
  })
  .add('<Loader> size', () => {
    const sizes = extractDefinitionValues(SIZES)
    return (
      <Story examples={'<Loader size=[ ' + sizes + ' ]/>'} container={{ format: 'vertical' }}>
      {
        SIZES.map((size, index) => {
          return (
            <Segment key={index}>
              {makeLipsum()}
              <Dimmer active>
                <Loader size={size}/>
              </Dimmer>
            </Segment>
          )
        })
      }
      </Story>
    )
  })
  .add('<Loader> passes .className and other props', () => {
    return (
      <Story examples={'<Loader className="huge" onClick={ funciton }/>'}>
        {makeLipsum()}
        <Dimmer active>
          <Loader className='huge' onClick={action('Loader was clicked')}/>
        </Dimmer>
      </Story>
    )
  })
*/
