import React from 'react'
import classnames from 'classnames'

import 'semantic-ui-css/components/grid.css'

export const makeGridClasses = (classes) => {
  return classnames('ui', classes, 'grid')
}
export const Grid = ({ children, ...rest }) => {	// eslint-disable-line
  const classes = makeGridClasses({})
  return (
    <div { ...rest } className={classes}>
      {children}
    </div>
  )
}

export const makeColumnClasses = (classes) => {
  return classnames(classes, 'column')
}
export const Column = ({ width, children, ...rest }) => {	// eslint-disable-line
  width = width ? { [`${width} wide`]: true } : {}
  const classes = makeColumnClasses(width)
  return (
    <div { ...rest } className={classes}>
      {children}
    </div>
  )
}
