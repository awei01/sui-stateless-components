import React, { Component, PropTypes } from 'react'
import reactToJsx from 'react-to-jsx'

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus metus, consectetur et eros at, maximus rutrum magna. Aliquam ullamcorper, magna vel pulvinar finibus, neque augue placerat libero, vel auctor mi ligula nec risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis velit luctus congue sagittis. Etiam vel sollicitudin velit. Aliquam finibus sodales eros eu sollicitudin. Morbi commodo lorem urna, ac condimentum magna ullamcorper vitae. Sed ac dapibus dui. Aenean quis faucibus purus, ac volutpat metus. Phasellus semper sapien et lobortis interdum. Donec scelerisque orci massa, in hendrerit neque hendrerit in. Nullam porttitor ornare massa sed varius.'
export const makeLipsum = (chars) => {
  return LIPSUM.substring(0, chars)
}

export class Story extends Component {
  render () {
    const { title, children } = this.props
    return (
      <div>
        <a name='top'></a>
        <div style={{background: '#ccc'}}>
          <h3>sui-stateless-components</h3>
        </div>
        <div style={{margin: '1em'}}>
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    )
  }
}

const StorySegment = ({ title, children }) => {
  return (
    <div id={title} style={{ marginTop: '2em', borderBottom: '1px solid #ccc' }}>
      <a style={{ float: 'right' }} href='#top'>back to top</a>
      { title ? (<h2>{title}</h2>) : null }
      {children}
    </div>
  )
}
StorySegment.displayName = 'Story.Segement'
Story.Segment = StorySegment

// Api component
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


export const Api = ({ definition, overridden, otherProps, children }) => {
  overridden = overridden || {}
  otherProps = otherProps || {}
  return (
    <div>
      <pre>{children}</pre>
      <table>
        <thead>
          <tr>
            <th colSpan={3} style={{ background: '#eee' }}>Component props API</th>
          </tr>
        </thead>
        <tbody>
        {
          Object.keys(otherProps).map((key, index) => {
            const { description, isRequired } = otherProps[key]
            return (
              <tr key={index}>
                <th style={{ textAlign: 'left', verticalAlign: 'top' }}><a href={'#' + key}>{key}</a></th>
                <td style={{ fontWeight: 'bold', color: 'red', paddingRight: '.5em' }}>{ isRequired ? '*' : ' ' }</td>
                <td>{description}</td>
              </tr>
            )
          })
        }
        {
          Object.keys(definition).map((key, index) => {
            let { values, isRequired } = _extractDefinition(definition[key])
            if (overridden[key]) {
              values = overridden[key]
            } else {
              if (values === true) {
                values = 'boolean'
              } else {
                values = _extractValues(values)
              }
            }
            return (
              <tr key={index}>
                <th style={{ textAlign: 'left', verticalAlign: 'top' }}><a href={'#' + key}>{key}</a></th>
                <td style={{ fontWeight: 'bold', color: 'red', paddingRight: '.5em' }}>{ isRequired ? '*' : ' ' }</td>
                <td>{values}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
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
    let { title, description, children, code } = this.props
    code = code || _extractJsx(children)
    return (
      <div style={{ margin: '2em 1em', paddingBottom: '1em' }}>
        { title ? (<h3>{title}</h3>) : null }
        { description ? (<p>{description}</p>) : null }
        <div>{children}</div>
        <br style={{ clear: 'both' }} />
        <div style={{ background: '#333', color: '#eee', marginBottom: '1em', position: 'relative' }}>
          <div style={{ padding: '.25em .5em', background: '#666', color: '#fff', position: 'absolute', top: 0, right: 0 }}>
            Code
          </div>
          <pre style={{ padding: '2em' }}>{code}</pre>
        </div>
      </div>
    )
  }
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
