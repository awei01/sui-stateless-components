import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, makeLipsum } from '../../.storybook/utils';
import { Dimmer, Content } from './index'

storiesOf('Dimmer', module)
  .add('<Dimmer> default', () => {
    return (
      <Story examples='<Dimmer/>'
        notes='<Dimmer> is hidden by default'>
        { makeLipsum() }
        <Dimmer/>
      </Story>
    )
  })
  .add('<Dimmer> active', () => {
    return (
      <Story examples='<Dimmer active/>'>
        { makeLipsum() }
        <Dimmer active/>
      </Story>
    )
  })
  .add('<Dimmer> page', () => {
    return (
      <Story examples='<Dimmer page/>'>
        { makeLipsum() }
        <Dimmer active page/>
      </Story>
    )
  })
  .add('<Dimmer> inverted', () => {
    return (
      <Story examples='<Dimmer inverted/>'>
        { makeLipsum() }
        <Dimmer active inverted/>
      </Story>
    )
  })
  .add('<Dimmer> passes .className and other props', makePassesPropsStory(Dimmer, {
    props: {
      active: true,
      page: true,
      className: "inverted",
      onClick: action('Dimmer was clicked'),
      children: (<Content><h1 style={{ color: '#000' }}>I am inverted and clickable</h1></Content>)
    },
    Story: Story
  }))
  .add('<Content>', () => {
    return (
      <Story examples='<Dimmer><Content>{ content }</Content></Dimmer>'>
        { makeLipsum() }
        <Dimmer active>
          <Content>
            <h1>This is some header</h1>
            <p>Here is a paragraph</p>
          </Content>
        </Dimmer>
      </Story>
    )
  })
