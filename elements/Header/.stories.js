import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makeColorStory, makeAlignStory, makePassesPropsStory } from '../../.storybook/utils';
import { Header, SIZES, Content, Subheader } from '../Header'
import { Icon } from '../../elements/Icon'
import { Image } from '../../elements/Image'
import { Segment } from '../../elements/Segment'

storiesOf('Header', module)
  .add('<Header> default', () => {
    return (
      <Story examples='<Header>{ content }</Header'
        notes='This component always renders a <div> element. If you are using <h#> tags, consider importing makeClasses() instead.'>
        <Header>Some header</Header>
      </Story>
    )
  })
  .add('<Header> size', makeSizeStory(Header, { options: SIZES }))
  .add('<Header> icon', () => {
    return (
      <Story examples='<Header icon>{ content }</Header'>
        <Header icon>
          <Icon glyph='user'/>
          <Content>
            Some other stuff here
          </Content>
        </Header>
      </Story>
    )
  })
  .add('<Header> sub', () => {
    return (
      <Story examples='<Header sub/>'>
        <Header sub>Sub Header</Header>
      </Story>
    )
  })
  .add('<Header> image content', () => {
    return (
      <Story examples='<Header><Image/></Header>'>
        <Header>
          <Image src='/images/lindsay.png'/>Some header
        </Header>
      </Story>
    )
  })
  .add('<Header> icon content', () => {
    return (
      <Story examples='<Header><Image/></Header>'>
        <Header>
          <Icon glyph='user'/>Some header
        </Header>
      </Story>
    )
  })
  .add('<Header> disabled', () => {
    return (
      <Story examples='<Header disabled/>'>
        <Header disabled>Disabled Header</Header>
      </Story>
    )
  })
  .add('<Header> format', () => {
    return (
      <Story examples='<Header format=[ "dividing" | "block" ]/>'>
        <Header format='dividing'>Dividing Header</Header>
        <Header format='block'>Block Header</Header>
      </Story>
    )
  })
  .add('<Header> attached', () => {
    return (
      <Story examples='<Header attached=[ "top" | "bottom" ]/>'>
        <Header attached='top'>Top Attached</Header>
        <Segment attached>Some segment content</Segment>
        <Header attached='bottom'>Bottom Attached</Header>
      </Story>
    )
  })
  .add('<Header> floated', () => {
    return (
      <Story examples='<Header floated=[ "left" | "right" ]/>'>
        <Header floated='left'>Left Floated</Header>
        <Header floated='right'>Right Floated</Header>
      </Story>
    )
  })
  .add('<Header> aligned', makeAlignStory(Header))
  .add('<Header> color', makeColorStory(Header))
  .add('<Header> inverted', () => {
    return (
      <Story examples='<Header inverted>' container={{ inverted: true }}>
        <Header inverted>Inverted Header</Header>
      </Story>
    )
  })
  .add('<Header> passes .className and other props', makePassesPropsStory(Header, { props: {
    className: 'red',
    children: 'Red Clickable Header',
    onClick: action('Header was clicked'),
  }}))
  .add('<Content>', () => {
    return (
      <Story examples='<Header><Content/></Header>'>
        <Header>
          <Icon glyph='user'/>
          <Content>
            Header
            <Subheader>Sub Header</Subheader>
          </Content>
        </Header>
      </Story>
    )
  })
  .add('<Subheader>', () => {
    return (
      <Story examples='<Header><Subheader/></Header>'>
        <Header>
          Header
          <Subheader>Sub Header</Subheader>
        </Header>
      </Story>
    )
  })
