import React, { Component } from 'react'
import ReactDOMServer from 'react-dom/server'

const Banner = () => {
  return (
    <div style={{ padding: '1em', background: '#ccc' }}>
      <h1>sui-stateless-components</h1>
    </div>
  )
}

export const Story = ({ title, children }) => {
  return (
    <div>
      <Banner/>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export class Example extends Component {
  render () {
    return (
      <div>
        <div>{this.props.children}</div>
        <code>
        </code>
      </div>
    )
  }

}
