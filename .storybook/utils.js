import React from 'react';
import { Story } from './components';
import { COLORS, SIZES, ALIGNS, COUNTS } from '../utils';

const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus metus, consectetur et eros at, maximus rutrum magna. Aliquam ullamcorper, magna vel pulvinar finibus, neque augue placerat libero, vel auctor mi ligula nec risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis velit luctus congue sagittis. Etiam vel sollicitudin velit. Aliquam finibus sodales eros eu sollicitudin. Morbi commodo lorem urna, ac condimentum magna ullamcorper vitae. Sed ac dapibus dui. Aenean quis faucibus purus, ac volutpat metus. Phasellus semper sapien et lobortis interdum. Donec scelerisque orci massa, in hendrerit neque hendrerit in. Nullam porttitor ornare massa sed varius.'
export const makeLipsum = (chars) => {
  return LIPSUM.substring(0, chars)
}

export const makeComponentsForKeyAndOptions = (Component, { key, options }, props) => {
  props = props || {}
  return options.map((item, index) => {
    const passedProps = {
      [key]: item,
      children: item,
      ...props
    }
    if (typeof passedProps.children === 'function') {
      passedProps.children = passedProps.children(item)
    }
    return (
      <Component key={index} {...passedProps} title={ key + ': ' + item }/>
    )
  })
}

export const extractOptionsValues = (options, max = 4) => {
  let shown = options
  let last
  if (max && options.length > max) {
    shown = [...options.slice(0, 2), '...', options[options.length - 1]]
    last = true
  }
  shown = shown.map((value) => {
    if (value === '...') {
      return value
    }
    if (typeof value === 'string') {
      return `"${value}"`
    }
    return value.toString()
  })
  return shown.join(' | ')
}
export const extractCountsValues = () => {
  return extractOptionsValues(COUNTS)
}

export const makeStoryForKeyAndOptions = (Component, defaults, configs = {}) => {
  let { key, options } = configs;
  key = key || defaults.key
  options = options || defaults.options
  const props = configs.props || {}
  const Story = configs.Story
  return () => {
    const values = extractOptionsValues(options)
    const storyProps = {
      examples: `<${Component.name} ${key}=[ ${values} ]/>`,
      notes: 'Hover over element for prop key and value',
      children: makeComponentsForKeyAndOptions(Component, { key, options }, props)
    }
    return _makeStory(Story, storyProps)
  }
}

export const makeSizeStory = (Component, configs = {}) => {
  return makeStoryForKeyAndOptions(Component, { key: 'size', options: SIZES }, configs)
}
export const makeColorStory = (Component, configs = {}) => {
  return makeStoryForKeyAndOptions(Component, { key: 'color', options: COLORS }, configs)
}
export const makeAlignStory = (Component, configs = {}) => {
  configs = configs || {}
  const props = configs.props || {}
  return makeStoryForKeyAndOptions(Component, { key: 'align', options: ALIGNS }, {
    ...configs,
    props: {
      children: (value) => {
        return value.split('').join(' ')
      },
      ...props
    }
  })
}

export const makePassesPropsStory = (Component, { props, Story }) => {
  return () => {
    const propsString = Object.keys(props).reduce((result, key) => {
      if (key === 'children') {
        return result
      }
      let value = props[key]
      if (typeof value === 'string') {
        value = `"${value}"`
      } else {
        value = `{${typeof value}}`
      }
      result += ` ${key}=${value}`
      return result;
    }, '');
    const storyProps = {
      examples: `<${Component.name}${propsString}/>`,
      children: (<Component {...props}/>)
    }
    return _makeStory(Story, storyProps)
  }
}

const _makeStory = (StoryComponent, props) => {
  StoryComponent = StoryComponent || Story
  return (
    <StoryComponent {...props}/>
  )
}
