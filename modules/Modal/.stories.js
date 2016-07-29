import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { Modal, Header, Content, Actions } from './index'

const ModalStory = (props) => {
  return <Story {...props} style={{}}/>
}

storiesOf('Modal', module)
  .add('default', () => {
    return (
      <ModalStory examples='<Modal>[ content ]</Modal>'
        notes={[
          'Modal prop [active] is [true] by default',
          'You have to manually include a <Dimmer> to get the page to dim'
        ]}>
        <Modal>
          <Content>Some modal content here</Content>
        </Modal>
      </ModalStory>
    )
  })
  .add('content', () => {
    return (
      <ModalStory examples='<Modal><Header/><Content/><Actions/></Modal>'>
        <Modal>
          <Header>modal header area</Header>
          <Content>modal content area</Content>
          <Actions>modal actions area</Actions>
        </Modal>
      </ModalStory>
    )
  })
  .add('size="small"', () => {
    return (
      <ModalStory examples='<Modal size="small"/>' showToggleNote>
        <Modal size="small">
          <Content>Some modal content here</Content>
        </Modal>
      </ModalStory>
    )
  })
  .add('size="large"', () => {
    return (
      <ModalStory examples='<Modal size="large"/>' showToggleNote>
        <Modal size="large">
          <Content>Some modal content here</Content>
        </Modal>
      </ModalStory>
    )
  })
  .add('size="fullscreen"', () => {
    return (
      <ModalStory examples='<Modal size="fullscreen"/>' showToggleNote>
        <Modal size="fullscreen">
          <Content>Some modal content here</Content>
        </Modal>
      </ModalStory>
    )
  })
  .add('passes .className and other props', () => {
    return (
      <ModalStory examples='<Modal className="small" onClick={function}/>' showToggleNote>
        <Modal className="small" onClick={ action('Modal was clicked')}>
          <Content>Some modal content here</Content>
        </Modal>
      </ModalStory>
    )
  })
