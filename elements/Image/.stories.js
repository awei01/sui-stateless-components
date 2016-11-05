import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
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
            <Image src='public/images/lindsay.png' />
          </Example>
          <Example title='[width, height] can be passed'>
            <Image src='public/images/lindsay.png' width={100} height={50}/>
          </Example>
          <Example title='[className] gets passed'>
            <Image src='public/images/lindsay.png' className='avatar'/>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>Adding the [href] prop will wrap the {'<img />'} within an {'<a />'} tag</p>
          <Example>
            <Image href='http://www.google.com' target='_blank' src='public/images/lindsay.png' />
          </Example>
          <Example title='{ width, height } will be passed to <img />'>
            <Image href='http://www.google.com' target='_blank' src='public/images/lindsay.png' width={100} height={50}/>
          </Example>
        </Story.Segment>
        <Story.Segment title='hidden'>
          <Example>
            <Image hidden src='public/images/lindsay.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <p>When [disabled] is true, the component will not render the {'<a />'} even if [href] is passed</p>
          <Example>
            <Image disabled src='public/images/lindsay.png' />
            <Image disabled href='http://www.google.com' target='_blank' src='public/images/lindsay.png'/>
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <Example title='avatar'>
            <Image format='avatar' src='public/images/lindsay.png' />
          </Example>
          <Example title='circular'>
            <Image format='circular' src='public/images/lindsay.png' />
          </Example>
          <Example title='rounded'>
            <Image format='rounded' src='public/images/lindsay.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='bordered'>
          <Example>
            <Image bordered src='public/images/matthew.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <Image fluid src='public/images/matthew.png' />
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <p>
              <Image valigned='top' src='public/images/jenny.jpg' />
              top valigned
            </p>
            <p>
              <Image valigned='middle' src='public/images/jenny.jpg' />
              middle valigned
            </p>
            <p>
              <Image valigned='bottom' src='public/images/jenny.jpg' />
              bottom valigned
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='centered'>
          <Example>
            <p>
              {makeLipsum(200)}
              <Image centered src='public/images/jenny.jpg' />
              {makeLipsum(200)}
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='spaced'>
          <Example>
            <p>
              <Image spaced='right' src='public/images/jenny.jpg' />
              {makeLipsum(300)}
              <Image spaced src='public/images/jenny.jpg' />
              {makeLipsum(300)}
              <Image spaced='left' src='public/images/jenny.jpg' />
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <p>
              <Image floated='left' src='public/images/jenny.jpg' />
              {makeLipsum()}
            </p>
            <p>
              <Image floated='right' src='public/images/jenny.jpg' />
              {makeLipsum()}
            </p>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Image} propKey='size' definition={imageDefinition} props={{ src: 'public/images/lindsay.png', children: null }} />
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
              <Image spaced='right' src='public/images/jenny.jpg' />
              <Image format='circular' src='public/images/lindsay.png' />
              <Image bordered src='public/images/matthew.png' />
            </Images>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Images} propKey='size' definition={imagesDefinition} props={{
            children: [<Image key='1' src='public/images/jenny.jpg' />, <Image key='2' src='public/images/lindsay.png' />]
          }} />
        </Story.Segment>
      </Story>
    )
  })
