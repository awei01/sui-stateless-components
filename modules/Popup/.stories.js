import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/components'
import Popup, { popupDefinition, Tooltip, tooltipDefinition } from './index'
import Grid from '../../collections/Grid'
const { Column } = Grid
const { Header, Content } = Popup

const _path = 'sui-stateless-components/modules/Popup'

storiesOf('Popup', module)
  .add('<Popup />', () => {
    return (
      <Story title='<Popup />'>
        <Api definition={popupDefinition}>
          import Popup from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <p>By default, this component will be hidden. Use [visible]. You will also need to provide [style] to position the popup</p>
          <Example>
            <Popup>
              you cannot see me
            </Popup>
          </Example>
          <Example title='[className] gets passed'>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} className='visible'>
                popup here
              </Popup>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='visible'>
          <Example>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} visible>
                popup here
              </Popup>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='position'>
          <Example title='top left|center|right'>
            <Grid count='three' relaxed='very' padded>
              <Column><Popup style={{ left: 0 }} visible position='top left'>top left</Popup></Column>
              <Column><Popup style={{ left: 0 }} visible position='top center'>top center</Popup></Column>
              <Column><Popup style={{ left: 0 }} visible position='top right'>top right</Popup></Column>
            </Grid>
          </Example>
          <Example title='left|right center'>
            <Grid count='two' relaxed='very' padded>
              <Column><Popup style={{ left: 0 }} visible position='left center'>left center</Popup></Column>
              <Column><Popup style={{ left: 0 }} visible position='right center'>right center</Popup></Column>
            </Grid>
          </Example>
          <Example title='bottom left|center|right'>
            <Grid count='three' relaxed='very' padded>
              <Column><Popup style={{ left: 0 }} visible position='bottom left'>bottom left</Popup></Column>
              <Column><Popup style={{ left: 0 }} visible position='bottom center'>bottom center</Popup></Column>
              <Column><Popup style={{ left: 0 }} visible position='bottom right'>bottom right</Popup></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='basic'>
          <Example>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} basic visible>
                basic popup has no pointer
              </Popup>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='width'>
          <Example>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} visible width='wide'>
                wide popup
              </Popup>
            </div>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} visible width='very wide'>
                very wide popup
              </Popup>
            </div>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} visible width='fluid'>
                fluid popup
              </Popup>
            </div>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} visible width='flowing'>
                flowing popup
              </Popup>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} size='mini' visible>
                mini popup
              </Popup>
            </div>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} size='tiny' visible>
                tiny popup
              </Popup>
            </div>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} size='small' visible>
                small popup
              </Popup>
            </div>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} size='large' visible>
                large popup
              </Popup>
            </div>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} size='huge' visible>
                huge popup
              </Popup>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} inverted visible>
                inverted popup
              </Popup>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Popup.Header />', () => {
    return (
      <Story title='<Popup.Header />'>
        <Api definition={popupDefinition}>
          import Popup from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} visible>
                <Header>popup header</Header>
              </Popup>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Popup.Content />', () => {
    return (
      <Story title='<Popup.Content />'>
        <Api definition={popupDefinition}>
          import Popup from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ position: 'relative', height: '70px' }}>
              <Popup style={{ left: 0 }} visible>
                <Content>popup content</Content>
              </Popup>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Tooltip />', () => {
    return (
      <Story examples='<Tooltip />'>
        <p>This is SUI's simple css-only solution for tool tips. Wrap this component around a component or an element and you'll have a tool tip.</p>
        <Api definition={tooltipDefinition} otherProps={{
          message: {
            description: 'The text content for your tooltip',
            isRequired: true
          }
        }}>
          {'import { Tooltip } from \'' + _path + '\''}
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Tooltip message='tooltip message'>
              <span>mouseover me</span>
            </Tooltip>
          </Example>
        </Story.Segment>
        <Story.Segment title='message'>
          See example <a href='#(default)'>#(default)</a>
        </Story.Segment>
        <Story.Segment title='position'>
          <Example title='top left|right|center'>
            <Grid count='three' relaxed='very' aligned='center'>
              <Column>
                <Tooltip message='tooltip message' position='top left'>
                  <span>top left</span>
                </Tooltip>
              </Column>
              <Column>
                <Tooltip message='tooltip message' position='top center'>
                  <span>top center</span>
                </Tooltip>
              </Column>
              <Column>
                <Tooltip message='tooltip message' position='top right'>
                  <span>top right</span>
                </Tooltip>
              </Column>
            </Grid>
          </Example>
          <Example title='left|right center'>
            <Grid count='two' relaxed='very' aligned='center'>
              <Column>
                <Tooltip message='tooltip message' position='left center'>
                  <span>left center</span>
                </Tooltip>
              </Column>
              <Column>
                <Tooltip message='tooltip message' position='right center'>
                  <span>right center</span>
                </Tooltip>
              </Column>
            </Grid>
          </Example>
          <Example title='bottom left|right|center'>
            <Grid count='three' relaxed='very' aligned='center'>
              <Column>
                <Tooltip message='tooltip message' position='bottom left'>
                  <span>bottom left</span>
                </Tooltip>
              </Column>
              <Column>
                <Tooltip message='tooltip message' position='bottom center'>
                  <span>bottom center</span>
                </Tooltip>
              </Column>
              <Column>
                <Tooltip message='tooltip message' position='bottom right'>
                  <span>bottom right</span>
                </Tooltip>
              </Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <Tooltip message='tooltip message' inverted>
              <span>inverted tooltip</span>
            </Tooltip>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
