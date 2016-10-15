import React, { Component } from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Dimmer, { dimmerDefinition, contentDefinition } from './index'
import Segment from '../../elements/Segment'
import Button from '../../elements/Button'
const { Content } = Dimmer

class PageDimmer extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const { isActive } = this.state
    const handleClick = this._handleClick.bind(this)
    if (isActive) {
      return (<Dimmer page active onClick={handleClick} style={{ cursor: 'pointer' }}/>)
    }
    return (<Button onClick={handleClick}>show dimmer</Button>)
  }
  _handleClick (event) {
    this.setState({ isActive: !this.state.isActive })
  }
}

storiesOf('Dimmer', module)
  .add('<Dimmer />', () => {
    return (
      <Story title='<Dimmer />'>
        <Api definition={dimmerDefinition}>
          import Dimmer from 'sui-stateless-components/modules/Dimmer'
        </Api>
        <Story.Segment title='(default)'>
          <p>The {'<Dimmer />'} is hidden by default</p>
          <Example>
            <Segment>
              {makeLipsum(300)}
              <Dimmer />
            </Segment>
          </Example>
          <Example title='[className] gets passed'>
            <Segment>
              {makeLipsum(300)}
              <Dimmer className='active' />
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <Segment>
              {makeLipsum(300)}
              <Dimmer active />
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='page'>
          <Example code='<Dimmer page />'>
            <PageDimmer />
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Segment>
              {makeLipsum(300)}
              <Dimmer active disabled />
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <Segment>
              {makeLipsum(300)}
              <Dimmer active inverted />
            </Segment>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Dimmer.Content />', () => {
    return (
      <Story title='<Dimmer.Content />'>
        <Api definition={contentDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Segment>
              {makeLipsum(300)}
              <Dimmer active>
                <Content>This is some content</Content>
              </Dimmer>
            </Segment>
          </Example>
          <Example title='[className] gets passed'>
            <Segment>
              {makeLipsum(300)}
              <Dimmer active>
                <Content className='top aligned'>This is some content</Content>
              </Dimmer>
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Segment>
              {makeLipsum(300)}
              <Dimmer active>
                <Content aligned='top'>top aligned</Content>
              </Dimmer>
            </Segment>
            <Segment>
              {makeLipsum(300)}
              <Dimmer active>
                <Content aligned='bottom'>bottom aligned</Content>
              </Dimmer>
            </Segment>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
