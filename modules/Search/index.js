import React from 'react';
import { makeClassnameFactory, makeComponentWithClasses, makeOptionForValuesAndSuffix } from '../../utils';
import 'semantic-ui-css/components/search.css';

/*
 |---------------------------
 | Search
 |---------------------------
 */
export const makeSearchClasses = makeClassnameFactory({
  prefix: 'ui',
  suffix: 'search',
  options: {
    aligned: makeOptionForValuesAndSuffix(['left', 'right'], 'aligned')
  }
})
export const Search = ({
                        loading, fluid, category,
                        aligned,
                        className, ...rest }) => {
  const classes = makeSearchClasses({
    loading, fluid, category,
    aligned
  }, className)
  return (
    <div {...rest} className={classes}/>
  )
}

/*
 |---------------------------
 | Results
 |---------------------------
 */
export const makeResultsClasses = makeClassnameFactory({
  suffix: 'results'
})
export const Results = ({
                        active,
                        className, ...rest }) => {
  const classes = makeResultsClasses({}, className)
  const passedStyles = {}

  if (active) {
    // when active, use style
    passedStyles.display = 'block'
  }
  return (
    <div {...rest} className={classes} style={passedStyles}/>
  )
}

/*
 |---------------------------
 | Result
 |---------------------------
 */
export const makeResultClasses = makeClassnameFactory({
  suffix: 'result'
})
export const Result = ({
                        active,
                        title, description, price, image,
                        children, className, ...rest }) => {
  const classes = makeResultClasses({ active }, className)
  if (!children) {
    children = []
    if (image) {
      children.push(<Image key='image' src={image}/>)
    }
    children.push(
      <Content key='content'>
        { price
          ? <Price>{ price }</Price>
          : null
        }
        { title
          ? <Title>{ title }</Title>
          : null
        }
        { description
          ? <Description>{ description }</Description>
          : null
        }
      </Content>
    )
  }
  return (
    <a {...rest} className={classes}>{children}</a>
  )
}

/*
 |---------------------------
 | Image
 |---------------------------
 */
export const makeImageClasses = makeClassnameFactory({
  suffix: 'image'
})
export const Image = ({ src, className, children, ...rest }) => {
  const classes = makeImageClasses({}, className)
  return (
    <div {...rest} className={classes}>
      { children
        ? children
        : (<img src={src}/>)
      }
    </div>
  )
}

/*
 |---------------------------
 | Category
 |---------------------------
 */
export const makeCategoryClasses = makeClassnameFactory({
  suffix: 'category'
})
export const Category = ({ name, children, className, ...rest }) => {
  const classes = makeCategoryClasses({}, className)
  return (
    <div {...rest} className={classes}>
      { name
        ? (<Name>{name}</Name>)
        : null
      }
      { children }
    </div>
  )
}

/*
 |---------------------------
 | Supporting components
 |---------------------------
 */
export const Prompt = makeComponentWithClasses('prompt', 'input')
export const Content = makeComponentWithClasses('content')
export const Title = makeComponentWithClasses('title')
export const Description = makeComponentWithClasses('description')
export const Price = makeComponentWithClasses('price')
export const Action = makeComponentWithClasses('action', 'a')
export const Name = makeComponentWithClasses('name')
