import React, { Component } from 'react'

export default class Classcomp extends Component {
    constructor(props){
        super(props);
        this.state = {
            comp:"Hii"
        }
    }
    changehtm=()=>{
        this.setState({comp:"Hello"})
    }
  render() {
    return (
      <div onClick={this.changehtm}>{this.state.comp}</div>
    )
  }
}

