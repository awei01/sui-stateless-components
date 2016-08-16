import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { Modal, Header, Content, Actions, Description } from './index'
import { Image } from '../../elements/Image'

const _container = { format: 'vertical' }

storiesOf('Modal', module)
  .add('<Modal> default', () => {
    return (
      <Story examples='<Modal>[ content ]</Modal>'
        notes='<Modal> is hidden by default' container={_container}>
        <Modal>
          <Content>Some modal content here</Content>
        </Modal>
      </Story>
    )
  })
  .add('<Modal> active', () => {
    return (
      <Story examples='<Modal>[ content ]</Modal>' container={_container}>
        <Modal active>
          <Content>Some modal content here</Content>
        </Modal>
      </Story>
    )
  })
  .add('<Modal> size="small"', () => {
    return (
      <Story examples='<Modal size="small"/>' showToggleNote container={_container}>
        <Modal active size="small">
          <Content>small modal</Content>
        </Modal>
      </Story>
    )
  })
  .add('<Modal> size="large"', () => {
    return (
      <Story examples='<Modal size="large"/>' showToggleNote container={_container}>
        <Modal active size="large">
          <Content>large modal</Content>
        </Modal>
      </Story>
    )
  })
  .add('<Modal> size="fullscreen"', () => {
    return (
      <Story examples='<Modal size="fullscreen"/>' showToggleNote container={_container}>
        <Modal active size="fullscreen">
          <Content>fullscreen modal</Content>
        </Modal>
      </Story>
    )
  })
  .add('<Modal> passes .className and other props', () => {
    return (
      <Story examples='<Modal className="small" onClick={function}/>' showToggleNote container={_container}>
        <Modal active className="small" onClick={ action('Modal was clicked')}>
          <Content>Some modal content here</Content>
        </Modal>
      </Story>
    )
  })
  .add('<Header>', () => {
    return (
      <Story examples='<Modal><Header/></Modal>' container={_container}>
        <Modal active>
          <Header>modal header area</Header>
        </Modal>
      </Story>
    )
  })
  .add('<Content>', () => {
    return (
      <Story examples='<Modal><Content/></Modal>' container={_container}>
        <Modal active>
          <Content>modal content area</Content>
        </Modal>
      </Story>
    )
  })
  .add('<Content> image', () => {
    return (
      <Story examples='<Modal><Content image><Image/><Description/></Content></Modal>' container={_container}>
        <Modal active>
          <Content image>
            <Image src='images/lindsay.png'/>
            <Description>
              Some description here
            </Description>
          </Content>
        </Modal>
      </Story>
    )
  })
  .add('<Actions> image', () => {
    return (
      <Story examples='<Modal><Actions/></Modal>' container={_container}>
        <Modal active>
          <Actions>
            modal actions area
          </Actions>
        </Modal>
      </Story>
    )
  })
