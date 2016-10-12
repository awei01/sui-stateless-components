import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeLipsum, makeColorStory, makePassesPropsStory, extractDefinitionValues } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Segment, SEGMENT_FORMATS, Segments, SEGMENTS_FORMATS } from './index'

const _container = { format: 'vertical' }

storiesOf('Segment', module)
  .add('<Segment> default', () => {
    return (
      <Story examples='<Segment>{ content }</Segment>' container={_container}>
        <Segment>
          {makeLipsum(200)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> format', () => {
    const formats = extractDefinitionValues(SEGMENT_FORMATS, 0)
    return (
      <Story examples={'<Segment format=[ ' + formats + ' ]>{ content }</Segment>'} container={_container}>
        <Segment format='raised'>
          <h4>raised segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment format='stacked'>
          <h4>stacked segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment format='tall stacked'>
          <h4>tall stacked segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment format='piled'>
          <h4>piled segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment format='vertical'>
          <h4>vertical segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment format='vertical'>
          <h4>vertical segment</h4>
          {makeLipsum(100)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> disabled', () => {
    return (
      <Story examples='<Segment disabled>{ content }</Segment>' container={_container}>
        <Segment disabled>
          <h4>disabled segment</h4>
          {makeLipsum(100)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> loading', () => {
    return (
      <Story examples='<Segment loading>{ content }</Segment>' container={_container}>
        <Segment loading>
          <h4>loading segment</h4>
          {makeLipsum(100)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> inverted', () => {
    return (
      <Story examples='<Segment inverted>{ content }</Segment>' container={_container}>
        <Segment inverted>
          <h4>inverted segment</h4>
          {makeLipsum(100)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> attached', () => {
    return (
      <Story examples='<Segment attached=[ true | "top" | "bottom" ]>{ content }</Segment>' container={_container}>
        <Segment attached='top'>
          <h4>top attached segment</h4>
        </Segment>
        <Segment attached>
          <h4>attached segment</h4>
        </Segment>
        <Segment attached>
          <h4>attached segment</h4>
        </Segment>
        <Segment attached='bottom'>
          <h4>bottom attached segment</h4>
        </Segment>
      </Story>
    )
  })
  .add('<Segment> padded', () => {
    return (
      <Story examples='<Segment padded=[ true | "very" ]>{ content }</Segment>' container={_container}>
        <Segment>
          <h4>segment</h4>
          {makeLipsum(200)}
        </Segment>
        <Segment padded>
          <h4>padded segment</h4>
          {makeLipsum(200)}
        </Segment>
        <Segment padded='very'>
          <h4>very padded segment</h4>
          {makeLipsum(200)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> compact', () => {
    return (
      <Story examples='<Segment compact>{ content }</Segment>' container={_container}>
        <Segment compact>
          <h4>compact segment</h4>
        </Segment>
      </Story>
    )
  })
  .add('<Segment> color', makeColorStory(Segment, { container: _container }))
  .add('<Segment> emphasis', () => {
    return (
      <Story examples='<Segment emphasis=[ "secondary" | "tertiary" ]>{ content }</Segment>' container={_container}>
        <Segment>
          <h4>segment</h4>
          {makeLipsum(200)}
        </Segment>
        <Segment emphasis='secondary'>
          <h4>secondary segment</h4>
          {makeLipsum(200)}
        </Segment>
        <Segment emphasis='tertiary'>
          <h4>tertiary segment</h4>
          {makeLipsum(200)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> circular', () => {
    return (
      <Story examples='<Segment circular>{ content }</Segment>' container={_container}>
        <Segment circular>
          Circular
        </Segment>
      </Story>
    )
  })
  .add('<Segment> clearing', () => {
    return (
      <Story examples='<Segment clearing>{ content }</Segment>' container={_container}>
        <Segment clearing>
          <h4 style={{ float: 'right' }}>clearing segment</h4>
        </Segment>
      </Story>
    )
  })
  .add('<Segment> floated', () => {
    return (
      <Story examples='<Segment floated=[ "left" | "right" ]>{ content }</Segment>' container={_container}>
        <Segment floated='left'>
          <h4>left floated segment</h4>
        </Segment>
        <Segment floated='right'>
          <h4>right floated segment</h4>
        </Segment>
      </Story>
    )
  })
  .add('<Segment> aligned', () => {
    return (
      <Story examples='<Segment aligned=[ "left" | "right" | "center" ]>{ content }</Segment>' container={_container}>
        <Segment aligned='left'>
          <h4>left aligned segment</h4>
        </Segment>
        <Segment aligned='center'>
          <h4>center aligned segment</h4>
        </Segment>
        <Segment aligned='right'>
          <h4>right aligned segment</h4>
        </Segment>
      </Story>
    )
  })
  .add('<Segment> basic', () => {
    return (
      <Story examples='<Segment basic>{ content }</Segment>' container={_container}>
        <Segment basic>
          <h4>basic segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment format='vertical' basic>
          <h4>vertical basic segment</h4>
          {makeLipsum(100)}
        </Segment>
      </Story>
    )
  })
  .add('<Segment> passes .className and other props', makePassesPropsStory(Segment, {
    props: {
      className: 'red',
      children: 'Red Clickable Segment',
      onClick: action('Segment was clicked'),
    },
    container: _container
  }))
  .add('<Segments> default', () => {
    return (
      <Story examples='<Segments><Segment/></Segments>' container={_container}>
        <Segments>
          <Segment>
            {makeLipsum(100)}
          </Segment>
          <Segment>
            {makeLipsum(100)}
          </Segment>
          <Segment>
            {makeLipsum(100)}
          </Segment>
        </Segments>
      </Story>
    )
  })
  .add('<Segments> horizontal', () => {
    return (
      <Story examples='<Segments horizontal><Segment/></Segments>' container={_container}>
        <Segments horizontal>
          <Segment>
            {makeLipsum(100)}
          </Segment>
          <Segment>
            {makeLipsum(100)}
          </Segment>
          <Segment>
            {makeLipsum(100)}
          </Segment>
        </Segments>
      </Story>
    )
  })
  .add('<Segments> format', () => {
    const formats = extractDefinitionValues(SEGMENTS_FORMATS)
    return (
      <Story examples={'<Segments format=[ ' + formats + ' ]><Segment/></Segments>'} container={_container}>
        <Segments format='raised'>
          <Segment>raised segment</Segment>
          <Segment>raised segment</Segment>
        </Segments>
        <Segments format='stacked'>
          <Segment>stacked segment</Segment>
          <Segment>stacked segment</Segment>
        </Segments>
        <Segments format='piled'>
          <Segment>piled stacked segment</Segment>
          <Segment>piled stacked segment</Segment>
        </Segments>
      </Story>
    )
  })
