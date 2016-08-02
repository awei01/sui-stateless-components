import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeStoryForKeyAndOptions, makeColorStory, makeSizeStory, makePassesPropsStory, extractOptionsValues } from '../../.storybook/utils';
import { Icon, Close, Icons, GLYPHS, SIZES, FLIPPEDS, ROTATEDS, FORMATS } from '../Icon'

const _container = {
  style: {
    fontSize: '2em',
  }
}

storiesOf('Icon', module)
  .add('<Icon> glyph', makeStoryForKeyAndOptions(Icon, { key: 'glyph', options: GLYPHS }, {
    props: { style: { margin: '.5em' }, children: null },
    container: _container
  }))
  .add('<Close>', () => {
    return (
      <Story examples={[
          '<Close/>',
          '<Close format="circular"/>'
        ]}
        notes='One-off component because it is use so often.'
        container={_container}>
        <Close/>
        <Close format='circular'/>
      </Story>
    )
  })
  .add('<Icon> disabled', () => {
    return (
      <Story examples='<Icon disabled>'
        notes='Disabled only handles appearance. Set [on*] props to null to actually disable it.'
        container={_container}>
        <Icon disabled glyph='user' onClick={ action('Disabled Icon clicked')}/>
      </Story>
    )
  })
  .add('<Icon> loading', () => {
    return (
      <Story examples='<Icon loading>' container={_container}>
        <Icon loading glyph='circle notched'/>
      </Story>
    )
  })
  .add('<Icon> fitted', () => {
    return (
      <Story examples='<Icon fitted>' container={_container}>
        <p>
          Some text surrounding <Icon fitted glyph='user'/> a fitted icon
        </p>
        <p>
          Some text surrounding <Icon glyph='user'/> a non-fitted icon
        </p>
      </Story>
    )
  })
  .add('<Icon> size', makeSizeStory(Icon, {
    options: SIZES,
    props: { children: null, glyph: 'user' }
  }))
  .add('<Icon> link', () => {
    return (
      <Story examples='<Icon link>' container={_container}>
        <p>
          A link icon <Icon link glyph='user'/>
        </p>
        <p>
          A non-link icon <Icon glyph='user'/>
        </p>
      </Story>
    )
  })
  .add('<Icon> flipped', () => {
    const flippeds = extractOptionsValues(FLIPPEDS)
    return (
      <Story examples={'<Icon flipped=[ ' + flippeds + '>'} container={_container}>
        <p>
          A non-flipped <Icon glyph='cloud'/>
        </p>
        <p>
          A vertically flipped <Icon flipped='vertically' glyph='cloud'/>
        </p>
        <p>
          A horizontally flipped <Icon flipped='horizontally' glyph='cloud'/>
        </p>
      </Story>
    )
  })
  .add('<Icon> rotated', () => {
    const rotateds = extractOptionsValues(ROTATEDS)
    return (
      <Story examples={'<Icon rotated=[ ' + rotateds + '>'} container={_container}>
        <p>
          A non-rotated <Icon glyph='cloud'/>
        </p>
        <p>
          A clockwise rotated <Icon rotated='clockwise' glyph='cloud'/>
        </p>
        <p>
          A counterclockwise rotated <Icon rotated='counterclockwise' glyph='cloud'/>
        </p>
      </Story>
    )
  })
  .add('<Icon> format', () => {
    const formats = extractOptionsValues(FORMATS)
    return (
      <Story examples={'<Icon format=[ ' + formats + ' ]/>'} container={_container}>
        <p>
          circular <Icon format='circular' glyph='user'/>
        </p>
        <p>
          bordered <Icon format='bordered' glyph='user'/>
        </p>
      </Story>
    )
  })
  .add('<Icon> color', makeColorStory(Icon, {
    props: { children: null, glyph: 'user' },
    container: _container
  }))
  .add('<Icon> inverted', () => {
    return (
      <Story examples='<Icon inverted>' container={{..._container, inverted: true}}>
        <Icon inverted glyph='user'/>
      </Story>
    )
  })
  .add('<Icon> corner', () => {
    return (
      <Story examples='<Icons><Icon corner/></Icons>' container={_container}>
        <Icons>
          <Icon glyph='user'/>
          <Icon corner glyph='add'/>
        </Icons>
      </Story>
    )
  })
  .add('<Icon> passes .className and other props', makePassesPropsStory(Icon, {
    props: {
      className: 'red',
      glyph: 'user',
      onClick: action('Icon was clicked'),
      children: null,
    },
    container: _container
  }))
  .add('<Icons>', () => {
    return (
      <Story examples='<Icons><Icon/></Icons>' container={_container}>
        <Icons>
          <Icon size='big' glyph='sun'/>
          <Icon glyph='user'/>
        </Icons>
      </Story>
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
