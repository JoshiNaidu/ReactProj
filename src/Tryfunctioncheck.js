import React, { Component } from 'react'

export default class Tryfunctioncheck extends Component {
  constructor(props){
    super(props)
    this.state={
      color:"red"
    }   

  }
  changecolor = () =>{
    this.setState({color:"blue"});
  }
  render() {

    return (
      <div>
       <h1>
       Hii I am Good boy and i have {this.state.color} lamborgini changecolor
         </h1> 
         <h2 onClick={this.changecolor} >
           i also have a      {this.state.color}        porshce car
         </h2>
      </div>
    )
  }
}
