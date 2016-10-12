import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Image, { imageDefinition, Images, imagesDefinition } from './index'
import Divider from '../../elements/Divider'

const _path = 'sui-stateless-components/elements/Image'
const _otherProps = {
  src: {
    description: 'The url of the the image',
    isRequired: true
  },
  href: {
    description: 'The link for the image. This will wrap the <img /> within an <a />'
  }
}

storiesOf('Image', module)
  .add('<Image />', () => {
    return (
      <Story title='<Image />'>
        <Api definition={imageDefinition} otherProps={_otherProps}>
          import Image from '{_path}'
        </Api>
        <Story.Segment title='src'>
          <Example>
            <Image src='images/lindsay.png' />
          </Example>
          <Example title='[width, height] can be passed'>
            <Image src='images/lindsay.png' width={100} height={50}/>
          </Example>
          <Example title='[className] gets passed'>
            <Image src='images/lindsay.png' className='avatar'/>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>Adding the [href] prop will wrap the {'<img />'} within an {'<a />'} tag</p>
          <Example>
            <Image href='http://www.google.com' target='_blank' src='images/lindsay.png' />
          </Example>
          <Example title='{ width, height } will be passed to <img />'>
            <Image href='http://www.google.com' target='_blank' src='images/lindsay.png' width={100} height={50}/>
          </Example>
        </Story.Segment>
        <Story.Segment title='hidden'>
          <Example>
            <Image hidden src='images/lindsay.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <p>When [disabled] is true, the component will not render the {'<a />'} even if [href] is passed</p>
          <Example>
            <Image disabled src='images/lindsay.png' />
            <Image disabled href='http://www.google.com' target='_blank' src='images/lindsay.png'/>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example title='avatar'>
            <Image format='avatar' src='images/lindsay.png' />
          </Example>
          <Example title='circular'>
            <Image format='circular' src='images/lindsay.png' />
          </Example>
          <Example title='rounded'>
            <Image format='rounded' src='images/lindsay.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='bordered'>
          <Example>
            <Image bordered src='images/matthew.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <Image fluid src='images/matthew.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <p>
              <Image aligned='top' src='images/jenny.jpg' />
              top aligned
            </p>
            <p>
              <Image aligned='middle' src='images/jenny.jpg' />
              middle aligned
            </p>
            <p>
              <Image aligned='bottom' src='images/jenny.jpg' />
              bottom aligned
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='centered'>
          <Example>
            <p>
              {makeLipsum(200)}
              <Image centered src='images/jenny.jpg' />
              {makeLipsum(200)}
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='spaced'>
          <Example>
            <p>
              <Image spaced='right' src='images/jenny.jpg' />
              {makeLipsum(300)}
              <Image spaced src='images/jenny.jpg' />
              {makeLipsum(300)}
              <Image spaced='left' src='images/jenny.jpg' />
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <p>
              <Image floated='left' src='images/jenny.jpg' />
              {makeLipsum()}
            </p>
            <p>
              <Image floated='right' src='images/jenny.jpg' />
              {makeLipsum()}
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Image} propKey='size' definition={imageDefinition} props={{ src: 'images/lindsay.png', children: null }} />
        </Story.Segment>
      </Story>
    )
  })
  .add('<Images />', () => {
    return (
      <Story title='<Images />'>
        <Api definition={imagesDefinition}>
          {'import { Image } from \'' + _path + '\''}
        </Api>
        <Story.Segment title='(default)'>
          <Example title='[className] gets passed'>
            <Images className='tiny'>
              <Image spaced='right' src='images/jenny.jpg' />
              <Image format='circular' src='images/lindsay.png' />
              <Image bordered src='images/matthew.png' />
            </Images>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example>
            <Images size='tiny'>
              <Image spaced='right' src='images/jenny.jpg' />
              <Image format='circular' src='images/lindsay.png' />
              <Image bordered src='images/matthew.png' />
            </Images>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
