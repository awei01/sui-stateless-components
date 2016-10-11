import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/comps'
import Button, { buttonOptions, contentOptions, Buttons, buttonsOptions } from './index'
import { Label } from '../../elements/Label'
import { Icon } from '../../elements/Icon'
import { Segment } from '../../elements/Segment'

const _path = 'sui-stateless-components/elements/Button'

storiesOf('Button', module)
  .add('<Button />', () => {
    return (
      <Story title='<Button />'>
        <Api options={buttonOptions}>
          import Button from '{_path}'
        </Api>
        <Story.Segment>
          <Example>
            <Button>default</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <p>If [href] is passed, the component will render as an {'<a />'} element</p>
          <Example>
            <Button href='http://www.google.com' target='_blank'>this is a link</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='emphasis'>
          <Example.Options component={Button} propKey='emphasis' options={buttonOptions} />
        </Story.Segment>
        <Story.Segment title='animated'>
          <p>Using the [animated] prop renders component as a {'<div>'} element</p>
          <Example>
            <Button animated='vertical'>
              <Button.Content visible>visible content</Button.Content>
              <Button.Content visible={false}>hidden content</Button.Content>
            </Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='labeled'>
          <p>Using the [animated] prop renders component as a {'<div>'} element</p>
          <Example>
            <Button labeled>
              <Button>button</Button>
              <Label basic>labeled</Label>
            </Button>
            <Button labeled='left'>
              <Label basic>left labeled</Label>
              <Button>button</Button>
            </Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='icon'>
          <Example>
            <Button icon>
              <Icon glyph='user' />
            </Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='labeled icon'>
          <Example>
            <Button labeled icon>
              <Icon glyph='user' />
              labeled
            </Button>
            <Button labeled='right' icon>
              <Icon glyph='user' />
              right labeled
            </Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='basic'>
          <Example>
            <Button basic>basic</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <Button inverted>inverted</Button>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <Button active>active</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <p>This prop will actually set the [disabled] attribute on the underlying {'<button/>'}</p>
          <Example>
            <Button disabled>disabled</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='loading'>
          <Example>
            <Button loading>loading</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='social'>
          <p>You will need to provide the {'<Icon glyph />'} and appropriate children</p>
          <Example.Options component={Button} propKey='social' options={buttonOptions} makeChildren={(value) => {
              return [<Icon key={value} glyph={value}/>, value]
            }} />
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Options component={Button} propKey='size' options={buttonOptions} />
        </Story.Segment>
        <Story.Segment title='floated'>
          <Example.Options component={Button} propKey='floated' options={buttonOptions} />
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Options component={Button} propKey='color' options={buttonOptions} />
        </Story.Segment>
        <Story.Segment title='compact'>
          <Example>
            <Button compact>compact</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='toggle'>
          <p>To toggle this on, set toggle='active'</p>
          <Example>
            <Button toggle>toggle</Button>
            <Button toggle='active'>active toggle</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='hint'>
          <Example.Options component={Button} propKey='hint' options={buttonOptions} />
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <Button fluid>fluid</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='circular'>
          <Example>
            <Button circular>1</Button>
            <Button circular>2</Button>
            <Button circular>3</Button>
          </Example>
        </Story.Segment>
        <Story.Segment title='attached'>
          <p>When prop attached=[ 'top' | 'bottom' ] the component renders as a {'<div>'} element</p>
          <Example>
            <Button attached='top'>top attached</Button>
            <Segment attached />
            <Button attached='bottom'>bottom attached</Button>
          </Example>
          <Example>
            <Button attached='left'>left attached</Button>
            <Button attached='right'>right attached</Button>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Button.Content />', () => {
    return (
      <Story title='<Button.Content />'>
        <p>
          This component is to be used within {'<Button animated />'}
        </p>
        <Api options={contentOptions} />
        <Story.Segment title='animated'>
          <Example>
            <Button animated>
              <Button.Content visible>visible content</Button.Content>
              <Button.Content visible={false}>hidden content</Button.Content>
            </Button>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Buttons />', () => {
    return (
      <Story title='<Buttons />'>
        <Api options={buttonsOptions}>
          {'import { Buttons } from \'' + _path + '\''}
        </Api>
        <Story.Segment>
          <Example>
            <Buttons>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='icon'>
          <Example>
            <Buttons icon>
              <Button><Icon glyph='align left' /></Button>
              <Button><Icon glyph='align center' /></Button>
              <Button><Icon glyph='align right' /></Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='attached'>
          <Example>
            <Buttons attached='top'>
              <Button>one</Button>
              <Button>two</Button>
            </Buttons>
            <Segment attached />
            <Buttons attached='bottom'>
              <Button>three</Button>
              <Button>four</Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='vertical'>
          <Example>
            <Buttons vertical>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
              <Button>four</Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='labeled icon'>
          <Example>
            <Buttons vertical labeled icon>
              <Button><Icon glyph='user' />user</Button>
              <Button><Icon glyph='close' />close</Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Buttons count='three'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='basic'>
          <Example>
            <Buttons basic>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example>
            <Buttons color='red'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </Buttons>
            <Buttons color='blue'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </Buttons>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example>
            <Buttons size='small'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </Buttons>
            <Buttons size='huge'>
              <Button>one</Button>
              <Button>two</Button>
              <Button>three</Button>
            </Buttons>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Buttons.Or />', () => {
    return (
      <Story title='<Buttons.Or />'>
        <p>This component is to be used within {'<Buttons />'}</p>
        <Story.Segment>
          <Example>
            <Buttons>
              <Button>this</Button>
              <Buttons.Or />
              <Button>that</Button>
            </Buttons>
          </Example>
        </Story.Segment>
      </Story>
    )
  })

