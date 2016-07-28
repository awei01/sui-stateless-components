import React from 'react';
import { Story } from './components';
import { COLORS, SIZES, ALIGNS } from '../utils';

export const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus metus, consectetur et eros at, maximus rutrum magna. Aliquam ullamcorper, magna vel pulvinar finibus, neque augue placerat libero, vel auctor mi ligula nec risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis velit luctus congue sagittis. Etiam vel sollicitudin velit. Aliquam finibus sodales eros eu sollicitudin. Morbi commodo lorem urna, ac condimentum magna ullamcorper vitae. Sed ac dapibus dui. Aenean quis faucibus purus, ac volutpat metus. Phasellus semper sapien et lobortis interdum. Donec scelerisque orci massa, in hendrerit neque hendrerit in. Nullam porttitor ornare massa sed varius.'
export const makeLipsum = (chars) => {
  return LIPSUM.substring(0, chars)
}

export const makeComponentsUsingOptions = (Component, { key, options, props }) => {
  props = props || {}
  return options.map((item) => {
    const passedProps = {
      [key]: item,
      children: item,
      ...props
    }
    if (typeof passedProps.children === 'function') {
      passedProps.children = passedProps.children(item)
    }
    return (
      <Component key={ item } {...passedProps} title={ key + ': ' + item }/>
    )
  })
}

export const makeStoryUsingOptions = (Component, { key, options, props }) => {
  return () => {
    return (
      <Story examples={'<' + Component.name + ' ' + key + '={valid ' + key + '}/>'}
        notes='Hover over element for prop key and value'>
        {makeComponentsUsingOptions(Component, { key, options, props })}
      </Story>
    )
  }
}

export const makeSizeStory = (Component, props) => {
  return makeStoryUsingOptions(Component, { key: 'size', options: SIZES, props })
}
export const makeColorStory = (Component, props) => {
  return makeStoryUsingOptions(Component, { key: 'color', options: COLORS, props })
}
export const makeAlignStory = (Component, props) => {
  return makeStoryUsingOptions(Component, { key: 'align', options: ALIGNS, props: {
    children: (value) => {
      return value.split('').join(' ')
    },
    ...props
  }})
}

export const makePassesPropsStory = (Component, props) => {
  return () => {
    const propsString = Object.keys(props).reduce((result, key) => {
      if (key === 'children') {
        return result
      }
      let value = props[key]
      if (typeof value === 'string') {
        value = '"' + value + '"'
      } else {
        value = '{' + typeof value + '}'
      }
      result += ` ${key}=${value}`
      return result;
    }, '');
    return (
      <Story examples={'<' + Component.name + propsString + '/>'}>
        <Component {...props}/>
      </Story>
    )
  }
}
