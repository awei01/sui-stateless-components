import React from 'react';
import { Segment } from '../elements/Segment'

export const Story = ({ title, examples, notes, showToggleNote, container, children }) => {
  examples = (examples && typeof examples === 'string') ? [examples] : examples;
  notes = (notes && typeof notes === 'string') ? [notes] : notes;
  if (!notes && showToggleNote) {
    notes = []
  }
  if (showToggleNote) {
    notes = ['Toggle full screen mode to get a better a idea of how this behaves.', ...notes]
  }
  container = container || {}
  return (
    <div style={{ margin: '1em' }}>
      { title
        ? (<h2>{ title }</h2>)
        : null
      }
      { examples
        ? examples.map((item, index) => {
            return (
              <code key={index} style={{ display: 'block', marginBottom: '1em' }}>
                {item}
              </code>
            )
          })
        : null
      }
      { notes
        ? notes.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })
        : null
      }
      { children
        ? (<Segment clearing {...container}>{ children }</Segment>)
        : null
      }
    </div>
  )
}
