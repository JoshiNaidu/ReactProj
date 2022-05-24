import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class Updatingcomp2 extends Component {
    constructor(props){
        super(props)
        this.state={
            color:"red"
        }
    }
    componentDidMount(){
       setTimeout(()=>{
           this.setState ({
               color:"pink"
           })
       },5000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      document.getElementById("div1").innerHTML  = 
      "Before Girls Favourite color  is:" + prevState.color
    }
    // Note getsnapshot method wont worknwithout componentdidupdate

    componentDidUpdate(){
        document.getElementById('div2').innerHTML = "Now Girls Favourite Color is:"+ this.state.color
    }

  render() {
    return (
      <div>
          <h4>Girls favourite color is {this.state.color}</h4>
          <div id="div1"></div>
          <div id="div2"></div>


      </div>
    )
  }
}
