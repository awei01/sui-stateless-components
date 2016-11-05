import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Modal, { modalDefinition, contentDefinition } from './index'
import Image from '../../elements/Image'
import Dimmer from '../../modules/Dimmer'

const { Content, Header, Actions } = Modal
const { Description } = Content

storiesOf('Modal', module)
  .add('<Modal />', () => {
    return (
      <Story title='<Modal />'>
        <Api definition={modalDefinition}>
          import Modal from 'sui-stateless-components/modules/Modal'
        </Api>
        <Story.Segment title='(default)'>
          <p>This component is hidden by default. See [active]</p>
          <Example>
            <Modal>
              <Content>you can't see me</Content>
            </Modal>
          </Example>
          <Example title='[className] gets passed'>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '100px' }}>
              <Modal className='active'>
                <Content>modal content</Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '100px' }}>
              <Modal active>
                <Content>active modal</Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='basic'>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '100px', background: '#666' }}>
              <Modal basic active>
                <Content>basic modal</Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example title='small'>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '100px' }}>
              <Modal size='small' active>
                <Content>small modal</Content>
              </Modal>
            </div>
          </Example>
          <Example title='large'>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '100px' }}>
              <Modal size='large' active>
                <Content>large modal</Content>
              </Modal>
            </div>
          </Example>
          <Example title='fullscreen'>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '100px' }}>
              <Modal size='fullscreen' active>
                <Content>fullscreen modal</Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='scrolling'>
          <p>In order to use [scrolling], the {'<Modal />'} needs to inside {'<div className="scrolling dimmable dimmed"><Dimmer page className="modals" />'}</p>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '400px' }}>
              <div className='scrolling dimmable dimmed' style={{height: '400px'}}>
                <Dimmer page active className='modals'>
                  <Modal active scrolling>
                    <Content>
                      <p>{makeLipsum()}</p>
                      <p>{makeLipsum()}</p>
                      <p>{makeLipsum()}</p>
                    </Content>
                  </Modal>
                </Dimmer>
              </div>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Modal.Content />', () => {
    return (
      <Story title='<Modal.Content />'>
        <Api definition={contentDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '100px' }}>
              <Modal active>
                <Content>modal content</Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='image'>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '300px' }}>
              <Modal active>
                <Content image>
                  <Image src='images/public/jenny.jpg' />
                </Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Modal.Content.Description />', () => {
    return (
      <Story title='<Modal.Content.Description />'>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '300px' }}>
              <Modal active>
                <Content image>
                  <Image src='images/public/jenny.jpg' />
                  <Description>some description</Description>
                </Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Modal.Header />', () => {
    return (
      <Story title='<Modal.Header />'>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '200px' }}>
              <Modal active>
                <Header>modal header</Header>
                <Content>modal content</Content>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Modal.Actions />', () => {
    return (
      <Story title='<Modal.Actions />'>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ WebkitTransform: 'translateZ(0)', height: '200px' }}>
              <Modal active>
                <Content>modal content</Content>
                <Actions>modal actions</Actions>
              </Modal>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
