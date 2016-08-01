import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, makeAlignStory, makeLipsum } from '../../.storybook/utils';
import { Container } from '../Container'

const ContainerStory = (props) => {
  return <Story {...props} style={{ border: null }}/>
}

storiesOf('Container', module)
  .add('default', () => {
    return (
      <ContainerStory examples='<Container/>'>
        <Container>{ makeLipsum(200) }</Container>
      </ContainerStory>
    )
  })
  .add('format', () => {
    return (
      <ContainerStory examples='<Container format=[ "text" | "fluid" ]/>' showToggleNote>
        <Container format='text'>{ makeLipsum(200) }</Container>
        <Container format='fluid'>{ makeLipsum(200) }</Container>
      </ContainerStory>
    )
  })
  .add('aligned', makeAlignStory(Container, {
    props: {
      children: makeLipsum(300),
      style: { marginBottom: '2em' }
    },
    Story: ContainerStory
  }))
  .add('passes .className and other props', makePassesPropsStory(Container, {
    props: {
      className: 'text',
      children: makeLipsum(200),
      onClick: action('Container was clicked')
    },
    Story: ContainerStory
  }))
