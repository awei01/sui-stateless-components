import React from 'react'
import classnames from 'classnames';

export const COUNTS = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'
]
export const COLORS = [
  'red', 'orange', 'yellow',
  'olive', 'green', 'teal', 'blue',
  'violet', 'purple', 'pink',
  'brown', 'grey', 'black'
]
export const SIZES = [
  'mini', 'tiny', 'small', 'medium',
  'large', 'big', 'huge', 'massive'
]
export const ALIGNS = ['left', 'right', 'center', 'justified']
const _makeAlignKey = (value) => {
  if (value === 'justified') {
    return value
  }
  return useSuffixedStringValueAsKey('aligned', value)
}

const _useValueAsKey = (value) => {
  return value;
}
export const useSuffixedStringValueAsKey = (suffix, value) => {
  if (typeof value !== 'string') {
    value = ''
  }
  return `${value} ${suffix}`
}


export const OPTIONS = {
  color: COLORS,
  size: SIZES,
  align: {
    values: ALIGNS,
    makeKey: _makeAlignKey
  },
  equalWidth: {
    values: [true],
    makeKey: () => {
      return 'equal width'
    }
  },
  wide: {
    values: COUNTS,
    makeKey: useSuffixedStringValueAsKey.bind(null, 'wide')
  },
}

export const makeClassnameFactory = ({ prefix, suffix, options }) => {
  options = options || {};
  return (configs, className) => {
    if (!configs || typeof configs === 'string') {
      // configs and className could both be undefined or falsy
      className = configs;
      configs = {};
    }
    const resolved = Object.keys(configs).reduce((result, key) => {
      let value = configs[key];
      if (value === undefined) {
        // key not handled by configs, ignore it
        return result
      }
      const option = options[key];
      if (option) {
        let values;
        if (Array.isArray(option)) {
          values = option;
        } else {
          values = option.values;
        }
        const makeKey = option.makeKey || _useValueAsKey;

        if (values.indexOf(value) === -1) {
          throw new Error(`The value [${value}] provided for [${key}] should be one of [${values}]`)
        }
        key = makeKey(value);
        value = true;
      } else {
        value = true;
      }
      result[key] = value;
      return result;
    }, {});
    return classnames(prefix, resolved, className, suffix);
  }
}

export const makeComponentWithClasses = ({ classes, element }) => {
  element = element || 'div'
  return ({ className, ...rest}) => {
    const resolvedClasses = classnames(classes, className)
    return (
      React.createElement(element, { ...rest, className: resolvedClasses })
    )
  }
}
