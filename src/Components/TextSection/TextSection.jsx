import React, { Component } from 'react'

export default class TextSection extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </section>
    )
  }
}
