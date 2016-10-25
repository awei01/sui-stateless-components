import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/step.css'

/*
 |---------------------------
 | Steps
 |---------------------------
 */
export const stepsDefinition = {
  ordered: true,
  vertical: true,
  fluid: true,
  attached: {
    values: ['top', 'bottom'],
    makeClassname: makeSuffixedClass.bind(null, 'attached')
  },
  count: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
  size: enums.sizes
}
const _stepsFactory = makeFactory(stepsDefinition)
export const Steps = (props) => {
  const [classes, rest] = _stepsFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'steps')
  return (
    <div {...rest} className={className} />
  )
}
Steps.propTypes = { ..._stepsFactory.propTypes }
Steps.displayName = 'Steps'
export default Steps

/*
 |---------------------------
 | Steps.Step
 |---------------------------
 */
export const stepDefinition = {
  active: true,
  completed: true,
  disabled: true
}
const _stepFactory = makeFactory(stepDefinition)
export const Step = (props) => {
  const [classes, rest] = _stepFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'step')
  let element = 'div'
  if ('href' in rest && !props.disabled) {
    element = 'a'
  }
  return React.createElement(element, { ...rest, className })
}
Step.propTypes = { ..._stepFactory.propTypes }
Step.displayName = 'Steps.Step'
Steps.Step = Step

/*
 |---------------------------
 | Steps.Step.Content
 |---------------------------
 */
const Content = (props) => {
  const { title, description, children, ...rest } = props
  const className = classnames(props.className, 'content')
  if (children) {
    return (
      <div {...rest} className={className}>{children}</div>
    )
  }
  return (
    <div {...rest} className={className}>
      { title ? (<Title>{title}</Title>) : null }
      { description ? (<Description>{description}</Description>) : null }
    </div>
  )
}
Content.displayName = 'Steps.Step.Content'
Step.Content = Content

/*
 |---------------------------
 | Steps.Step.Title
 |---------------------------
 */
const Title = (props) => {
  const className = classnames(props.className, 'title')
  return (
    <div {...props} className={className} />
  )
}
Title.displayName = 'Steps.Step.Title'
Step.Title = Title

/*
 |---------------------------
 | Steps.Step.Description
 |---------------------------
 */
const Description = (props) => {
  const className = classnames(props.className, 'description')
  return (
    <div {...props} className={className} />
  )
}
Description.displayName = 'Steps.Step.Description'
Step.Description = Description
