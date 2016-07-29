import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeLipsum, makeColorStory, makePassesPropsStory } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Segment, Segments } from './index'

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
  .add('<Segment> type', () => {
    return (
      <SegmentStory examples='<Segment type=[ "raised" | "stacked" | "tall stacked" | "piled" | "vertical" ]>{ content }</Segment>'>
        <Segment type='raised'>
          <h4>raised segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment type='stacked'>
          <h4>stacked segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment type='tall stacked'>
          <h4>tall stacked segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment type='piled'>
          <h4>piled segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment type='vertical'>
          <h4>vertical segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment type='vertical'>
          <h4>vertical segment</h4>
          {makeLipsum(100)}
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
        <Segment type='vertical' basic>
          <h4>vertical basic segment</h4>
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
  .add('<Segment> clearing', () => {
    return (
      <SegmentStory examples='<Segment clearing>{ content }</Segment>'>
        <Segment clearing>
          <h4 style={{ float: 'right' }}>clearing segment</h4>
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> float', () => {
    return (
      <SegmentStory examples='<Segment float=[ "left" | "right" ]>{ content }</Segment>'>
        <Segment float='left'>
          <h4>left floated segment</h4>
        </Segment>
        <Segment float='right'>
          <h4>right floated segment</h4>
        </Segment>
      </SegmentStory>
    )
  })
  .add('<Segment> align', () => {
    return (
      <SegmentStory examples='<Segment align=[ "left" | "right" | "center" ]>{ content }</Segment>'>
        <Segment align='left'>
          <h4>left aligned segment</h4>
        </Segment>
        <Segment align='center'>
          <h4>center aligned segment</h4>
        </Segment>
        <Segment align='right'>
          <h4>right aligned segment</h4>
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
  .add('<Segments> type', () => {
    return (
      <SegmentStory examples='<Segments type=[ "raised" | "stacked" | "piled" ]><Segment/></Segments>'>
        <Segments type='raised'>
          <Segment>raised segment</Segment>
          <Segment>raised segment</Segment>
        </Segments>
        <Segments type='stacked'>
          <Segment>stacked segment</Segment>
          <Segment>stacked segment</Segment>
        </Segments>
        <Segments type='piled'>
          <Segment>piled stacked segment</Segment>
          <Segment>piled stacked segment</Segment>
        </Segments>
      </SegmentStory>
    )
  })
