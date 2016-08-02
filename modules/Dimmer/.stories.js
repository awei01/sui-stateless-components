import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, makeLipsum } from '../../.storybook/utils';
import { Dimmer, Content } from './index'

const DimmerStory = (props) => {
  return <Story {...props} style={{}}/>
}
const Container = (props) => {
  return <div {...props} style={{ position: 'relative' }}/>
}

storiesOf('Dimmer', module)
  .add('<Dimmer> default', () => {
    return (
      <DimmerStory examples='<Dimmer/>'
        notes='<Dimmer> is hidden by default'>
        <Container>
          { makeLipsum() }
          <Dimmer/>
        </Container>
      </DimmerStory>
    )
  })
  .add('<Dimmer> active', () => {
    return (
      <DimmerStory examples='<Dimmer active/>'>
        <Container>
          { makeLipsum() }
          <Dimmer active/>
        </Container>
      </DimmerStory>
    )
  })
  .add('<Dimmer> page', () => {
    return (
      <DimmerStory examples='<Dimmer page/>'>
        <Container>
          { makeLipsum() }
          <Dimmer active page/>
        </Container>
      </DimmerStory>
    )
  })
  .add('<Dimmer> inverted', () => {
    return (
      <DimmerStory examples='<Dimmer inverted/>'>
        <Container>
          { makeLipsum() }
          <Dimmer active inverted/>
        </Container>
      </DimmerStory>
    )
  })
  .add('<Dimmer> passes .className and other props', makePassesPropsStory(Dimmer, {
    props: {
      active: true,
      className: "inverted",
      onClick: action('Dimmer was clicked'),
      children: (<Content><h1 style={{ color: '#000' }}>I am inverted and clickable</h1></Content>)
    },
    Story: DimmerStory
  }))
  .add('<Content>', () => {
    return (
      <DimmerStory examples='<Dimmer><Content>{ content }</Content></Dimmer>'>
        <Container>
          { makeLipsum() }
          <Dimmer active>
            <Content>
              <h1>This is some header</h1>
              <p>Here is a paragraph</p>
            </Content>
          </Dimmer>
        </Container>
      </DimmerStory>
    )
  })
