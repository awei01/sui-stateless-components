import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, LIPSUM } from '../../.storybook/utils';
import { Dimmer } from './index'

const _storyStyle = {
  padding: 0
}
const _containerStyle = {
  position: 'relative'
}
storiesOf('Dimmer', module)
  .add('default', () => {
    return (
      <Story examples='<Dimmer/>'
        notes='Dimmer prop [active] is [true] by default'
        style={_storyStyle}>
        <div style={_containerStyle}>
          { LIPSUM }
          <Dimmer/>
        </div>
      </Story>
    )
  })
  .add('active={ false }', () => {
    return (
      <Story examples='<Dimmer active={false}/>' style={_storyStyle}>
        <div style={_containerStyle}>
          { LIPSUM }
          <Dimmer active={false}/>
        </div>
      </Story>
    )
  })
  .add('content', () => {
    return (
      <Story examples='<Dimmer>[some content]</Dimmer>'
        notes='If you provide content, the component will automatically generate the HTML to center your content'
        style={_storyStyle}>
        <div style={_containerStyle}>
          { LIPSUM }
          <Dimmer><h1>This is some header</h1><p>Here is a paragraph</p></Dimmer>
        </div>
      </Story>
    )
  })
  .add('page (active)', () => {
    return (
      <Story examples='<Dimmer page/>'>
        <div style={_containerStyle}>
          { LIPSUM }
          <Dimmer page onClick={ linkTo('Dimmer', 'page (inactive)') }/>
        </div>
      </Story>
    )
  })
  .add('page (inactive)', () => {
    return (
      <Story examples='<Dimmer page active={false}/>'>
        <div style={_containerStyle}>
          <button onClick={ linkTo('Dimmer', 'page (active)') }>Activate page dimmer</button>
          <br/>
          { LIPSUM }
          <Dimmer page active={ false }/>
        </div>
      </Story>
    )
  })
  .add('inverted', () => {
    return (
      <Story examples='<Dimmer inverted/>'>
        <div style={_containerStyle}>
          { LIPSUM }
          <Dimmer inverted/>
        </div>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Dimmer, {
    className: "inverted",
    onClick: action('Dimmer was clicked'),
    children: (<h1 style={{ color: '#000' }}>I am inverted and clickable</h1>)
  }))
