import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makeLipsum, extractOptionsValues } from '../../.storybook/utils';
import { makeTooltipProps, POSITIONS } from './index'
import { Grid, Row, Column } from '../../collections/Grid'


storiesOf('Popup', module)
  .add('makeTooltipProps()', () => {
    const positions = extractOptionsValues(POSITIONS)
    return (
      <Story examples={[
          '<element {...makeTooltipProps()}/>',
          'function makeTooltipProps(string content, [object options])',
          'options.position = [ ' + positions + ' ]',
          'options.inverted = [ true | false ]',
        ]}
        notes='Convenience method to generate props for CSS-only tooltip solution'>
        <Grid aligned='center' columns='three'>
          <Row>
            <Column>
              <button {...makeTooltipProps("tooltip here")}>default position</button>
            </Column>
          </Row>
          <Row>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'top left' })}>top left</button>
            </Column>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'top center' })}>top center</button>
            </Column>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'top right' })}>top right</button>
            </Column>
          </Row>
          <Row>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'bottom left' })}>bottom left</button>
            </Column>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'bottom center' })}>bottom center</button>
            </Column>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'bottom right' })}>bottom right</button>
            </Column>
          </Row>
          <Row>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'left center' })}>left center</button>
            </Column>
            <Column>
              <button {...makeTooltipProps("tooltip here", { position: 'right center' })}>right center</button>
            </Column>
          </Row>
        </Grid>
      </Story>
    )
  })
/*
  .add('content', () => {
    return (
      <Story examples='<Modal><Header/><Content/><Actions/></Modal>'>
        <Modal>
          <Header>modal header area</Header>
          <Content>modal content area</Content>
          <Actions>modal actions area</Actions>
        </Modal>
      </Story>
    )
  })
  .add('size="small"', () => {
    return (
      <Story examples='<Modal size="small"/>' showToggleNote>
        <Modal size="small">
          <Content>Some modal content here</Content>
        </Modal>
      </Story>
    )
  })
  .add('size="large"', () => {
    return (
      <Story examples='<Modal size="large"/>' showToggleNote>
        <Modal size="large">
          <Content>Some modal content here</Content>
        </Modal>
      </Story>
    )
  })
  .add('size="fullscreen"', () => {
    return (
      <Story examples='<Modal size="fullscreen"/>' showToggleNote>
        <Modal size="fullscreen">
          <Content>Some modal content here</Content>
        </Modal>
      </Story>
    )
  })
*/
