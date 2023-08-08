import React from 'react'

export default function TextSectionFunction(props) {
  return (
    <div>
      <section>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </section>
    </div>
  )
}
