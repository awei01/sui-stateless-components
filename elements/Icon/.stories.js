import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Icon, { iconOptions, Icons, iconsOptions } from '../Icon'

const _path = 'sui-stateless-components/elements/Icon'

storiesOf('Icon', module)
  .add('<Icon />', () => {
    return (
      <Story title='<Icon />'>
        <Api options={iconOptions} override={{ glyph: 'See (http://semantic-ui.com/elements/icon.html) for possible values' }} >
          import Icon from '{_path}'
        </Api>
        <Story.Segment title='glyph'>
          <Example>
            <Icon glyph='user' />
            <Icon glyph='hourglass empty' />
            <Icon glyph='copyright' />
            <Icon glyph='align center' />
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Icon disabled glyph='user' />
            <Icon disabled glyph='hourglass empty' />
            <Icon disabled glyph='copyright' />
            <Icon disabled glyph='align center' />
          </Example>
        </Story.Segment>
        <Story.Segment title='loading'>
          <Example>
            <Icon loading glyph='user' />
            <Icon loading glyph='spinner' />
            <Icon loading glyph='circle notched' />
            <Icon loading glyph='asterisk' />
          </Example>
        </Story.Segment>
        <Story.Segment title='fitted'>
          <Example>
            This is text surrounding a <Icon fitted glyph='user' /> fitted icon
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Icon} propKey='size' options={iconOptions} props={{ glyph: 'user', children: null }}/>
        </Story.Segment>
        <Story.Segment title='link'>
          <Example>
            <Icon link glyph='user' />
          </Example>
        </Story.Segment>
        <Story.Segment title='flipped'>
          <Example>
            <Icon flipped='horizontally' glyph='cloud' />
            <Icon flipped='vertically' glyph='cloud' />
          </Example>
        </Story.Segment>
        <Story.Segment title='rotated'>
          <Example>
            <Icon rotated='clockwise' glyph='cloud' />
            <Icon rotated='counterclockwise' glyph='cloud' />
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example>
            <Icon format='circular' glyph='user' />
            <Icon format='bordered' glyph='user' />
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Icon} propKey='color' options={iconOptions} props={{ glyph: 'user', children: null }} />
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <Icon inverted glyph='user' />
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='corner'>
          <Example>
            <Icons size='huge'>
              <Icon glyph='puzzle' />
              <Icon corner glyph='add' />
            </Icons>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Icons />', () => {
    return (
      <Story title='<Icons />'>
        <Api options={iconsOptions}>
          {'import { Icon } from \'' + _path + '\''}
        </Api>
        <Story.Segment>
          <Example>
            <Icons>
              <Icon size='big' glyph='circle thin' />
              <Icon glyph='user' />
            </Icons>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example>
            <Icons size='huge'>
              <Icon size='big' glyph='circle thin' />
              <Icon glyph='user' />
            </Icons>
          </Example>
        </Story.Segment>
      </Story>
     )
  })
