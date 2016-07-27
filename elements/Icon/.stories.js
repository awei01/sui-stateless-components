import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeOptionsStory, makeColorStory, makeSizeStory, makePassesPropsStory } from '../../.storybook/utils';
import { Icon, ICONS, SIZES } from '../Icon'

storiesOf('Icon', module)
  .add('type', makeOptionsStory(Icon, { key: 'type', options: ICONS,
    props: { children: null, style: { fontSize: '2em', margin: '.5em' } }
  }))
  .add('circular', () => {
    return (
      <Story examples='<Icon circular/>'>
        <Icon circular type='user'></Icon>
      </Story>
    )
  })
  .add('bordered', () => {
    return (
      <Story examples='<Icon bordered/>'>
        <Icon bordered type='user'></Icon>
      </Story>
    )
  })
  .add('disabled', () => {
    return (
      <Story examples='<Icon disabled>' notes='Disabled only handles appearance. Set [on*] props to null to actually disable it.'>
        <Icon disabled type='user' onClick={ action('Disabled Icon clicked')}/>
      </Story>
    )
  })
  .add('loading', () => {
    return (
      <Story examples='<Icon loading>'>
        <Icon loading type='circle notched'/>
      </Story>
    )
  })
  .add('color', makeColorStory(Icon, { children: null, type: 'user' }))
  .add('inverted', () => {
    return (
      <Story examples='<Icon inverted>' style={{ backgroundColor: '#666', padding: '1em' }}>
        <Icon inverted type='user'/>
      </Story>
    )
  })
  .add('size', makeOptionsStory(Icon, { key: 'size', options: SIZES,
    props: { children: null, type: 'user' }
  }))
  .add('passes .className and other props', makePassesPropsStory(Icon, {
    className: 'red',
    type: 'user',
    onClick: action('Icon was clicked'),
    children: null
  }))

