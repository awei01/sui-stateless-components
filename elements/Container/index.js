import React, { PropTypes } from 'react';
import { makeSuffixedClass, makeFactory, enums } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/container.css';

export const containerOptions = {
  format: ['fluid', 'text'],
  aligned: {
    values: ['left', 'right', 'center', 'justified'],
    makeClassname: (value) => {
      if (value === 'justified') {
        return value
      }
      return makeSuffixedClass('aligned', value)
    }
  }
}

const _containerFactory = makeFactory(containerOptions)
export const Container = (props) => {
  const [classes, rest] = _containerFactory.extractClassesAndProps(props)
  const className= classnames('ui', classes, 'container')
  return (
    <div {...rest} className={className}/>
  );
}
Container.propTypes = { ..._containerFactory.propTypes }
