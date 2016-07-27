import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
//import { makePassesPropsStory, LIPSUM } from '../../.storybook/utils';
import { Modal, ModalHeader, ModalContent, ModalActions } from './index'

storiesOf('Modal', module)
  .add('default', () => {
    return (
      <Story examples='<Modal>[ content ]</Modal>'
        notes={[
          'Modal prop [active] is [true] by default',
          'You have to manually include a <Dimmer> to get the page to dim'
        ]}>
        <Modal>
          <ModalContent>Some modal content here</ModalContent>
        </Modal>
      </Story>
    )
  })
  .add('content', () => {
    return (
      <Story examples='<Modal><ModalHeader/><ModalContent/><ModalActions/></Modal>'>
        <Modal>
          <ModalHeader>modal header area</ModalHeader>
          <ModalContent>modal content area</ModalContent>
          <ModalActions>modal actions area</ModalActions>
        </Modal>
      </Story>
    )
  })
  .add('size="small"', () => {
    return (
      <Story examples='<Modal size="small"/>'
        notes='Toggle full screen for to get a better idea of how this behaves'>
        <Modal size="small">
          <ModalContent>Some modal content here</ModalContent>
        </Modal>
      </Story>
    )
  })
  .add('size="large"', () => {
    return (
      <Story examples='<Modal size="large"/>'
        notes='Toggle full screen for to get a better idea of how this behaves'>
        <Modal size="large">
          <ModalContent>Some modal content here</ModalContent>
        </Modal>
      </Story>
    )
  })
  .add('size="fullscreen"', () => {
    return (
      <Story examples='<Modal size="fullscreen"/>'
        notes='Toggle full screen for to get a better idea of how this behaves'>
        <Modal size="fullscreen">
          <ModalContent>Some modal content here</ModalContent>
        </Modal>
      </Story>
    )
  })
/*
  .add('active={ false }', () => {
    return (
      <Story examples='<Modal active={false}/>' style={_storyStyle}>
        <div style={_containerStyle}>
          { LIPSUM }
          <Modal active={false}/>
        </div>
      </Story>
    )
  })
  .add('content', () => {
    return (
      <Story examples='<Modal>[some content]</Modal>'
        notes='If you provide content, the component will automatically generate the HTML to center your content'
        style={_storyStyle}>
        <div style={_containerStyle}>
          { LIPSUM }
          <Modal><h1>This is some header</h1><p>Here is a paragraph</p></Modal>
        </div>
      </Story>
    )
  })
  .add('page (active)', () => {
    return (
      <Story examples='<Modal page/>'>
        <div style={_containerStyle}>
          { LIPSUM }
          <Modal page onClick={ linkTo('Modal', 'page (inactive)') }/>
        </div>
      </Story>
    )
  })
  .add('page (inactive)', () => {
    return (
      <Story examples='<Modal page active={false}/>'>
        <div style={_containerStyle}>
          <button onClick={ linkTo('Modal', 'page (active)') }>Activate page dimmer</button>
          <br/>
          { LIPSUM }
          <Modal page active={ false }/>
        </div>
      </Story>
    )
  })
  .add('inverted', () => {
    return (
      <Story examples='<Modal inverted/>'>
        <div style={_containerStyle}>
          { LIPSUM }
          <Modal inverted/>
        </div>
      </Story>
    )
  })
  .add('passes .className and other props', makePassesPropsStory(Modal, {
    className: "inverted",
    onClick: action('Modal was clicked'),
    children: (<h1 style={{ color: '#000' }}>I am inverted and clickable</h1>)
  }))
*/
