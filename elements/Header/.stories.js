import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Header, { headerOptions } from './index'
import { Icon } from '../../elements/Icon'

storiesOf('Header', module)
  .add('<Header />', () => {
    return (
      <Story title='<Header />'>
        <p>This component always renders a {'<div>'} element.</p>
        <Api options={headerOptions}>
          import Header from 'sui-stateless-components/elements/Header'
        </Api>
        <Story.Segment>
          <Example>
            <Header>Some header</Header>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Header} propKey='size' options={headerOptions} />
        </Story.Segment>
        <Story.Segment title='icon'>
          <Example>
            <Header icon>
              <Icon glyph='user' />
              Header with icon
            </Header>
          </Example>
        </Story.Segment>
        <Story.Segment title='sub'>
          <Example>
            <Header sub>sub header</Header>
            <p>some other content</p>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Header disabled>disabled header</Header>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example>
            <Header format='dividing'>dividing header</Header>
          </Example>
          <Example>
            <Header format='block'>block header</Header>
          </Example>
        </Story.Segment>
        <Story.Segment title='attached'>
          <Example>
            <Header attached='top'>top attached header</Header>
            <Header attached>attached header</Header>
            <Header attached='bottom'>bottom attached header</Header>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <Header floated='right'>right floated header</Header>
            <Header floated='left'>left floated header</Header>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Header aligned='right'>right aligned header</Header>
            <Header aligned='left'>left aligned header</Header>
            <Header aligned='center'>center aligned header</Header>
            <Header aligned='justified'>justified header takes up all the space</Header>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Header} propKey='color' options={headerOptions} />
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <Header inverted>inverted header</Header>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Header.Sub />', () => {
    return (
      <Story title='<Header.Sub />'>
        <p>This component is to be used within a {'<Header />'}</p>
        <Story.Segment>
          <Example>
            <Header>
              Some header
              <Header.Sub>sub header here</Header.Sub>
            </Header>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Header.Content />', () => {
    return (
      <Story title='<Header.Content />'>
        <p>This component is to be used within a {'<Header />'} and allows for proper formatting of content when an {'<Icon /> or <Image />'} is used</p>
        <Story.Segment>
          <Example>
            <Header>
              <Icon glyph='user' />
              <Header.Content>header here</Header.Content>
            </Header>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
    /*
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
          <Image src='images/lindsay.png'/>Some header
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
*/
