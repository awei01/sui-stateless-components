import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeLipsum, makeColorStory, makePassesPropsStory, extractOptionsValues } from '../../.storybook/utils'
import { Story } from '../../.storybook/components'
import { Card, Cards, Content } from './index'

storiesOf('Card', module)
  .add('<Card> default', () => {
    return (
      <Story examples='<Card>[ content ]</Card>'>
        <Card>
          <Content>
            This is the card content
          </Content>
        </Card>
      </Story>
    )
  })
  .add('<Card> color', makeColorStory(Card, {
    props: {
      children: (value) => {
        return (<Content>This card is {value}</Content>)
      }
    }
  }))
  .add('<Cards>', () => {
    return (
      <Story examples='<Cards><Card/></Cards>'>
        <Cards>
          <Card>
            <Content>
              Card 1
            </Content>
          </Card>
          <Card>
            <Content>
              Card 2
            </Content>
          </Card>
          <Card>
            <Content>
              Card 3
            </Content>
          </Card>
        </Cards>
      </Story>
    )
  })  /*
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
  .add('<Modal> scrolling', () => {
    return (
      <Story examples='<Modal scrolling/>' showToggleNote container={_container}
          notes={['<Modal scrolling> should be wrapped in <Dimmer modals>',
            '<Dimmer modals> should be immediate child of an element with className="scrolling dimmable dimmed"']}>
        <div className='scrolling dimmable dimmed' style={{height: '1000px'}}>
          <Dimmer page active modals>
            <Modal active scrolling>
              <Content>
                <p>{makeLipsum()}</p>
                <p>{makeLipsum()}</p>
                <p>{makeLipsum()}</p>
                <p>{makeLipsum()}</p>
                <p>{makeLipsum()}</p>
                <p>{makeLipsum()}</p>
                <p>{makeLipsum()}</p>
              </Content>
            </Modal>
          </Dimmer>

        </div>
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
            <Image src='public/images/lindsay.png'/>
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
*/
