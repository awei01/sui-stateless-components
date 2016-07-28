import React from 'react';
export const Story = ({ title, examples, notes, showToggleNote, children, ...rest }) => {
  examples = (examples && typeof examples === 'string') ? [examples] : examples;
  notes = (notes && typeof notes === 'string') ? [notes] : notes;
  if (!notes && showToggleNote) {
    notes = []
  }
  if (showToggleNote) {
    notes = ['Toggle full screen mode to get a better a idea of how this behaves.', ...notes]
  }
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
        ? (<div style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc' }} {...rest}>{ children }</div>)
        : null
      }
    </div>
  )
}
