import without from 'lodash/without'
import React, { PropTypes } from 'react'
import { makePropsFactory } from '../../utilities'
import 'semantic-ui-css/components/button.css'

export const ButtonFactory = makePropsFactory({
  prefix: 'ui',
  suffix: 'button',

})
export const Button = (props) => {
  props = makeButtonProps(props)
  return (
    <button {...props} />
  )
}
