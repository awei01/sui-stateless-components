import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/label.css';

/*
 |---------------------------
 | shared
 |---------------------------
 */
const _sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

/*
 |---------------------------
 | Label
 |---------------------------
 */
export const labelDefinition = {
  image: true,
  pointing: {
    values: [true, 'right', 'left', 'below'],
    makeClassname: (value) => {
      if (value === 'left' || value === 'right') {
        return `${value} pointing`;
      }
      return value === true ? 'pointing' : `pointing ${value}`;
    }
  },
  corner: {
    values: [true, 'left'],
    makeClassname: makeSuffixedClass.bind(null, 'corner')
  },
  tag: true,
  ribbon: {
    values: [true, 'right'],
    makeClassname: makeSuffixedClass.bind(null, 'ribbon')
  },
  attached: {
    values: ['top left', 'top', 'top right', 'bottom left', 'bottom', 'bottom right'],
    makeClassname: makeSuffixedClass.bind(null, 'attached')
  },
  horizontal: true,
  floating: true,
  circular: true,
  basic: true,
  color: enums.colors,
  size: _sizes
}
const _labelFactory = makeFactory(labelDefinition)
const Label = (props) => {
  const [classes, rest] = _labelFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'label')
  let element = 'div'
  if ('href' in rest) {
    element = 'a'
  }
  return React.createElement(element, { ...rest, className })
}
Label.propTypes = { ..._labelFactory.propTypes }
Label.displayName = 'Label'
export default Label

const Detail = (props) => {
  const className = classnames(props.className, 'detail')
  let element = 'div'
  if ('href' in props) {
    element = 'a'
  }
  return React.createElement(element, { ...props, className })
}
Detail.displayName = 'Label.Detail'
Label.Detail = Detail

export const labelsDefinition = {
  size: _sizes,
  color: enums.colors,
  tag: true,
  circular: true
}
const _labelsFactory = makeFactory(labelsDefinition)
export const Labels = (props) => {
  const [classes, rest] = _labelsFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'labels')
  return (
    <div {...rest} className={className} />
  )
}
Labels.propTypes = { ..._labelsFactory.propTypes }
Labels.displayName = 'Labels'
