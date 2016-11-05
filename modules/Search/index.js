import React, { PropTypes } from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/search.css';
import BaseIcon from '../../elements/Icon'

/*
 |-----------------------
 | Search
 |-----------------------
 */
export const searchDefinition = {
  category: true,
  fluid: true,
  aligned: {
    values: ['left', 'right'],
    makeClassname: makeSuffixedClass.bind(null, 'aligned')
  },
  size: ['mini', 'small', 'large', 'big', 'huge', 'massive']
}
const _searchFactory = makeFactory(searchDefinition)
const Search = (props) => {
  const [classes, rest] = _searchFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'search')
  return (
    <div {...rest} className={className} />
  )
}
Search.propTypes = { ..._searchFactory.propTypes }
Search.displayName = 'Search'
export default Search

/*
 |-----------------------
 | Search.Prompt
 |-----------------------
 */
const Prompt = (props) => {
  const className = classnames(props.className, 'prompt')
  return (
    <input {...props} className={className} />
  )
}
Prompt.displayName = 'Search.Prompt'
Search.Prompt = Prompt

/*
 |-----------------------
 | Search.Icon
 |-----------------------
 */
const Icon = (props) => {
  return (
    <BaseIcon {...props} glyph='search' />
  )
}
Icon.displayName = 'Search.Icon'
Search.Icon = Icon

/*
 |-----------------------
 | Search.Results
 |-----------------------
 */
export const resultsDefinition = {
  visible: true
}
const _resultsFactory = makeFactory(resultsDefinition)
const Results = (props) => {
  const [classes, rest] = _resultsFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'results')
  const style = rest.style || {}
  if (props.visible) {
    // need to handle style to get it to display
    style.display = 'block'
  }
  return (
    <div {...rest} className={className} style={style} />
  )
}
Results.propTypes = { ..._resultsFactory.propTypes }
Results.displayName = 'Search.Results'
Search.Results = Results

/*
 |-----------------------
 | Search.Results.Result
 |-----------------------
 */
export const resultDefinition = {
  active: true
}
const _resultFactory = makeFactory(resultDefinition)
const Result = (props) => {
  const { title, description, src, price, ...remainder } = props
  const [classes, rest] = _resultFactory.extractClassesAndProps(remainder)
  const className = classnames(classes, 'result')
  let element = 'div'
  if (rest.href) {
    element =  'a'
  }
  if (rest.children) {
    return React.createElement(element, { ...rest, className })
  }
  const image = src ? (<Image src={src} />) : null
  const content = (<Content title={title} description={description} price={price} />)
  return React.createElement(element, { ...rest, className }, image, content)
}
Result.propTypes = {
  ..._resultFactory.propTypes,
  src: PropTypes.string
}
Result.displayName = 'Search.Results.Result'
Results.Result = Result

// private components
const Image = ({ src }) => {
  return (
    <div className='image'><img src={src} /></div>
  )
}
Image.propTypes = {
  src: PropTypes.string.isRequired
}
Image.displayName = 'Search.Results.Result.Image'
const Content = ({ title, description, price }) => {
  return (
    <div className='content'>
      { price ? <div className='price'>{price}</div> : null}
      { title ? <div className='title'>{title}</div> : null}
      { description ? <div className='description'>{description}</div> : null}
    </div>
  )
}
Content.displayName = 'Search.Results.Result.Content'
Content.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

/*
 |-----------------------
 | Search.Results.Category
 |-----------------------
 */
const Category = (props) => {
  const { name, children, ...rest } = props
  const className = classnames(rest.className, 'category')
  return (
    <div {...rest} className={className}>
      <div className='name'>{name}</div>
      {children}
    </div>
  )
}
Category.displayName = 'Search.Results.Category'
Category.propTypes = {
  name: PropTypes.string.isRequired
}
Results.Category = Category

/*
 |-----------------------
 | Search.Results.Message
 |-----------------------
 */
const Message = (props) => {
  const { header, description, ...rest } = props
  const className = classnames(rest.className, 'message')
  if (rest.children) {
    return (<div {...rest} className={className} />)
  }
  return (
    <div {...rest} className={className}>
      { header ? <div className='header'>{header}</div> : null }
      { description ? <div className='description'>{description}</div> : null }
    </div>
  )
}
Message.displayName = 'Search.Results.Message'
Message.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string
}
Results.Message = Message

/*
 |-----------------------
 | Search.Results.Action
 |-----------------------
 */
const Action = (props) => {
  const className = classnames(props.className, 'action')
  return (
    <a {...props} className={className} />
  )
}
Action.displayName = 'Search.Results.Action'
Results.Action = Action
