import React from 'react'

export default function ConditionalRender(props) {
  const condition = props.left  >= props.right;
  return (
    <div>
        {
            condition ?
            'bal oldal >= jobb oldal' :
            'Bal oldal < jobb oldal'
        }
    </div>
  )
}

