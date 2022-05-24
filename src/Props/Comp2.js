import React, { Component } from 'react'
import Comp1 from './Comp1'

export default class Comp2 extends Component {
    constructor(props){
        super(props)
        this.state={
            car:"BENZ",
            model:"2020"
        }
    }
  render() {
      const carinfo = {
        car:"BENZ",
        model:"2020"
      }
    return (
      <div>
          <Comp1 brand={carinfo}/>
      </div>
    )
  }
}
