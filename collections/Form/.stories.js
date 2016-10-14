import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/comps'
import Form, { formDefinition, fieldDefinition, fieldsDefinition } from './index'
import Button from '../../elements/Button'
import Message from '../../collections/Message'
import Checkbox from '../../modules/Checkbox'

const { Field, Fields } = Form
const _otherProps = {
  action: {
    description: 'If passed (including null), the component will render as a <form />'
  }
}

storiesOf('Form', module)
  .add('<Form />', () => {
    return (
      <Story title='<Form />'>
        <p>By default, this component renders as a {'<div />'}</p>
        <Api definition={formDefinition} otherProps={_otherProps}>
          import Form from 'sui-stateless-components/collections/Form'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Form>
              <Field>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
          <Example title='[className] gets passed'>
            <Form className='mini'>
              <Field>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='action'>
          <p>When passed, component is rendered as {'<form />'}</p>
          <Example>
            <Form action='http://www.google.com/search' target='_blank' method='get'>
              <Field>
                <label>search google</label>
                <input name='q' placeholder='query'/>
              </Field>
              <Button type='submit'>Search</Button>
            </Form>
            <br/>
            <Form action={null} onSubmit={(event) => {
              event.preventDefault()
              alert('I have been submitted')
            }}>
              <Button type='submit'>Submit</Button>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='loading'>
          <Example>
            <Form loading>
              <Field>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='state'>
          <Example title='success'>
            <Form state='success'>
              <Message state='success'>success message</Message>
              <Field>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
          <Example title='warning'>
            <Form state='warning'>
              <Message state='warning'>warning message</Message>
              <Field>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
          <Example title='error'>
            <Form state='error'>
              <Message state='error'>error message</Message>
              <Field>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example.Iterator component={Form} propKey='size' definition={formDefinition} props={{
            children: (value) => {
              return (
                <Field>
                  <label>{value}</label>
                  <input placeholder={value}/>
                </Field>
              )
            }
          }} />
        </Story.Segment>
        <Story.Segment title='equalWidth'>
          <Example>
            <Form equalWidth>
              <Fields>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <div style={{ background: '#000', padding: '1em' }}>
              <Form inverted>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
              </Form>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Form.Field />', () => {
    return (
      <Story title='<Form.Field />'>
        <Api definition={fieldDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Form>
              <Field>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
          <Example title='[className] gets passed'>
            <Form>
              <Field className='required'>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='error'>
          <Example>
            <Form>
              <Field error>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <p>Setting [disabled] to true is purely cosmetic. Don't forget to add [disabled] to the {'<input />'}</p>
          <Example>
            <Form>
              <Field disabled>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='inline'>
          <Example>
            <Form>
              <Field inline>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='wide'>
          <Example>
            <Form>
              <Fields>
                <Field wide='one'>
                  <input placeholder='one wide'/>
                </Field>
                <Field wide='fifteen'>
                  <input placeholder='fifteen wide'/>
                </Field>
              </Fields>
              <Fields>
                <Field wide='two'>
                  <input placeholder='two wide'/>
                </Field>
                <Field wide='fourteen'>
                  <input placeholder='fourteen wide'/>
                </Field>
              </Fields>
              <Fields>
                <Field wide='three'>
                  <input placeholder='three wide'/>
                </Field>
                <Field wide='thirteen'>
                  <input placeholder='thirteen wide'/>
                </Field>
              </Fields>
              <Fields>
                <Field wide='four'>
                  <input placeholder='four wide'/>
                </Field>
                <Field wide='twelve'>
                  <input placeholder='twelve wide'/>
                </Field>
              </Fields>
              <Fields>
                <Field wide='five'>
                  <input placeholder='five wide'/>
                </Field>
                <Field wide='eleven'>
                  <input placeholder='eleven wide'/>
                </Field>
              </Fields>
              <Fields>
                <Field wide='six'>
                  <input placeholder='six wide'/>
                </Field>
                <Field wide='ten'>
                  <input placeholder='ten wide'/>
                </Field>
              </Fields>
              <Fields>
                <Field wide='seven'>
                  <input placeholder='seven wide'/>
                </Field>
                <Field wide='nine'>
                  <input placeholder='nine wide'/>
                </Field>
              </Fields>
              <Fields>
                <Field wide='eight'>
                  <input placeholder='eight wide'/>
                </Field>
                <Field wide='eight'>
                  <input placeholder='eight wide'/>
                </Field>
              </Fields>
              <Field wide='sixteen'>
                <input placeholder='sixteen wide'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='required'>
          <Example>
            <Form>
              <Field required>
                <label>some field</label>
                <input placeholder='some field'/>
              </Field>
            </Form>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Form.Fields />', () => {
    return (
      <Story title='<Form.Fields />'>
        <Api definition={fieldsDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Form>
              <Fields>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
          <Example title='[className] gets passed'>
            <Form>
              <Fields className='inline'>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='error'>
          <Example>
            <Form>
              <Fields error>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <p>Setting [disabled] to true is purely cosmetic. Don't forget to add [disabled] to the {'<input />'}</p>
          <Example>
            <Form>
              <Fields disabled>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='equalWidth'>
          <Example>
            <Form>
              <Fields equalWidth>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='inline'>
          <Example>
            <Form>
              <Fields inline>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='required'>
          <Example>
            <Form>
              <Fields required>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Form>
              <Fields count='two'>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
              </Fields>
              <Fields count='four'>
                <Field>
                  <label>field one</label>
                  <input placeholder='field one'/>
                </Field>
                <Field>
                  <label>field two</label>
                  <input placeholder='field two'/>
                </Field>
                <Field>
                  <label>field three</label>
                  <input placeholder='field three'/>
                </Field>
                <Field>
                  <label>field four</label>
                  <input placeholder='field four'/>
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
        <Story.Segment title='grouped'>
          <Example>
            <Form>
              <Fields grouped>
                <Field>
                  <Checkbox id='groupedRadio1' type='radio' name='foo' label='first option' />
                </Field>
                <Field>
                  <Checkbox id='groupedRadio2' type='radio' name='foo' label='second option' />
                </Field>
                <Field>
                  <Checkbox id='groupedRadio3' type='radio' name='foo' label='third option' />
                </Field>
              </Fields>
            </Form>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
