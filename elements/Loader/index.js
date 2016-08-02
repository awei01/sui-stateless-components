import React, { PropTypes } from 'react';
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/loader.css';

/*
 |---------------------------
 | Shared options
 |---------------------------
 */

/*
 |---------------------------
 | Loader
 |---------------------------
 */
const { size } = OPTIONS
export const makeLoaderClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'loader',
  options: {
    inline: makeOptionForValuesAndSuffix([true, 'centered'], 'inline'),
    size
  }
})
export const Loader = ({
                        inline, size,
                        active, text, indeterminate, disabled,
                        className, ...rest }) => {
  const classes = makeLoaderClasses({
    inline, size,
    active, text, indeterminate, disabled
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
