import React, { Component } from 'react'

export default class Updatingcomp extends Component {
    constructor(props){
        super(props)
        this.state = {
            color: "grey"
        }
    }
    static getDerivedStateFromProps(props,state){
        return {color:props.col}
    }
    changecol=()=>{
        this.setState({color:"blue"})
    }

    // the default value for shouldcomponentUpdate is true it will update you can set it to false to make not to render a component so still it takes value of attribute that is passed try by marking return as true so then it will update

    shouldComponentUpdate(){
      return false;
    }
  render() {
    return (
      <div>
       my favourite color is {this.state.color}
       <button onClick={this.changecol}>clickme</button>
      </div>
    )
  }
}
/*
This example has a button that changes the favorite color to blue,
but since the getDerivedStateFromProps() method is called,
the favorite color is still rendered as yellow
(because the method updates the state
with the color from the col attribute).
*/


