import React from 'react';
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/container.css';

export const containerDefinition = {
  format: ['fluid', 'text'],
  aligned: options.aligned
}

const _containerFactory = makeFactory(containerDefinition)
const Container = (props) => {
  const [classes, rest] = _containerFactory.extractClassesAndProps(props)
  const className= classnames('ui', classes, 'container')
  return (
    <div {...rest} className={className}/>
  );
}
Container.propTypes = { ..._containerFactory.propTypes }
Container.displayName = 'Container'

export default Container
