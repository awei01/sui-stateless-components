import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeLipsum, makeColorStory, makePassesPropsStory, extractOptionsValues } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Segment, SEGMENT_FORMATS, Segments, SEGMENTS_FORMATS } from './index'

const SegmentStory = (props) => {
  return <Story {...props} style={{}}/>
}

storiesOf('Segment', module)
  .add('<Segment> default', () => {
    return (
      <SegmentStory examples='<Segment>{ content }</Segment>'>
        <Segment>
          {makeLipsum(200)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> format', () => {
    const formats = extractOptionsValues(SEGMENT_FORMATS, 0)
    return (
      <SegmentStory examples={'<Segment format=[ ' + formats + ' ]>{ content }</Segment>'}>
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
      </SegmentStory>
    )
  })
  .add('<Segment> disabled', () => {
    return (
      <SegmentStory examples='<Segment disabled>{ content }</Segment>'>
        <Segment disabled>
          <h4>disabled segment</h4>
          {makeLipsum(100)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> loading', () => {
    return (
      <SegmentStory examples='<Segment loading>{ content }</Segment>'>
        <Segment loading>
          <h4>loading segment</h4>
          {makeLipsum(100)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> inverted', () => {
    return (
      <SegmentStory examples='<Segment inverted>{ content }</Segment>'>
        <Segment inverted>
          <h4>inverted segment</h4>
          {makeLipsum(100)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> attached', () => {
    return (
      <SegmentStory examples='<Segment attached=[ true | "top" | "bottom" ]>{ content }</Segment>'>
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
      </SegmentStory>
    )
  })
  .add('<Segment> padded', () => {
    return (
      <SegmentStory examples='<Segment padded=[ true | "very" ]>{ content }</Segment>'>
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
      </SegmentStory>
    )
  })
  .add('<Segment> compact', () => {
    return (
      <SegmentStory examples='<Segment compact>{ content }</Segment>'>
        <Segment compact>
          <h4>compact segment</h4>
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> color', makeColorStory(Segment, { Story: SegmentStory }))
  .add('<Segment> emphasis', () => {
    return (
      <SegmentStory examples='<Segment emphasis=[ "secondary" | "tertiary" ]>{ content }</Segment>'>
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
      </SegmentStory>
    )
  })
  .add('<Segment> circular', () => {
    return (
      <SegmentStory examples='<Segment circular>{ content }</Segment>'>
        <Segment circular>
          Circular
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> clearing', () => {
    return (
      <SegmentStory examples='<Segment clearing>{ content }</Segment>'>
        <Segment clearing>
          <h4 style={{ float: 'right' }}>clearing segment</h4>
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> floated', () => {
    return (
      <SegmentStory examples='<Segment floated=[ "left" | "right" ]>{ content }</Segment>'>
        <Segment floated='left'>
          <h4>left floated segment</h4>
        </Segment>
        <Segment floated='right'>
          <h4>right floated segment</h4>
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> aligned', () => {
    return (
      <SegmentStory examples='<Segment aligned=[ "left" | "right" | "center" ]>{ content }</Segment>'>
        <Segment aligned='left'>
          <h4>left aligned segment</h4>
        </Segment>
        <Segment aligned='center'>
          <h4>center aligned segment</h4>
        </Segment>
        <Segment aligned='right'>
          <h4>right aligned segment</h4>
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> basic', () => {
    return (
      <SegmentStory examples='<Segment basic>{ content }</Segment>'>
        <Segment basic>
          <h4>basic segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment format='vertical' basic>
          <h4>vertical basic segment</h4>
          {makeLipsum(100)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> passes .className and other props', makePassesPropsStory(Segment, {
    props: {
      className: 'red',
      children: 'Red Clickable Segment',
      onClick: action('Segment was clicked'),
    },
    Story: SegmentStory
  }))
  .add('<Segments> default', () => {
    return (
      <SegmentStory examples='<Segments><Segment/></Segments>'>
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
      </SegmentStory>
    )
  })
  .add('<Segments> horizontal', () => {
    return (
      <SegmentStory examples='<Segments horizontal><Segment/></Segments>'>
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
      </SegmentStory>
    )
  })
  .add('<Segments> format', () => {
    const formats = extractOptionsValues(SEGMENTS_FORMATS)
    return (
      <SegmentStory examples={'<Segments format=[ ' + formats + ' ]><Segment/></Segments>'}>
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
      </SegmentStory>
    )
  })
