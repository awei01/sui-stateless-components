import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeSizeStory, makePassesPropsStory, makeLipsum, extractOptionsValues, extractCountsValues } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { Form, FORM_STATES, Fields, FIELDS_COUNTS, Field, Checkbox, Radio } from './index'
import { Button } from '../../elements/Button'
import { Message } from '../../collections/Message'

const _handleSubmit = (event) => {
  event.preventDefault()
  const act = action('Form submitted');
  act(event)
}

const _makeFields = (fields, props) => {
  fields = fields || ['First Name', 'Last Name']
  return fields.map((field) => {
    return (
      <Field {...props} key={field}>
        <label>{field}</label>
        <input type='text' placeholder={field}/>
      </Field>
    )
  })
}

storiesOf('Form', module)
  .add('<Form>', () => {
    return (
      <Story examples='<Form>{ content }</Form>'
        notes='Form renders a <form> tag'>
        <Form onSubmit={_handleSubmit}>
          {_makeFields()}
          <Button type='submit'>Submit</Button>
        </Form>
      </Story>
    )
  })
  .add('<Form> size', makeSizeStory(Form, { props: {
    children: (value) => {
      return _makeFields([value])
    },
    onSubmit: _handleSubmit,
    style: { marginBottom: '1em' }
  }}))
  .add('<Form> equal', () => {
    return (
      <Story examples='<Form equal><Fields>{ content }</Fields></Form>' showToggleNote>
        <Form equal>
          <Fields>
           {_makeFields()}
          </Fields>
        </Form>
      </Story>
    )
  })
  .add('<Form> inverted', () => {
    return (
      <Story examples='<Form inverted>{ content }</Form>' style={{ padding: '1em', backgroundColor: '#666' }}>
        <Form inverted>
          {_makeFields()}
        </Form>
      </Story>
    )
  })
  .add('<Form> loading', () => {
    return (
      <Story examples='<Form loading>{ content }</Form>'>
        <Form loading>
          {_makeFields()}
        </Form>
      </Story>
    )
  })
  .add('<Form> state', () => {
    const _makeMessages = () => {
      const formats = ['success', 'error', 'warning']
      return formats.map((format) => {
        return (<Message key={format} format={format}>{format} message</Message>)
      })
    }
    const states = extractOptionsValues(FORM_STATES)
    return (
      <Story examples={'<Form state=[ ' + states + ' ]><Message/></Form>'}
        notes='Each form has three <Message>. Each <Message> has a different [format]. Only the <Message format> matching the <Form state> will show.'>
        <Form state="success">
          <h3>success form</h3>
          {_makeMessages()}
        </Form>
        <Form state="error">
          <h3>error form</h3>
          {_makeMessages()}
        </Form>
        <Form state="warning">
          <h3>warning form</h3>
          {_makeMessages()}
        </Form>
      </Story>
    )
  })
  .add('<Form> passes .className and other props', makePassesPropsStory(Form, { props: {
      className: "mini",
      onClick: action('Form was clicked'),
      children: _makeFields(['First Name'])
  }}))
  .add('<Fields>', () => {
    return (
      <Story examples='<Form><Fields>{ content }</Fields></Form>'>
        <Form onSubmit={_handleSubmit}>
          <Fields>
            {_makeFields()}
          </Fields>
        </Form>
      </Story>
    )
  })
  .add('<Fields> fields', () => {
    const fields = extractOptionsValues(FIELDS_COUNTS)
    return (
      <Story examples={'<Form><Fields fields=[ ' + fields + ']>{ content }</Fields></Form>'} showToggleNote>
        <Form onSubmit={_handleSubmit}>
          <h4>two fields</h4>
          <Fields fields="two">
            {_makeFields(['one', 'two'])}
          </Fields>
          <h4>four fields</h4>
          <Fields fields="four">
            {_makeFields(['one', 'two', 'three', 'four'])}
          </Fields>
          <h4>ten fields</h4>
          <Fields fields="ten">
            {_makeFields(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'])}
          </Fields>
        </Form>
      </Story>
    )
  })
  .add('<Fields> grouped', () => {
    return (
      <Story examples='<Form><Fields grouped>{ content }</Fields></Form>'>
        <Form onSubmit={_handleSubmit}>
          <Fields grouped>
            <Checkbox id='checkA' label='Checkbox A'/>
            <Checkbox id='checkB' label='Checkbox B'/>
            <Checkbox id='checkC' label='Checkbox C'/>
            <Checkbox id='checkD' label='Checkbox D'/>
          </Fields>
          <Fields grouped>
            <Radio name='radios' id='radioA' label='Radio A'/>
            <Radio name='radios' id='radioB' label='Radio B'/>
          </Fields>
        </Form>
      </Story>
    )
  })
  .add('<Fields> equal', () => {
    return (
      <Story examples='<Form><Fields equal>{ content }</Fields></Form>' showToggleNote>
        <Form onSubmit={_handleSubmit}>
          <Fields equal>
            {_makeFields(['one', 'two'])}
          </Fields>
        </Form>
      </Story>
    )
  })
  .add('<Fields> inline', () => {
    return (
      <Story examples='<Form><Fields inline>{ content }</Fields></Form>'>
        <Form onSubmit={_handleSubmit}>
          <Fields inline>
            <label>Name</label>
            <Field><input type='text' placeholder='First'/></Field>
            <Field><input type='text' placeholder='Last'/></Field>
          </Fields>
        </Form>
      </Story>
    )
  })
  .add('<Fields> passes .className and other props', () => {
    return (
      <Story examples='<Form><Fields className="inline" onClick={function}>{ content }</Fields></Form>'>
        <Form>
          <Fields className='inline' onClick={action('Fields was clicked')}>{_makeFields()}</Fields>
        </Form>
      </Story>
    )
  })
  .add('<Field> inline', () => {
    return (
      <Story examples='<Form><Field inline/></Form>'>
        <Form onSubmit={_handleSubmit}>
          {_makeFields(null, { inline: true })}
        </Form>
      </Story>
    )
  })
  .add('<Field> wide', () => {
    return (
      <Story examples={'<Form><Fields><Field wide=[ ' + extractCountsValues() + ' ]/></Fields></Form>'} showToggleNote>
        <Form onSubmit={_handleSubmit}>
          <h4>eight wide</h4>
          <Fields>
            {_makeFields(null, { wide: "eight" })}
          </Fields>
          <h4>four wide</h4>
          <Fields>
            {_makeFields(['One', 'Two', 'Three', 'Four'], { wide: "four" })}
          </Fields>
        </Form>
      </Story>
    )
  })
  .add('<Field> required', () => {
    return (
      <Story examples='<Form><Field required></Form>'>
        <Form onSubmit={_handleSubmit}>
          {_makeFields(null, { required: true })}
        </Form>
      </Story>
    )
  })
  .add('<Field> error', () => {
    return (
      <Story examples='<Form><Field error></Form>'>
        <Form onSubmit={_handleSubmit}>
          {_makeFields(null, { error: true })}
        </Form>
      </Story>
    )
  })
  .add('<Field> disabled', () => {
    return (
      <Story examples='<Form><Field disabled/></Form>'
        notes={[
          'This is purely cosmetic and does not actually disabled the input.',
          'Use tab to focus on a field and enter text.'
        ]}>
        <Form onSubmit={_handleSubmit}>
          {_makeFields(null, { disabled: true })}
        </Form>
      </Story>
    )
  })
  .add('<Field> passes .className and other props', () => {
    return (
      <Story examples='<Form><Field className="required" onClick={function}/></Form>'>
        <Form>
          <Field className='required' onClick={action('Field was clicked')}>
            <label>Required Field</label>
            <input type='text' placeholder='Field is clickable'/>
          </Field>
        </Form>
      </Story>
    )
  })
  .add('<Checkbox>', () => {
    return (
      <Story examples='<Form><Checkbox [id={id}] label={label}/></Form>'
        notes={[
          'This component wraps the checkbox with <Field> and <div>',
          'This component requires a label',
          'Providing an id will make the label clikcable'
        ]}>
         <Form onSubmit={_handleSubmit}>
          <Checkbox id='check1' label='Checkbox 1'/>
          <Checkbox id='check2' label='Checkbox 2'/>
        </Form>
      </Story>
    )
  })
  .add('<Checkbox> format', () => {
    return (
      <Story examples='<Form><Checkbox format=[ "slider" | "toggle" ]/></Form>'>
         <Form onSubmit={_handleSubmit}>
          <Checkbox id='slider1' label='Slider 1' format='slider'/>
          <Checkbox id='slider2' label='Slider 2' format='slider'/>
          <Checkbox id='toggle1' label='Toggle 1' format='toggle'/>
          <Checkbox id='toggle2' label='Toggle 2' format='toggle'/>
        </Form>
      </Story>
    )
  })
  .add('<Checkbox> passes other props', () => {
    return (
      <Story examples={[
            '<Form><Checkbox error/></Form>',
            '<Form><Checkbox disabled/></Form>',
            '<Form><Checkbox required/></Form>',
            '<Form><Checkbox onChange={ function }/></Form>',
          ]} notes={[
            'Props [disabled, required] get passed to the <Field>',
            'Prop [disabled] gets passed to <Field> and <input>',
            'All other props get passed to <input>'
          ]}
        >
        <Form>
          <Checkbox id='errorCheckbox' error label='Error Checkbox'/>
          <Checkbox id='disabledCheckbox' disabled label='Disabled Checkbox'/>
          <Checkbox id='requiredCheckbox' required label='Required Checkbox'/>
          <Checkbox id='onClickCheckbox' onClick={ action('Checkbox was clickd') } label='onClick Checkbox'/>
        </Form>
      </Story>
    )
  })
  .add('<Radio>', () => {
    return (
      <Story examples='<Form><Radio [id={id}] label={label}/></Form>'
        notes={[
          'This component wraps the checkbox with <Field> and <div>',
          'This component requires a label',
          'Providing an id will make the label clikcable'
        ]}>
         <Form onSubmit={_handleSubmit}>
          <Radio name='radios' id='radio1' label='Radio 1'/>
          <Radio name='radios' id='radio2' label='Radio 2'/>
        </Form>
      </Story>
    )
  })
  .add('<Radio> passes other props', () => {
    return (
      <Story examples={[
            '<Form><Radio error/></Form>',
            '<Form><Radio disabled/></Form>',
            '<Form><Radio required/></Form>',
            '<Form><Radio onChange={ function }/></Form>',
          ]} notes={[
            'Props [disabled, required] get passed to the <Field>',
            'Prop [disabled] gets passed to <Field> and <input>',
            'All other props get passed to <input>'
          ]}
        >
       <Form>
          <Radio name='radios' id='errorRadio' error label='Error Radio'/>
          <Radio name='radios' id='disabledRadio' disabled label='Disabled Radio'/>
          <Radio name='radios' id='requiredRadio' required label='Required Radio'/>
          <Radio name='radios' id='onChangeRadio' onClick={ action('Radio was clicked') } label='onClick Radio'/>
        </Form>
      </Story>
    )
  })
