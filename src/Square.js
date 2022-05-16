import React, { Component }from 'react'
import './Square.css'

export default class Square extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:null,
    };
    
  }
    render(){
      return(
        // <button className='Square' onClick={function(){console.log("clicked")}}>
        <button className='Square' onClick={()=>this.setState({value:'x'})}>
                 {/* {TODO} */}
                 {this.state.value}
        </button>
      );
      }
  }