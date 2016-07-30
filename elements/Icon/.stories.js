import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeStoryForKeyAndOptions, makeColorStory, makeSizeStory, makePassesPropsStory, extractOptionsValues } from '../../.storybook/utils';
import { Icon, Close, Icons, GLYPHS, SIZES, FLIPPEDS, ROTATEDS, FORMATS } from '../Icon'

const IconStory = ({ style, ...props }) => {
  return <Story {...props} style={{
    fontSize: '2em',
    border: '1px solid #ccc',
    padding: '1em',
    ...style }}/>
}

storiesOf('Icon', module)
  .add('<Icon> glyph', makeStoryForKeyAndOptions(Icon, { key: 'glyph', options: GLYPHS }, {
    props: { style: { margin: '.5em' }, children: null },
    Story: IconStory
  }))
  .add('<Close>', () => {
    return (
      <IconStory examples={[
          '<Close/>',
          '<Close format="circular"/>'
        ]}
        notes='One-off component because it is use so often.'>
        <Close/>
        <Close format='circular'/>
      </IconStory>
    )
  })
  .add('<Icon> disabled', () => {
    return (
      <IconStory examples='<Icon disabled>'
        notes='Disabled only handles appearance. Set [on*] props to null to actually disable it.'>
        <Icon disabled glyph='user' onClick={ action('Disabled Icon clicked')}/>
      </IconStory>
    )
  })
  .add('<Icon> loading', () => {
    return (
      <IconStory examples='<Icon loading>'>
        <Icon loading glyph='circle notched'/>
      </IconStory>
    )
  })
  .add('<Icon> fitted', () => {
    return (
      <IconStory examples='<Icon fitted>'>
        <p>
          Some text surrounding <Icon fitted glyph='user'/> a fitted icon
        </p>
        <p>
          Some text surrounding <Icon glyph='user'/> a non-fitted icon
        </p>
      </IconStory>
    )
  })
  .add('<Icon> size', makeSizeStory(Icon, {
    options: SIZES,
    props: { children: null, glyph: 'user' }
  }))
  .add('<Icon> link', () => {
    return (
      <IconStory examples='<Icon link>'>
        <p>
          A link icon <Icon link glyph='user'/>
        </p>
        <p>
          A non-link icon <Icon glyph='user'/>
        </p>
      </IconStory>
    )
  })
  .add('<Icon> flipped', () => {
    const flippeds = extractOptionsValues(FLIPPEDS)
    return (
      <IconStory examples={'<Icon flipped=[ ' + flippeds + '>'}>
        <p>
          A non-flipped <Icon glyph='cloud'/>
        </p>
        <p>
          A vertically flipped <Icon flipped='vertically' glyph='cloud'/>
        </p>
        <p>
          A horizontally flipped <Icon flipped='horizontally' glyph='cloud'/>
        </p>
      </IconStory>
    )
  })
  .add('<Icon> rotated', () => {
    const rotateds = extractOptionsValues(ROTATEDS)
    return (
      <IconStory examples={'<Icon rotated=[ ' + rotateds + '>'}>
        <p>
          A non-rotated <Icon glyph='cloud'/>
        </p>
        <p>
          A clockwise rotated <Icon rotated='clockwise' glyph='cloud'/>
        </p>
        <p>
          A counterclockwise rotated <Icon rotated='counterclockwise' glyph='cloud'/>
        </p>
      </IconStory>
    )
  })
  .add('<Icon> format', () => {
    const formats = extractOptionsValues(FORMATS)
    return (
      <IconStory examples={'<Icon format=[ ' + formats + ' ]/>'}>
        <p>
          circular <Icon format='circular' glyph='user'/>
        </p>
        <p>
          bordered <Icon format='bordered' glyph='user'/>
        </p>
      </IconStory>
    )
  })
  .add('<Icon> color', makeColorStory(Icon, {
    props: { children: null, glyph: 'user' },
    Story: IconStory
  }))
  .add('<Icon> inverted', () => {
    return (
      <IconStory examples='<Icon inverted>' style={{ backgroundColor: '#666', padding: '1em' }}>
        <Icon inverted glyph='user'/>
      </IconStory>
    )
  })
  .add('<Icon> corner', () => {
    return (
      <IconStory examples='<Icons><Icon corner/></Icons>'>
        <Icons>
          <Icon glyph='user'/>
          <Icon corner glyph='add'/>
        </Icons>
      </IconStory>
    )
  })
  .add('<Icon> passes .className and other props', makePassesPropsStory(Icon, {
    props: {
      className: 'red',
      glyph: 'user',
      onClick: action('Icon was clicked'),
      children: null,
    },
    Story: IconStory
  }))
  .add('<Icons>', () => {
    return (
      <IconStory examples='<Icons><Icon/></Icons>'>
        <Icons>
          <Icon size='big' glyph='sun'/>
          <Icon glyph='user'/>
        </Icons>
      </IconStory>
    )
  })
  .add('<Icons> size', makeSizeStory(Icons, {
    options: SIZES,
    props: {
      children: [(<Icon size='big' glyph='sun'/>), (<Icon glyph='user'/>)]
    }
  }))
  .add('<Icons> passes .className and other props', makePassesPropsStory(Icons, {
    props: {
      className: 'huge',
      onClick: action('Icons was clicked'),
      children: [(<Icon size='big' glyph='sun'/>), (<Icon glyph='user'/>)]
    }
  }))
