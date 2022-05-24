import React, { Component } from 'react'
import Unmountchild from './Unmountchild'
export default class Unmounting extends Component {
    constructor(props){
        super(props)
        this.state = {
            show:true
        }
    }
    delheader=()=>{
        this.setState({
            show:false
        })
    }



  render() {
      let myhead 
      if(this.state.show){
        myhead = <Unmountchild/>
      }
    return (
      <div>
       {myhead}
       <button onClick={this.delheader}>click me</button>
      </div>
    )
  }
}
