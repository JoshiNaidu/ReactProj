import React, { Component } from 'react'

export default class Gettingdata extends Component {
    constructor(props){
        super(props)

        this.state={
            color:"green"
        }
    }
    static getDerivedStateFromProps(props,state){
        return {color:props.col}

    }
  render() {
    return (
      <div>{this.state.color}</div>
    )
  }
}

