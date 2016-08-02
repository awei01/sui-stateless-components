import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeLipsum, makePassesPropsStory } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Divider } from './index'
import { Grid, Column } from '../../collections/Grid'

storiesOf('Divider', module)
  .add('default', () => {
    return (
      <Story examples='<Divider/>'>
        <p>{makeLipsum(200)}</p>
        <Divider/>
        <p>{makeLipsum(200)}</p>
        <Divider/>
        <p>{makeLipsum(200)}</p>
      </Story>
    )
  })
  .add('orientation', () => {
    return (
      <Story examples='<Divider orientation=[ "horizontal" | "vertical" ]>{content}</Divider>'
        notes='The element containing a vertical <Divider> must have { position: "relative" }'>
        <Grid relaxed='very' columns='three' style={{ position: 'relative' }}>
          <Column>{makeLipsum(200)}</Column>
          <Divider orientation='vertical'>or</Divider>
          <Column>{makeLipsum(200)}</Column>
          <Divider orientation='vertical'>and</Divider>
          <Column>{makeLipsum(200)}</Column>
        </Grid>
        <Divider orientation='horizontal'>horizontal divider</Divider>
        <p>{makeLipsum(200)}</p>
        <Divider orientation='horizontal'>horizontal divider</Divider>
        <p>{makeLipsum(200)}</p>
      </Story>
    )
  })
  .add('inverted', () => {
    return (
      <Story examples='<Divider inverted/>'>
        <div style={{ backgroundColor: '#666', color: '#ccc' }}>
          <p>{makeLipsum(200)}</p>
          <Divider inverted orientation='horizontal'>inverted horizontal divider</Divider>
          <p>{makeLipsum(200)}</p>
          <Divider inverted orientation='horizontal'>inverted horizontal divider</Divider>
          <p>{makeLipsum(200)}</p>
        </div>
      </Story>
    )
  })
  .add('margin', () => {
    return (
      <Story examples='<Divider margin=[ "fitted" | "section" ]/>'>
        <div>{makeLipsum(200)}</div>
        <Divider margin='fitted'/>
        <div>{makeLipsum(200)}</div>
        <Divider margin='section'/>
        <div>{makeLipsum(200)}</div>
      </Story>
    )
  })
  .add('hidden', () => {
    return (
      <Story examples='<Divider hidden/>'>
        <div>{makeLipsum(200)}</div>
        <Divider hidden/>
        <div>{makeLipsum(200)}</div>
        <Divider hidden/>
        <div>{makeLipsum(200)}</div>
      </Story>
    )
  })
  .add('clearing', () => {
    return (
      <Story examples='<Divider clearing/>'>
        <div style={{ float: 'right' }}>{makeLipsum(200)}</div>
        <Divider clearing/>
        <div style={{ float: 'left' }}>{makeLipsum(200)}</div>
        <Divider clearing/>
        <div>{makeLipsum(200)}</div>
      </Story>
    )
  })
  .add('passes .className and other props', () => {
    return (
      <Story examples='<Divider className="section" onClick={ function }/>'>
        <div>The divider below is a section divider and clickable</div>
        <Divider className='section' onClick={action('Divider was clicked')}/>
        <div>{makeLipsum(200)}</div>
      </Story>
    )
  })
