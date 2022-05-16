
import React, { Component } from 'react'

import './Square.css'

export default class Square extends Component{
    render(){
      return(
        <button className='Square'>
                 {/* {TODO} */}
                 {this.props.value}
        </button>
      );
      }
  }