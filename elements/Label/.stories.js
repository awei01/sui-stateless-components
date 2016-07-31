import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makeColorStory, makePassesPropsStory, extractOptionsValues, makeLipsum } from '../../.storybook/utils';
import { Label, ATTACHEDS, Labels } from './index'
import { Image } from '../../elements/Image'
import { Grid, Row, Column } from '../../collections/Grid'

storiesOf('Label', module)
  .add('<Label> default', () => {
    return (
      <Story examples='<Label>{ content }</Label>'>
        <Label>default label</Label>
      </Story>
    )
  })
  .add('<Label> image', () => {
    return (
      <Story examples='<Label image>{ content }</Label>'>
        <Label image>
          <Image src='/images/lindsay.png'/>
          image label
        </Label>
      </Story>
    )
  })
  .add('<Label> pointing', () => {
    return (
      <Story examples='<Label pointing=[ true | "left" | "right" | "below" ]/>'>
        <Label pointing>true</Label>
        <Label pointing='left'>left</Label>
        <Label pointing='right'>right</Label>
        <Label pointing='below'>below</Label>
      </Story>
    )
  })
  .add('<Label> corner', () => {
    return (
      <Story examples='<Label corner=[ "left" | "right" ]/>'>
        <div style={{ position: 'relative', display: 'inline-block', width: '200px', height: '200px', margin: '1em', backgroundColor: '#ccc' }}>
          <Label corner='left'>left</Label>
        </div>
        <div style={{ position: 'relative', display: 'inline-block', width: '200px', height: '200px', margin: '1em', backgroundColor: '#ccc' }}>
          <Label corner='right'>right</Label>
        </div>
      </Story>
    )
  })
  .add('<Label> tag', () => {
    return (
      <Story examples='<Label tag/>'>
        <Label tag>tag label</Label>
      </Story>
    )
  })
  .add('<Label> ribbon', () => {
    return (
      <Story examples='<Label ribbon=[ true | "right" ]/>'>
        <div style={{ display: 'inline-block', width: '200px', height: '200px', margin: '2em', padding: '1em', backgroundColor: '#ccc' }}>
          <Label ribbon>ribbon label</Label>
          <p>some content in here</p>
          <Label ribbon='right'>right ribbon label</Label>
        </div>
      </Story>
    )
  })
  .add('<Label> attached', () => {
    const attacheds = extractOptionsValues(ATTACHEDS, 0)
    return (
      <Story examples={'<Label attached=[ ' + attacheds + ' ]/>'}>
        <Grid columns='three' celled>
          <Row>
            <Column><Label attached='top left'>top left</Label><p>{makeLipsum(100)}</p></Column>
            <Column><Label attached='top'>top</Label><p>{makeLipsum(100)}</p></Column>
            <Column><Label attached='top right'>top right</Label><p>{makeLipsum(100)}</p></Column>
          </Row>
          <Row>
            <Column><Label attached='bottom left'>bottom left</Label><p>{makeLipsum(100)}</p></Column>
            <Column><Label attached='bottom'>bottom</Label><p>{makeLipsum(100)}</p></Column>
            <Column><Label attached='bottom right'>bottom right</Label><p>{makeLipsum(100)}</p></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Label> horizontal', () => {
    return (
      <Story examples={'<Label horizontal/>'}>
        <Label horizontal>horizontal label</Label>other content
      </Story>
    )
  })
  .add('<Label> floating', () => {
    return (
      <Story examples={'<Label floating/>'}>
        <div style={{ display: 'inline-block', position: 'relative', width: '200px', height: '200px', margin: '1em', backgroundColor: '#ccc' }}>
          <Label floating>floating label</Label>
        </div>
      </Story>
    )
  })
  .add('<Label> link', () => {
    return (
      <Story examples={['<Label link>', '<Label href="some link">']}>
        <Label link>link</Label>
        <Label href='http://www.google.com' target='_blank'>open google</Label>
      </Story>
    )
  })
  .add('<Label> circular', () => {
    return (
      <Story examples='<Label circular/>'>
        <Label circular>circular</Label>
      </Story>
    )
  })
  .add('<Label> basic', () => {
    return (
      <Story examples='<Label basic/>'>
        <Label basic>basic</Label>
      </Story>
    )
  })
  .add('<Label> color', makeColorStory(Label))
  .add('<Label> size', makeSizeStory(Label))
  .add('<Label> passes .className and other props', makePassesPropsStory(Label, { props: {
    className: 'red',
    onClick: action('Label was clicked'),
    children: 'I am red and clickable'
  }}))
  .add('<Labels> size', makeSizeStory(Labels, { props: {
    children: [<Label>label 1</Label>, <Label>label 2</Label>, <Label>label 3</Label>]
  }}))
  .add('<Labels> color', makeColorStory(Labels, { props: {
    children: [<Label>label 1</Label>, <Label>label 2</Label>, <Label>label 3</Label>]
  }}))
  .add('<Labels> tag', () => {
    return (
      <Story examples='<Labels tag/>'>
        <Labels tag>
          <Label>label 1</Label><Label>label 2</Label><Label>label 3</Label>
        </Labels>
      </Story>
    )
  })
  .add('<Labels> circular', () => {
    return (
      <Story examples='<Labels circular/>'>
        <Labels circular>
          <Label>1</Label><Label>2</Label><Label>3</Label>
        </Labels>
      </Story>
    )
  })
  .add('<Labels> passes .className and other props', makePassesPropsStory(Labels, { props: {
    className: 'red',
    onClick: action('Labels was clicked'),
    children: [<Label>label 1</Label>, <Label>label 2</Label>, <Label>label 3</Label>]
  }}))
