import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeLipsum, makePassesPropsStory } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Segment } from './index'

const SegmentStory = (props) => {
  return <Story {...props} style={{}}/>
}

storiesOf('Segment', module)
  .add('default', () => {
    return (
      <SegmentStory examples='<Segment>{ content }</Segment>'>
        <Segment>
          {makeLipsum(200)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('type', () => {
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
  .add('basic', () => {
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
  .add('inverted', () => {
    return (
      <SegmentStory examples='<Segment inverted>{ content }</Segment>'>
        <Segment inverted>
          <h4>inverted segment</h4>
          {makeLipsum(100)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('attached', () => {
    return (
      <SegmentStory examples='<Segment attached=[ true | "top" | "bottom" ]>{ content }</Segment>'>
        <Segment attached='top'>
          <h4>top attached segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment attached>
          <h4>attached segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment attached>
          <h4>attached segment</h4>
          {makeLipsum(100)}
        </Segment>
        <Segment attached='bottom'>
          <h4>bottom attached segment</h4>
          {makeLipsum(100)}
        </Segment>
      </SegmentStory>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Segment, {
    props: {
      className: 'red',
      children: 'Red Clickable Segment',
      onClick: action('Segment was clicked'),
    },
    Story: SegmentStory
  }))
