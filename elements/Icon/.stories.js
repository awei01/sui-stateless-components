import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeStoryForKeyAndOptions, makeColorStory, makeSizeStory, makePassesPropsStory } from '../../.storybook/utils';
import { Icon, CloseIcon, ICONS, SIZES } from '../Icon'

const IconStory = ({ style, ...props }) => {
  return <Story {...props} style={{
    fontSize: '2em',
    border: '1px solid #ccc',
    padding: '1em',
    ...style }}/>
}

storiesOf('Icon', module)
  .add('type', makeStoryForKeyAndOptions(Icon, { key: 'type', options: ICONS }, {
    props: { style: { margin: '.5em' }, children: null },
    Story: IconStory
  }))
  .add('<CloseIcon>', () => {
    return (
      <IconStory examples={[
          '<CloseIcon/>',
          '<CloseIcon circular/>'
        ]}
        notes='One-off component because it is use so often.'>
        <CloseIcon/>
        <CloseIcon circular/>
      </IconStory>
    )
  })
  .add('circular', () => {
    return (
      <IconStory examples='<Icon circular/>' >
        <Icon circular type='user'/>
      </IconStory>
    )
  })
  .add('bordered', () => {
    return (
      <IconStory examples='<Icon bordered/>' >
        <Icon bordered type='user'/>
      </IconStory>
    )
  })
  .add('disabled', () => {
    return (
      <IconStory examples='<Icon disabled>'
        notes='Disabled only handles appearance. Set [on*] props to null to actually disable it.'>
        <Icon disabled type='user' onClick={ action('Disabled Icon clicked')}/>
      </IconStory>
    )
  })
  .add('loading', () => {
    return (
      <IconStory examples='<Icon loading>'>
        <Icon loading type='circle notched'/>
      </IconStory>
    )
  })
  .add('color', makeColorStory(Icon, {
    props: { children: null, type: 'user' },
    Story: IconStory
  }))
  .add('inverted', () => {
    return (
      <IconStory examples='<Icon inverted>' style={{ backgroundColor: '#666', padding: '1em' }}>
        <Icon inverted type='user'/>
      </IconStory>
    )
  })
  .add('size', makeStoryForKeyAndOptions(Icon, { key: 'size', options: SIZES }, {
    props: { children: null, type: 'user' },
    Story: IconStory
  }))
  .add('passes .className and other props', makePassesPropsStory(Icon, {
    props: {
      className: 'red',
      type: 'user',
      onClick: action('Icon was clicked'),
      children: null,
    },
    Story: IconStory
  }))

