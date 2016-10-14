import React from 'react'
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/loader.css';

/*
 |---------------------------
 | Loader
 |---------------------------
 */
export const loaderDefinition = {
  active: true,
  text: true,
  indeterminate: true,
  inline: {
    values: [true, 'centered'],
    makeClassname: makeSuffixedClass.bind(null, 'inline')
  },
  size: enums.sizes,
  inverted: true
}
const _loaderFactory = makeFactory(loaderDefinition)
const Loader = (props) => {
  const [classes, rest] = _loaderFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'loader')
  return (
    <div {...rest} className={className} />
  )
}
Loader.propTypes = { ..._loaderFactory.propTypes }
export default Loader
