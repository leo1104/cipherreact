import React, { Component } from 'react'
import Heirarcy from './Heirarcy'

export default class FirstComponent extends Component {
  render() {
    return (
      <div><Heirarcy/>
      <p>{this.props.name}</p>
       </div>
    )
  }
}
