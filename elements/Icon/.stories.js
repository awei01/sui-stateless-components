import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeStoryUsingOptions, makeColorStory, makeSizeStory, makePassesPropsStory } from '../../.storybook/utils';
import { Icon, CloseIcon, ICONS, SIZES } from '../Icon'

const _storyStyle = { fontSize: '2em', margin: '.5em' }

storiesOf('Icon', module)
  .add('type', makeStoryUsingOptions(Icon, { key: 'type', options: ICONS,
    props: { children: null, style: _storyStyle }
  }))
  .add('<CloseIcon/>', () => {
    return (
      <Story examples={[
          '<CloseIcon/>',
          '<CloseIcon circular/>'
        ]}
        notes='Just because it is use so often.'
        style={_storyStyle}>
        <CloseIcon/>
        <CloseIcon circular/>
      </Story>
    )
  })
  .add('circular', () => {
    return (
      <Story examples='<Icon circular/>' style={_storyStyle}>
        <Icon circular type='user'/>
      </Story>
    )
  })
  .add('bordered', () => {
    return (
      <Story examples='<Icon bordered/>' style={_storyStyle}>
        <Icon bordered type='user'/>
      </Story>
    )
  })
  .add('disabled', () => {
    return (
      <Story examples='<Icon disabled>'
        notes='Disabled only handles appearance. Set [on*] props to null to actually disable it.'
        style={_storyStyle}>
        <Icon disabled type='user' onClick={ action('Disabled Icon clicked')}/>
      </Story>
    )
  })
  .add('loading', () => {
    return (
      <Story examples='<Icon loading>' style={_storyStyle}>
        <Icon loading type='circle notched'/>
      </Story>
    )
  })
  .add('color', makeColorStory(Icon, { children: null, type: 'user', style: _storyStyle }))
  .add('inverted', () => {
    return (
      <Story examples='<Icon inverted>' style={{ ..._storyStyle, backgroundColor: '#666', padding: '1em' }}>
        <Icon inverted type='user'/>
      </Story>
    )
  })
  .add('size', makeStoryUsingOptions(Icon, { key: 'size', options: SIZES,
    props: { children: null, type: 'user' }
  }))
  .add('passes .className and other props', makePassesPropsStory(Icon, {
    className: 'red',
    type: 'user',
    onClick: action('Icon was clicked'),
    children: null,
    style: _storyStyle
  }))

