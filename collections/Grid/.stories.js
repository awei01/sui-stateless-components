import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Grid, { gridDefinition, columnDefinition, rowDefinition } from './index'
import Segment from '../../elements/Segment'
import Image from '../../elements/Image'
import Divider from '../../elements/Divider'

const { Column, Row } = Grid

storiesOf('Grid', module)
  .add('<Grid />', () => {
    return (
      <Story title='<Grid />'>
        <Api definition={gridDefinition}>
          import Grid from 'sui-stateless-components/collections/Grid'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Grid>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
            </Grid>
          </Example>
          <Example title='[className] gets passed'>
            <Grid className='equal width'>
              <Column><Segment>1</Segment></Column>
              <Column><Segment>2</Segment></Column>
              <Column><Segment>3</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='divided'>
          <Example title='(true)'>
            <Grid divided className='equal width'>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
            </Grid>
          </Example>
          <Example title='vertically'>
            <Grid divided='vertically' className='equal width'>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
            </Grid>
          </Example>
          <Example title='celled'>
            <Grid divided='celled' className='equal width'>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
            </Grid>
          </Example>
          <Example title='internally celled'>
            <Grid divided='internally celled' className='equal width'>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
              <Row>
                <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Grid count='three'>
              <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='equalWidth'>
          <Example>
            <Grid equalWidth>
              <Column><Segment>1</Segment></Column><Column><Segment>2</Segment></Column><Column><Segment>3</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='stretched'>
          <Example>
            <Grid stretched equalWidth>
              <Row>
                <Column>
                  <Segment>1</Segment>
                  <Segment>2</Segment>
                </Column>
                <Column>
                  <Segment><Image src='images/lindsay.png' /></Segment>
                </Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='padded'>
          <Example title='(true)'>
            <Divider margin='fitted' />
            <Grid padded count='one'>
              <Column><Segment>padded</Segment></Column>
            </Grid>
            <Divider margin='fitted' />
          </Example>
          <Example title='vertically'>
            <Divider margin='fitted' />
            <Grid padded='vertically' count='one'>
              <Column><Segment>vertically padded</Segment></Column>
            </Grid>
            <Divider margin='fitted' />
          </Example>
          <Example title='horizontally'>
            <Divider margin='fitted' />
            <Grid padded='horizontally' count='one'>
              <Column><Segment>horizontally padded</Segment></Column>
            </Grid>
            <Divider margin='fitted' />
          </Example>
        </Story.Segment>
        <Story.Segment title='relaxed'>
          <Example title='(true)'>
            <Grid relaxed equalWidth>
              <Column><Segment>relaxed</Segment></Column>
              <Column><Segment>relaxed</Segment></Column>
              <Column><Segment>relaxed</Segment></Column>
            </Grid>
          </Example>
          <Example title='very'>
            <Grid relaxed='very' equalWidth>
              <Column><Segment>very relaxed</Segment></Column>
              <Column><Segment>very relaxed</Segment></Column>
              <Column><Segment>very relaxed</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='centered'>
          <Example>
            <Grid count='four' centered>
              <Column><Segment>centered</Segment></Column>
              <Column><Segment>centered</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Grid aligned='left' count='one'>
              <Column><Segment>left</Segment></Column>
            </Grid>
            <Grid aligned='right' count='one'>
              <Column><Segment>right</Segment></Column>
            </Grid>
            <Grid aligned='center' count='one'>
              <Column><Segment>center</Segment></Column>
            </Grid>
            <Grid aligned='justified' count='one'>
              <Column><Segment>justified. {makeLipsum()}</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <Grid valigned='top' count='two'>
              <Column><Segment>top</Segment></Column>
              <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
            </Grid>
            <Grid valigned='middle' count='two'>
              <Column><Segment>middle</Segment></Column>
              <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
            </Grid>
            <Grid valigned='bottom' count='two'>
              <Column><Segment>bottom</Segment></Column>
              <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Grid.Column />', () => {
    return (
      <Story title='<Grid.Column />'>
        <Api definition={columnDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Grid>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
              <Column>1</Column><Column>1</Column><Column>1</Column><Column>1</Column>
            </Grid>
          </Example>
          <Example title='[className] gets passed'>
            <Grid>
              <Column className='sixteen wide'><Segment>1</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example>
            <Grid>
              <Column floated='left' className='four wide'><Segment>{makeLipsum(100)}</Segment></Column>
              <Column floated='right' className='four wide'><Segment>{makeLipsum(100)}</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='wide'>
          <Example>
            <Grid>
              <Column wide='one'><Segment>one</Segment></Column>
              <Column wide='fifteen'><Segment>fifteen</Segment></Column>
              <Column wide='two'><Segment>two</Segment></Column>
              <Column wide='fourteen'><Segment>fourteen</Segment></Column>
              <Column wide='three'><Segment>three</Segment></Column>
              <Column wide='thirteen'><Segment>thirteen</Segment></Column>
              <Column wide='four'><Segment>four</Segment></Column>
              <Column wide='twelve'><Segment>twelve</Segment></Column>
              <Column wide='five'><Segment>five</Segment></Column>
              <Column wide='eleven'><Segment>eleven</Segment></Column>
              <Column wide='six'><Segment>six</Segment></Column>
              <Column wide='ten'><Segment>ten</Segment></Column>
              <Column wide='seven'><Segment>seven</Segment></Column>
              <Column wide='nine'><Segment>nine</Segment></Column>
              <Column wide='eight'><Segment>eight</Segment></Column>
              <Column wide='eight'><Segment>eight</Segment></Column>
              <Column wide='sixteen'><Segment>sixteen</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example>
            <Grid count='five'>
            {
              columnDefinition.color.map((value, index) => {
                return (<Column key={index} color={value}>{value}</Column>)
              })
            }
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Grid equalWidth>
              <Column aligned='left'><Segment>{makeLipsum(100)}</Segment></Column>
              <Column aligned='right'><Segment>{makeLipsum(100)}</Segment></Column>
              <Column aligned='center'><Segment>{makeLipsum(100)}</Segment></Column>
              <Column aligned='justified'><Segment>{makeLipsum(100)}</Segment></Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <Grid count='two'>
              <Row>
                <Column valigned='top'><Segment>top</Segment></Column>
                <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
              </Row>
              <Row>
                <Column valigned='middle'><Segment>middle</Segment></Column>
                <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
              </Row>
              <Row>
                <Column valigned='bottom'><Segment>bottom</Segment></Column>
                <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Grid.Row />', () => {
    return (
      <Story title='<Grid.Row />'>
        <Api definition={rowDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Grid>
              <Row>
                <Column>1</Column>
                <Column>2</Column>
                <Column>3</Column>
              </Row>
            </Grid>
          </Example>
          <Example title='[className] gets passed'>
            <Grid>
              <Row className='equal width'>
                <Column><Segment>1</Segment></Column>
                <Column><Segment>2</Segment></Column>
                <Column><Segment>3</Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Grid>
              <Row count='two'>
                <Column><Segment>1</Segment></Column>
                <Column><Segment>2</Segment></Column>
              </Row>
              <Row count='three'>
                <Column><Segment>1</Segment></Column>
                <Column><Segment>2</Segment></Column>
                <Column><Segment>3</Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='equalWidth'>
          <Example>
            <Grid>
              <Row equalWidth>
                <Column><Segment>1</Segment></Column>
                <Column><Segment>2</Segment></Column>
                <Column><Segment>3</Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='stretched'>
          <Example>
            <Grid equalWidth>
              <Row stretched>
                <Column>
                  <Segment>1</Segment>
                  <Segment>2</Segment>
                </Column>
                <Column>
                  <Segment><Image src='images/lindsay.png' /></Segment>
                </Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example>
            <Grid count='one'>
            {
              columnDefinition.color.map((value, index) => {
                return (<Row key={index} color={value}><Column>{value}</Column></Row>)
              })
            }
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='centered'>
          <Example>
            <Grid count='four'>
              <Row centered>
                <Column><Segment>centered</Segment></Column>
                <Column><Segment>centered</Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Grid equalWidth>
              <Row aligned='left'>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
              </Row>
              <Row aligned='right'>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
              </Row>
              <Row aligned='center'>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
              </Row>
              <Row aligned='justified'>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
                <Column><Segment>{makeLipsum(100)}</Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <Grid count='two'>
              <Row valigned='top'>
                <Column><Segment>top</Segment></Column>
                <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
              </Row>
              <Row valigned='middle'>
                <Column><Segment>middle</Segment></Column>
                <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
              </Row>
              <Row valigned='bottom'>
                <Column><Segment>bottom</Segment></Column>
                <Column><Segment><Image src='images/lindsay.png' /></Segment></Column>
              </Row>
            </Grid>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
