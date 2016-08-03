import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components';
import { makePassesPropsStory, extractOptionsValues } from '../../.storybook/utils';
import { Popup, makeTooltipProps, POSITIONS, WIDTHS, SIZES, Header, Content } from './index'
import { Grid, Row, Column } from '../../collections/Grid'
import { Segment } from '../../elements/Segment'

const _container = { format: 'vertical' }
const _popupStyle = { left: 0 }

storiesOf('Popup', module)
  .add('makeTooltipProps()', () => {
    const positions = extractOptionsValues(POSITIONS, 0)
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
            <Column>
              <button {...makeTooltipProps("tooltip here", { inverted: true })}>inverted</button>
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
  .add('<Popup> default', () => {
    return (
      <Story examples='<Popup>{ content }></Popup>'
          notes='<Popup> is hidden by default.' container={_container}>
        <Popup>
          Some popup here
        </Popup>
      </Story>
    )
  })
  .add('<Popup> visible', () => {
    return (
      <Story examples='<Popup visible>{ content }></Popup>'
          notes='<Popup> requires positioning via [style] prop.' container={_container}>
        <Popup visible style={ _popupStyle}>
          Some popup here
        </Popup>
      </Story>
    )
  })
  .add('<Popup> position', () => {
    const positions = extractOptionsValues(POSITIONS, 0)
    return (
      <Story examples={'<Popup position=[ ' + positions + ' ]>{ content }></Popup>'}
          notes='[position] defaults to "top center"' container={_container}>
        <Grid stretched aligned='center' columns='three'>
          <Row>
            <Column>
              <Popup visible position='top left' style={ _popupStyle}>top left popup</Popup>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </Column>
            <Column>
              <Popup visible position='top center' style={ _popupStyle}>top center popup</Popup>
            </Column>
            <Column>
              <Popup visible position='top right' style={ _popupStyle}>top right popup</Popup>
            </Column>
          </Row>
          <Row>
            <Column>
              <Popup visible position='bottom left' style={ _popupStyle}>bottom left popup</Popup>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </Column>
            <Column>
              <Popup visible position='bottom center' style={ _popupStyle}>bottom center popup</Popup>
            </Column>
            <Column>
              <Popup visible position='bottom right' style={ _popupStyle}>bottom right popup</Popup>
            </Column>
          </Row>
          <Row>
            <Column>
              <Popup visible position='left center' style={ _popupStyle}>left center popup</Popup>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </Column>
            <Column>
              <Popup visible position='right center' style={ _popupStyle}>right center popup</Popup>
            </Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Popup> basic', () => {
    return (
      <Story examples='<Popup basic>{ content }></Popup>' container={_container}>
        <Popup basic visible style={ _popupStyle}>
          Some popup here
        </Popup>
      </Story>
    )
  })
  .add('<Popup> width', () => {
    const widths = extractOptionsValues(WIDTHS, 0)
    return (
      <Story examples={'<Popup width=[ ' + widths + ' ]>{ content }></Popup>'} showToggleNote container={_container}>
        <Grid stretched aligned='center' columns='one'>
          <Column>
            <Popup visible width='wide' style={ _popupStyle}>wide popup</Popup>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </Column>
          <Column>
            <Popup visible width='very wide' style={ _popupStyle}>very wide popup</Popup>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </Column>
          <Column>
            <Popup visible width='fluid' style={ _popupStyle}>fluid popup</Popup>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </Column>
          <Column>
            <Popup visible width='flowing' style={ _popupStyle}>flowing popup</Popup>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </Column>
        </Grid>
      </Story>
    )
  })
  .add('<Popup> size', () => {
    const sizes = extractOptionsValues(SIZES, 0)
    return (
      <Story examples={'<Popup size=[ ' + sizes + ' ]>{ content }></Popup>'} container={_container}>
        <Grid stretched aligned='center' columns='one'>
        {
          SIZES.map((size, index) => {
            return (
              <Column key={index}>
                <Popup visible size={size} style={ _popupStyle}>{size} popup</Popup>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </Column>
            )
          })
        }
        </Grid>
      </Story>
    )
  })
  .add('<Popup> inverted', () => {
    return (
      <Story examples='<Popup inverted>{ content }></Popup>' container={_container}>
        <Popup inverted visible style={ _popupStyle}>
          Some popup here
        </Popup>
      </Story>
    )
  })
  .add('<Popup> passes .className and other props', makePassesPropsStory(Popup, {
    props: {
      visible: true,
      style: _popupStyle,
      className: 'huge',
      onClick: action('Popup was clicked'),
      children: 'huge clickable popup'
    },
    container: _container
  }))
  .add('<Header>', () => {
    return (
      <Story examples='<Popup><Header/></Popup>' container={_container}>
        <Popup visible style={ _popupStyle}>
          <Header>
            popup header
          </Header>
        </Popup>
      </Story>
    )
  })
  .add('<Content>', () => {
    return (
      <Story examples='<Popup><Content/></Popup>' container={_container}>
        <Popup visible style={ _popupStyle}>
          <Content>
            Some popup here
          </Content>
        </Popup>
      </Story>
    )
  })
