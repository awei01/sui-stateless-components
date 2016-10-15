import React, { Component, PropTypes } from 'react'
import reactToJsx from 'react-to-jsx'
import Menu from '../collections/Menu'
import Segment from '../elements/Segment'
import Icon from '../elements/Icon'
import Header from '../elements/Header'
import Table from '../collections/Table'
import Divider from '../elements/Divider'
const { Item } = Menu
const { Tr, Th, Td } = Table

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus metus, consectetur et eros at, maximus rutrum magna. Aliquam ullamcorper, magna vel pulvinar finibus, neque augue placerat libero, vel auctor mi ligula nec risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis velit luctus congue sagittis. Etiam vel sollicitudin velit. Aliquam finibus sodales eros eu sollicitudin. Morbi commodo lorem urna, ac condimentum magna ullamcorper vitae. Sed ac dapibus dui. Aenean quis faucibus purus, ac volutpat metus. Phasellus semper sapien et lobortis interdum. Donec scelerisque orci massa, in hendrerit neque hendrerit in. Nullam porttitor ornare massa sed varius.'
export const makeLipsum = (chars) => {
  return LIPSUM.substring(0, chars)
}

export class Story extends Component {
  render () {
    const { title, children } = this.props
    return (
      <div>
        <Menu id='_top' borderless inverted size='massive' fixed='top' style={{ position: 'relative' }}>
          <Item header>
            sui-stateless-components
          </Item>
          <Item href='https://github.com/awei01/sui-stateless-components' right><Icon glyph='github' /></Item>
        </Menu>
        <Segment basic>
          <Header size='huge'>{title}</Header>
          {children}
        </Segment>
      </div>
    )
  }
}

const StorySegment = ({ title, children }) => {
  return (
    <div id={title} style={{ marginTop: '2em', borderBottom: '1px solid #ccc' }}>
      <a style={{ float: 'right' }} href='#_top'>back to top</a>
      { title ? (<Header size='large'>{title}</Header>) : null }
      {children}
    </div>
  )
}
StorySegment.displayName = 'Story.Segement'
Story.Segment = StorySegment

const _extractValues = (values, options) => {
  options = options || {}
  let { delimiter, separator } = options
  delimiter = typeof delimiter === 'undefined' ? '"' : delimiter
  separator = separator || ', '
  const formatted = values.map((value) => {
    if (typeof value === 'string') {
      return `${delimiter}${value}${delimiter}`
    }
    return value.toString()
  })
  return formatted.join(separator)
}
const _extractDefinition = (definition) => {
  let isRequired = false
  let values = true
  if (Array.isArray(definition)) {
    // the values are the definition
    values = definition
  } else if (typeof definition === 'object') {
    isRequired = definition.isRequired
    values = definition.values || values
  }
  return { values, isRequired }
}

export const ApiRow = ({ isRequired, propKey, description }) => {
  return (
    <Tr state={isRequired && 'error'}>
      <Td><a href={'#' + propKey}>{propKey}</a></Td>
      <Td>{isRequired && '(required)'} {description}</Td>
    </Tr>
  )
}

// Api component
export const Api = ({ definition, otherProps, children }) => {
  definition = definition || {}
  otherProps = otherProps || {}
  return (
    <div>
      <pre>{children}</pre>
      <Table definition stackable={false} compact='very'>
        <tbody>
        {
          Object.keys(otherProps).map((key, index) => {
            const { description, isRequired } = otherProps[key]
            return (
              <ApiRow key={index} propKey={key} isRequired={isRequired} description={description} />
            )
          })
        }
        {
          Object.keys(definition).map((key, index) => {
            let { values, isRequired } = _extractDefinition(definition[key])
            if (values === true) {
              values = 'boolean'
            } else {
              values = _extractValues(values)
            }
            return (
              <ApiRow key={index} propKey={key} description={values} />
            )
          })
        }
        </tbody>
      </Table>
    </div>
  )
}

const _extractJsx = (children) => {
  if (!Array.isArray(children)) {
    children = [children]
  }
  return children.map((child) => {
    return reactToJsx(child, { indent: '    ' })
  })
}
export class Example extends Component {
  render () {
    let { title, children, code } = this.props
    code = code || _extractJsx(children)
    return (
      <Segment format='vertical'>
        { title ? (<Header>{title}</Header>) : null }
        <div>{children}</div>
        <Divider clearing hidden/>
        <Code>{code}</Code>
      </Segment>
    )
  }
}
export const Code = ({ children }) => {
  return (
    <div style={{ background: '#333', color: '#eee', marginBottom: '1em', position: 'relative' }}>
      <div style={{ padding: '.25em .5em', background: '#666', color: '#fff', position: 'absolute', top: 0, right: 0 }}>
        Code
      </div>
      <pre style={{ padding: '2em' }}>{children}</pre>
    </div>
  )
}

const ExampleIterator = ({ component, propKey, definition, props }) => {
  props = props || {}
  const { children, ...rest } = props
  const { values } = _extractDefinition(definition[propKey])
  const components = values.map((value, index) => {
    let result = value
    if (typeof children === 'function') {
      result = children(value)
    } else if (typeof children !== 'undefined') {
      result = children
    }

    return React.createElement(component, {
      ...rest,
      [propKey]: value,
      key: index
    }, result)
  })
  const code = reactToJsx(components[0])
  return (
    <Example code={code}>
      {components}
    </Example>
  )
}
ExampleIterator.displayName = 'Example.Iterator'
ExampleIterator.propTypes = {
  component: PropTypes.func.isRequired,
  propKey: PropTypes.string.isRequired,
  definition: PropTypes.object.isRequired,
  props: PropTypes.object
}
Example.Iterator = ExampleIterator
