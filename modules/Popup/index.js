import React from 'react';
//import { makeClassnameFactory } from '../../utils';
import 'semantic-ui-css/components/popup.css';

export const POSITIONS = [
  'top left', 'top center', 'top right',
  'bottom left', 'bottom center', 'bottom right',
  'left center', 'right center'
]
export const makeTooltipProps = (content, options) => {
  options = options || {}
  if (!content || typeof content !== 'string') {
    throw new Error('First argument must be a non-empty string')
  }
  let { position, inverted } = options
  if (position && POSITIONS.indexOf(position) === -1) {
    throw new Error(`Invalid value [${position}] for option [position]`)
  }
  const result = {
    'data-tooltip': content,
    'data-position': position,
  }
  if (inverted) {
    result['data-inverted'] = ''
  }
  return result
}
