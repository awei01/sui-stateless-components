import React from 'react';
import { makeSuffixedClass, makeFactory, enums } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/divider.css';

export const dividerDefinition = {
  orientation: ['vertical', 'horizontal'],
  inverted: true,
  margin: ['fitted', 'section'],
  hidden: true,
  clearing: true
}
const _dividerFactory = makeFactory(dividerDefinition)
const Divider = (props) => {
  const [classes, rest] = _dividerFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'divider')
  return (
    <div {...rest} className={className}/>
  )
}
Divider.propTypes = { ..._dividerFactory.propTypes }
Divider.displayName = 'Divider'
export default Divider
