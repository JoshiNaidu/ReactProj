import React, { Component } from 'react'

export default class Componentmounting extends Component {
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }

    }
    componentDidMount(){
        setTimeout(()=>{
         this.setState({color:"yellow"})
        },5000)

    }


  render() {
    return (
      <div> My favourite color is {this.state.color}</div>
    )
  }
}
