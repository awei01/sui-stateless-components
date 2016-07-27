import classnames from 'classnames';

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
  return `${value} aligned`
}

const _useValueAsKey = (value) => {
  return value;
}

export const OPTIONS = {
  color: COLORS,
  size: SIZES,
  align: {
    values: ALIGNS,
    makeKey: _makeAlignKey
  }
}

export const makeClassnameFactory = ({ prefix, suffix, options }) => {
  options = options || {};
  return (configs, className) => {
    if (typeof configs === 'string') {
      className = configs;
      configs = {};
    }
    const resolved = Object.keys(configs).reduce((result, key) => {
      let value = configs[key];
      if (!value) {
        // the option is empty. don't include it
        return result;
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
