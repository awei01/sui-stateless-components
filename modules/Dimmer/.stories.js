import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, makeLipsum } from '../../.storybook/utils';
import { Dimmer } from './index'

const DimmerStory = (props) => {
  return <Story {...props} style={{}}/>
}
const Content = (props) => {
  return <div {...props} style={{ position: 'relative' }}/>
}

storiesOf('Dimmer', module)
  .add('default', () => {
    return (
      <DimmerStory examples='<Dimmer/>'
        notes='<Dimmer> is hidden by default'>
        <Content>
          { makeLipsum() }
          <Dimmer/>
        </Content>
      </DimmerStory>
    )
  })
  .add('active', () => {
    return (
      <DimmerStory examples='<Dimmer active/>'>
        <Content>
          { makeLipsum() }
          <Dimmer active/>
        </Content>
      </DimmerStory>
    )
  })
  .add('content', () => {
    return (
      <DimmerStory examples='<Dimmer>[some content]</Dimmer>'
        notes='If you provide content, the component will automatically generate the HTML to center your content'>
        <Content>
          { makeLipsum() }
          <Dimmer active><h1>This is some header</h1><p>Here is a paragraph</p></Dimmer>
        </Content>
      </DimmerStory>
    )
  })
  .add('page', () => {
    return (
      <DimmerStory examples='<Dimmer page/>'>
        <Content>
          { makeLipsum() }
          <Dimmer active page/>
        </Content>
      </DimmerStory>
    )
  })
  .add('inverted', () => {
    return (
      <DimmerStory examples='<Dimmer inverted/>'>
        <Content>
          { makeLipsum() }
          <Dimmer active inverted/>
        </Content>
      </DimmerStory>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Dimmer, {
    props: {
      active: true,
      className: "inverted",
      onClick: action('Dimmer was clicked'),
      children: (<h1 style={{ color: '#000' }}>I am inverted and clickable</h1>)
    },
    Story: DimmerStory
  }))
