import React, { PropTypes } from 'react';
import { makeClassnameFactory, makeOptionForValuesAndSuffix, OPTIONS } from '../../utils';
import 'semantic-ui-css/components/label.css';

/*
 |---------------------------
 | Shared options
 |---------------------------
 */
const { color, size } = OPTIONS;

/*
 |---------------------------
 | Label
 |---------------------------
 */
export const ATTACHEDS = ['top left', 'top', 'top right', 'bottom left', 'bottom', 'bottom right']
const _makePointingKey = (value) => {
  if (value === 'left' || value === 'right') {
    return `${value} pointing`;
  }
  return value === true ? 'pointing' : `pointing ${value}`;
}
export const makeLabelClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'label',
  options: {
    pointing: {
      values: [true, 'right', 'left', 'below'],
      makeKey: _makePointingKey
    },
    color,
    size,
    corner: makeOptionForValuesAndSuffix(['left', 'right'], 'corner'),
    ribbon: makeOptionForValuesAndSuffix([true, 'right'], 'ribbon'),
    attached: makeOptionForValuesAndSuffix(ATTACHEDS, 'attached')
  }
});
export const Label = ({
                      pointing, color, size, corner, ribbon, attached,
                      link, href,
                      circular, basic, image, tag, horizontal, floating,
                      className, ...rest }) => {

  const classes = makeLabelClasses({
    pointing, color, size, corner, ribbon, attached,
    circular, basic, image, tag, horizontal, floating
  }, className);
  const passedProps = {
    ...rest,
    className: classes
  }
  let element = 'div';

  if (link || href) {
    if (href) {
      passedProps.href = href;
    }
    element =  'a';
  }
  return React.createElement(element, passedProps);
}
Label.propTypes = {
  href: PropTypes.string
}

/*
 |---------------------------
 | Labels
 |---------------------------
 */
export const makeLabelsClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'labels',
  options: {
    color,
    size
  }
});
export const Labels = ({ color, size, tag, circular, className, ...rest }) => {
  const classes = makeLabelsClasses({ color, size, tag, circular }, className)
  return (
    <div {...rest} className={classes}/>
  )
}
