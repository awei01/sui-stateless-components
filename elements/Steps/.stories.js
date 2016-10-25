import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Steps, { stepsDefinition, stepDefinition } from './index'
import Icon from '../../elements/Icon'
import Segment from '../../elements/Segment'

const Step = Steps.Step
const { Content, Title, Description } = Step
const _otherProps = {
  href: {
    description: 'When provided, this component will render as an <a />'
  }
}

storiesOf('Steps', module)
  .add('<Steps />', () => {
    return (
      <Story title='<Steps />'>
        <Api definition={stepsDefinition}>
          import Steps from 'sui-stateless-components/elements/Steps'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Steps>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
          <Example title='[className] gets passed'>
            <Steps className='vertical'>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='ordered'>
          <Example>
            <Steps ordered>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='vertical'>
          <Example>
            <Steps vertical>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <Steps fluid vertical>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='attached'>
          <Example>
            <Steps attached='top'>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
            <Segment attached />
            <Steps attached='bottom'>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Steps count='four'>
              <Step>1</Step>
              <Step>2</Step>
              <Step>3</Step>
              <Step>4</Step>
            </Steps>
            <Steps count='eight'>
              <Step>1</Step>
              <Step>2</Step>
              <Step>3</Step>
              <Step>4</Step>
              <Step>5</Step>
              <Step>6</Step>
              <Step>7</Step>
              <Step>8</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Steps} propKey='size' definition={stepsDefinition} props={{
            children: (value) => { return (<Step>{value}</Step>) }
          }} />
        </Story.Segment>
      </Story>
    )
  })
  .add('<Steps.Step />', () => {
    return (
      <Story title='<Steps.Step />'>
        <p>This component is to be used within {'<Steps />'}</p>
        <Api definition={stepDefinition} otherProps={_otherProps} />
        <Story.Segment title='(default)'>
          <Example>
            <Steps>
              <Step>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
          <Example title='[className] gets passed'>
            <Steps>
              <Step className='active'>step one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <Example>
            <Steps>
              <Step href='http://www.google.com' target='_blank'>linked step</Step>
              <Step href={null}>looks like a link</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <Steps>
              <Step active>active one</Step>
              <Step>step two</Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='completed'>
          <Example>
            <Steps>
              <Step completed>
                <Icon glyph='user' />
                <Content>completed step</Content>
              </Step>
              <Step>
                <Icon glyph='user' />
                <Content>step two</Content>
              </Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <p>When [disabled] is true, the component will render as a {'<div />'} even if [href] is passed</p>
          <Example>
            <Steps>
              <Step disabled href='http://www.google.com' target='_blank'>disabled href step</Step>
              <Step disabled>disabled step</Step>
            </Steps>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Steps.Step.Content />', () => {
    return (
      <Story title='<Steps.Step.Content />'>
        <p>This component is to be used within {'<Steps.Step />'} and helps with content alongside an {'<Icon />'}</p>
        <Api otherProps={{
          title: {
            description: 'If passed, this will render <Title />. This prop is ignored if [children] is passed'
          }
          description: {
            description: 'If passed, this will render <Description />. This prop is ignored if [children] is passed'
          }
        }} />
        <Story.Segment title='(default)'>
          <Example>
            <Steps>
              <Step>
                <Icon glyph='user' />
                <Content>
                  <Title>this is the title</Title>
                  <Description>this is the description</Description>
                </Content>
              </Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='title'>
          <Example>
            <Steps>
              <Step>
                <Icon glyph='user' />
                <Content title='title passed via props' />
              </Step>
            </Steps>
          </Example>
        </Story.Segment>
        <Story.Segment title='description'>
          <Example>
            <Steps>
              <Step>
                <Icon glyph='user' />
                <Content description='description passed via props' />
              </Step>
            </Steps>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Steps.Step.Title />', () => {
    return (
      <Story title='<Steps.Step.Title />'>
        <p>This component is to be used within {'<Steps.Step />'}</p>
        <Story.Segment title='(default)'>
          <Example>
            <Steps>
              <Step>
                <Title>this is the title</Title>
                <Description>this is the description</Description>
              </Step>
            </Steps>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Steps.Step.Description />', () => {
    return (
      <Story title='<Steps.Step.Description />'>
        <p>This component is to be used within {'<Steps.Step />'}</p>
        <Story.Segment title='(default)'>
          <Example>
            <Steps>
              <Step>
                <Title>this is the title</Title>
                <Description>this is the description</Description>
              </Step>
            </Steps>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
