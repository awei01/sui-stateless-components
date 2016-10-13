import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Label, { labelDefinition, Labels, labelsDefinition } from './index'
import Image from '../../elements/Image'
import Segment from '../../elements/Segment'
import { Grid, Column } from '../../collections/Grid'

const _path = 'sui-stateless-components/elements/Label'

const _otherProps = {
  href: {
    description: 'If href is passed, the component will render as an <a /> tag'
  }
}

storiesOf('Label', module)
  .add('<Label />', () => {
    return (
      <Story title='<Label />'>
        <Api definition={labelDefinition} otherProps={_otherProps}>
          import Label from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <p>Component renders as a {'<div />'} tag by default</p>
          <Example>
            <Label>label</Label>
          </Example>
          <Example title='[className] gets passed'>
            <Label className='red'>red label</Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>When href is passed, component will render as an {'<a />'} tag</p>
          <Example>
            <Label href='http://www.google.com' target='_blank'>links to href</Label>
            <Label href={null}>looks like a link</Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='image'>
          <Example>
            <Label image>
              <Image src='images/jenny.jpg' />
              image
            </Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='pointing'>
          <Example>
            <Label pointing>(true)</Label>
            <Label pointing='left'>left</Label>
            <Label pointing='right'>right</Label>
            <Label pointing='below'>below</Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='corner'>
          <Example>
            <div style={{ position: 'relative', height: '100px', background: '#666' }}>
              <Label corner>(true)</Label>
              <Label corner='left'>left</Label>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='tag'>
          <Example>
            <Label tag>tag</Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='ribbon'>
          <Example>
            <Segment>
              <Label ribbon='right'>right</Label>
            </Segment>
            <Segment>
              <Label ribbon>(true)</Label>
            </Segment>
          </Example>
        </Story.Segment>
        <Story.Segment title='attached'>
          <Example title='top left/right'>
            <Grid columns='two'>
              <Column>
                <Segment>
                  <Label attached='top left'>top left</Label>
                  {makeLipsum(200)}
                </Segment>
              </Column>
              <Column>
                <Segment>
                  <Label attached='top right'>top right</Label>
                  {makeLipsum(200)}
                </Segment>
              </Column>
            </Grid>
          </Example>
          <Example title='top/bottom'>
            <Grid columns='two'>
              <Column>
                <Segment>
                  <Label attached='top'>top</Label>
                  {makeLipsum(200)}
                </Segment>
              </Column>
              <Column>
                <Segment>
                  <Label attached='bottom'>bottom</Label>
                  {makeLipsum(200)}
                </Segment>
              </Column>
            </Grid>
          </Example>
          <Example title='bottom left/right'>
            <Grid columns='two'>
              <Column>
                <Segment>
                  <Label attached='bottom left'>bottom left</Label>
                  {makeLipsum(200)}
                </Segment>
              </Column>
              <Column>
                <Segment>
                  <Label attached='bottom right'>bottom right</Label>
                  {makeLipsum(200)}
                </Segment>
              </Column>
            </Grid>
          </Example>
        </Story.Segment>
        <Story.Segment title='horizontal'>
          <Example>
            <Label horizontal>horizontal</Label> some content here
          </Example>
        </Story.Segment>
        <Story.Segment title='floating'>
          <Example>
            <div style={{ position: 'relative', margin: '0 4em', border: '1px solid #ccc', padding: '1em' }}>
              <Label floating>floating</Label>
              {makeLipsum(200)}
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='circular'>
          <Example>
            <Label circular>1</Label>
            <Label circular>2</Label>
            <Label circular>3</Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='basic'>
          <Example>
            <Label basic>basic</Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Label} propKey='color' definition={labelDefinition} />
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Label} propKey='size' definition={labelDefinition} />
        </Story.Segment>
      </Story>
    )
  })
  .add('<Label.Detail />', () => {
    return (
      <Story title='<Label.Detail />'>
        <Api otherProps={_otherProps}/>
        <Story.Segment title='(default)'>
          <p>Component renders as a {'<div />'} tag by default</p>
          <Example>
            <Label>
              label
              <Label.Detail>detail</Label.Detail>
            </Label>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>When href is passed, component will render as an {'<a />'} tag</p>
          <Example>
            <Label>
              label
              <Label.Detail href='http://www.google.com' target='_blank'>detail links to href</Label.Detail>
            </Label>
            <Label>
              label
              <Label.Detail href={null}>detail looks like a link</Label.Detail>
            </Label>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Labels />', () => {
    return (
      <Story title='<Labels />'>
        <Api definition={labelsDefinition}>
          {'import { Label } from \'' + _path + '\''}
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Labels>
              <Label>one</Label>
              <Label>two</Label>
              <Label>three</Label>
            </Labels>
          </Example>
          <Example title='[className] gets passed'>
            <Labels className='red'>
              <Label>one</Label>
              <Label>two</Label>
              <Label>three</Label>
            </Labels>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Labels} propKey='size' definition={labelsDefinition} props={{
            children: () => {
              return [<Label key='one'>one</Label>, <Label key='two'>two</Label>, <Label key='three'>three</Label>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Labels} propKey='color' definition={labelsDefinition} props={{
            children: () => {
              return [<Label key='one'>one</Label>, <Label key='two'>two</Label>, <Label key='three'>three</Label>]
            }
          }} />
        </Story.Segment>
        <Story.Segment title='tag'>
          <Example>
            <Labels tag>
              <Label>one</Label>
              <Label>two</Label>
              <Label>three</Label>
            </Labels>
          </Example>
        </Story.Segment>
        <Story.Segment title='circular'>
          <Example>
            <Labels circular>
              <Label>1</Label>
              <Label>2</Label>
              <Label>3</Label>
            </Labels>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
