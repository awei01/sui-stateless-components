import React, { PropTypes } from 'react';
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/icon.css';

/*
 |---------------------------
 | shared
 |---------------------------
*/
const _sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

/*
 |---------------------------
 | Icon
 |---------------------------
*/
export const iconDefinition = {
  disabled: true,
  loading: true,
  fitted: true,
  size: _sizes,
  link: true,
  flipped: {
    values: ['vertically', 'horizontally'],
    makeClassname: makeSuffixedClass.bind(null, 'flipped')
  },
  rotated: {
    values: ['clockwise', 'counterclockwise'],
    makeClassname: makeSuffixedClass.bind(null, 'rotated')
  },
  format: ['circular', 'bordered'],
  color: enums.colors,
  inverted: true,
  corner: true
}
const _iconFactory = makeFactory(iconDefinition)
const Icon = (props) => {
  // pull out the glyph
  const { glyph, ...remaining } = props
  const [classes, rest] = _iconFactory.extractClassesAndProps(remaining)
  const className = classnames(classes, glyph, 'icon')
  return (
    <i {...rest} className={className} />
  )
}
Icon.propTypes = {
  ..._iconFactory.propTypes,
  glyph: PropTypes.string.isRequired
}
export default Icon

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
export const iconsDefinition = {
  size: _sizes
}
const _iconsFactory = makeFactory(iconsDefinition)
export const Icons = (props) => {
  const [classes, rest] = _iconsFactory.extractClassesAndProps(props)
  const className = classnames(classes, 'icons')
  return (
    <i {...rest} className={className} />
  )
}
