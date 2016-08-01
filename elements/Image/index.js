import without from 'lodash/without'
import React, { PropTypes } from 'react';
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/image.css';

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { size } = OPTIONS
/*
 |---------------------------
 | Icon
 |---------------------------
 */
const { valigned, floated } = OPTIONS
export const makeImageClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'image',
  options: {
    format: ['rounded', 'circular'],
    valigned,
    size,
    spaced: makeOptionForValuesAndSuffix([true, 'left', 'right'], 'spaced'),
    floated,
  }
})
export const Image = ({
                      src, href, width, height,
                      format, valigned, size, spaced, floated,
                      hidden, disabled, avatar, bordered, fluid, centered,
                      className, ...rest }) => {
  const classes = makeImageClasses({
    format, valigned, size, spaced, floated,
    hidden, disabled, avatar, bordered, fluid, centered
  }, className)
  const imgProps = { src, width, height } // these props will always go on img

  if (href) {
    // we're generating a link, we need to wrap our img
    const aProps = { ...rest, href, className: classes }
    return (
      <a {...aProps}><img {...imgProps}/></a>
    )
  }

  const passedProps = { ...rest, ...imgProps, className: classes }
  return (
    <img {...passedProps}/>
  )
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string
}

export const makeImagesClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'images',
  options: {
    size
  }
})
export const Images = ({ size, className, ...rest }) => {
  const classes = makeImagesClasses({ size }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
