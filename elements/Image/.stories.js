import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeSizeStory, makePassesPropsStory, makeLipsum } from '../../.storybook/utils';
import { Image, Images } from './index'
import { Divider } from '../../elements/Divider'
import { Segment } from '../../elements/Segment'

storiesOf('Image', module)
  .add('<Image> default', () => {
    return (
      <Story examples='<Image src={ url } [width={ width } height={ height }]/>'
          notes='<Image> will automatically generate an <img> tag. To generate an <a> look at [href]'>
        <Image src='images/lindsay.png'/>
        <Image src='images/lindsay.png' width='100'/>
        <Image src='images/lindsay.png' width='200' height='100'/>
      </Story>
    )
  })
  .add('<Image> href', () => {
    return (
      <Story examples='<Image href={ url }/>'
        notes={[
          '<Image> [href] prop generates an <a> tag wrapping an <img> tag',
          'The [height] property will be overridden by SUI CSS declaration [height: auto]'
        ]}>
        <Image href='http://www.google.com' target='_blank' src='images/lindsay.png'/>
        <Image href='http://www.google.com' target='_blank' src='images/lindsay.png' width='100'/>
        <Image href='http://www.google.com' target='_blank' src='images/lindsay.png' width='200' height='100'/>
      </Story>
    )
  })
  .add('<Image> hidden', () => {
    return (
      <Story examples='<Image hidden/>'>
        This image is hidden
        <Image hidden src='images/lindsay.png'/>
      </Story>
    )
  })
  .add('<Image> disabled', () => {
    return (
      <Story examples='<Image disabled/>'>
        <Image disabled src='images/lindsay.png'/>
      </Story>
    )
  })
  .add('<Image> avatar', () => {
    return (
      <Story examples='<Image avatar/>'>
        <Image avatar src='images/lindsay.png'/>
        avatar image
      </Story>
    )
  })
  .add('<Image> bordered', () => {
    return (
      <Story examples='<Image bordered/>'>
        <Image bordered src='images/white-image.png'/>
      </Story>
    )
  })
  .add('<Image> fluid', () => {
    return (
      <Story examples='<Image fluid/>'>
        <div style={{ width: '200px' }}>
          <h4>200px container</h4>
          <Image fluid src='images/lindsay.png'/>
        </div>
      </Story>
    )
  })
  .add('<Image> format', () => {
    return (
      <Story examples='<Image format=[ "rounded" | "circular" ]/>'>
        <Image format='rounded' src='images/lindsay.png'/>
        <Image format='circular' src='images/lindsay.png'/>
      </Story>
    )
  })
  .add('<Image> valigned', () => {
    return (
      <Story examples='<Image valigned=[ "top" | "middle" | "bottom" ]/>'>
        <Divider/>
        <Image src='images/lindsay.png'/>
        non-aligned
        <Divider/>
        <Image valigned='top' src='images/lindsay.png'/>
        top aligned
        <Divider/>
        <Image valigned='middle' src='images/lindsay.png'/>
        middle aligned
        <Divider/>
        <Image valigned='bottom' src='images/lindsay.png'/>
        bottom aligned
        <Divider/>
      </Story>
    )
  })
  .add('<Image> centered', () => {
    return (
      <Story examples='<Image centered/>'>
        {makeLipsum(200)}
        <Image centered src='images/lindsay.png'/>
        {makeLipsum(200)}
      </Story>
    )
  })
  .add('<Image> spaced', () => {
    return (
      <Story examples='<Image spaced=[ true | "left" | "right" ]/>'>
        <Image spaced='right' size='mini' src='images/lindsay.png'/>
        {makeLipsum(200)}
        <Image spaced size='mini' src='images/lindsay.png'/>
        {makeLipsum(200)}
        <Image spaced='left' size='mini' src='images/lindsay.png'/>
      </Story>
    )
  })
  .add('<Image> floated', () => {
    return (
      <Story examples='<Image floated=[ "left" | "right" ]/>'>
        <p>
          <Image floated='left' src='images/lindsay.png'/>
          {makeLipsum()}
        </p>
        <p>
          <Image floated='right' src='images/lindsay.png'/>
          {makeLipsum()}
        </p>
      </Story>
    )
  })
  .add('<Image> size', makeSizeStory(Image, { props: {
    src: '/images/lindsay.png',
    children: null
  }}))
  .add('<Image> passes .className and other props', makePassesPropsStory(Image, { props: {
    src: '/images/white-image.png',
    className: 'bordered small',
    onClick: action('Image was clicked')
  }}))
  .add('<Image> with [href] passes .className and other props to <a>', makePassesPropsStory(Image, { props: {
    href: 'http://www.google.com',
    target: '_blank',
    src: '/images/white-image.png',
    className: 'bordered small'
  }}))
  .add('<Images> size', makeSizeStory(Images, { props: {
    children: [<Image src='images/lindsay.png'/>, <Image src='images/lindsay.png'/>, <Image src='images/lindsay.png'/>]
  }}))
  .add('<Images> passes .className and other props', makePassesPropsStory(Images, { props: {
    className: 'mini small',
    children: [<Image src='images/lindsay.png'/>, <Image src='images/lindsay.png'/>, <Image src='images/lindsay.png'/>],
    onClick: action('Images was clicked')
  }}))
