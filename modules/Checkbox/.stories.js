import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/comps'
import Checkbox, { checkboxDefinition } from './index'

const _otherProps = {
  children: {
    description: 'If passed, this component will not produce the <input /> or <label /> and will wrap your children with a <div />'
  },
  label: {
    description: 'Value for the auto-generated <label />'
  },
  id: {
    description: 'If passed and [label] is provided, the label will activate the control'
  }
}
const _noop = () => {}

storiesOf('Checkbox', module)
  .add('<Checkbox />', () => {
    return (
      <Story title='<Checkbox />'>
        <p>By default component generates the markup for a checkbox or radio, including the {'<input />'} control and {'<label />'}</p>
        <Api definition={checkboxDefinition} otherProps={_otherProps}>
          import Checkbox from 'sui-stateless-components/modules/Checkbox'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Checkbox />
          </Example>
          <Example title='[className] gets passed'>
            <Checkbox className='slider' />
          </Example>
          <Example title='[name, value] get passed'>
            <Checkbox name='foo' value='bar' onChange={(event) => {
              const { target } = event
              alert(target.name + ' = ' + target.value)
            }} />
          </Example>
          <Example title='[checked, disabled] get passed'>
            <Checkbox checked onChange={_noop} />
            <Checkbox disabled />
          </Example>
        </Story.Segment>
        <Story.Segment title='children'>
          <Example>
            <Checkbox>
              <input type='checkbox' checked onChange={_noop}/>
              <label>this is the label</label>
            </Checkbox>
          </Example>
        </Story.Segment>
        <Story.Segment title='label'>
          <Example>
            <Checkbox label='label from props' />
          </Example>
        </Story.Segment>
        <Story.Segment title='id'>
          <p>When provided with [label], allows clicking on label to change control's state</p>
          <Example>
            <Checkbox id='idExample' label='label from props' />
          </Example>
        </Story.Segment>
        <Story.Segment title='type'>
          <p>By default, [type] is set to 'checkbox'</p>
          <Example>
            <Checkbox />
            <Checkbox type='radio' />
          </Example>
        </Story.Segment>
        <Story.Segment title='format'>
          <p>If [type] is 'radio', [format] will be ignored</p>
          <Example>
            <Checkbox format='slider' />
            <Checkbox format='toggle' />
            <Checkbox format='slider' type='radio' />
          </Example>
        </Story.Segment>
        <Story.Segment title='readOnly'>
          <Example>
            <Checkbox id='readOnlyCheckboxOn' readOnly checked onChange={_noop} label='read only checked checkbox' />
            <br/>
            <Checkbox id='readOnlyCheckboxOff' readOnly label='read only checkbox' />
            <br/>
            <Checkbox id='readOnlyRadio' type='radio' readOnly label='read only radio' />
          </Example>
        </Story.Segment>
        <Story.Segment title='fitted'>
          <Example>
            <Checkbox fitted />
            <Checkbox fitted />
          </Example>
        </Story.Segment>
      </Story>
    )
  })

