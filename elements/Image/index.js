import React, { PropTypes } from 'react';
import { makeSuffixedClass, makeFactory, enums, options } from '../../utilities'
import classnames from 'classnames'
import 'semantic-ui-css/components/image.css';

/*
 |---------------------------
 | Image
 |---------------------------
 */
export const imageOptions = {
  hidden: true,
  disabled: true,
  format: ['avatar', 'rounded', 'circular'],
  bordered: true,
  fluid: true,
  aligned: {
    values: ['top', 'middle', 'bottom'],
    makeClassname: makeSuffixedClass.bind(null, 'aligned')
  },
  centered: true,
  spaced: {
    values: [true, 'right', 'left'],
    makeClassname: makeSuffixedClass.bind(null, 'spaced')
  },
  floated: options.floated,
  size: enums.sizes
}
const _imageFactory = makeFactory(imageOptions)
const Image = (props) => {
  const [classes, rest] = _imageFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'image')
  // pull out the image-related props and href to determine if we need an <a />
  const { src, height, width, href, ...other } = rest
  if (href && !props.disabled) {
    const aProps = { ...other, href, className }
    return (
      <a {...aProps}><img src={src} height={height} width={width} /></a>
    )
  }
  return (
    <img {...rest} className={className} />
  )
}
Image.propTypes = {
  ..._imageFactory.propTypes,
  src: PropTypes.string.isRequired
}
export default Image

/*
 |---------------------------
 | Images
 |---------------------------
 */
export const imagesOptions = {
  size: enums.sizes
}
const _imagesFactory = makeFactory(imagesOptions)
export const Images = (props) => {
  const [classes, rest] = _imagesFactory.extractClassesAndProps(props)
  const className = classnames('ui', classes, 'images')
  return (
    <div {...rest} className={className} />
  )
}
Images.propTypes = { ..._imagesFactory.propTypes }
