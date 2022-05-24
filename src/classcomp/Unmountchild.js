import React, { Component } from 'react'

export default class Unmountchild extends Component {
 
    componentWillUnmount(){
        alert("The Component is about to  be  Unmounted")
    }

  render() {

    return (
      <div>Hello World!</div>
    )
  }
}
