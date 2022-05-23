import React, { Component } from 'react'
import Board from './Board';
import './Game.css';
import Tryfunctioncheck from './Tryfunctioncheck';
import Classcomp from './Classcomp';
import Parent from "./function/Parent"
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';



export default class Game extends Component {
  constructor(){
    super()
    // debugger
    this.state = {
      title: document.getElementById("title").innerHTML
   }
    if(this.state.title == "Watching" || "TIC-TAC-TOE" ){
    if(this.state.title = (Watching)=>{ toast.success("Your are Watching Me")}){
      
    }
    }

  };
  
    render() {
      
      return (
        <div className='game'> 
       <div className="layer">
       <div className='game-board'>
         {/* <h1 className='game-text'>
         A GAME BY JOSHI NAIDU
         </h1> */}

         {/* Main poin to render data of board */}
          <Board/>

          {/* uncomment below comp to see how to change the status of title when website is switvhed */}
          {/* <Tryfunctioncheck/> */}

          {/* uncomment below to see how onclick works in class component */}
          {/* <Classcomp/> */}

          {/* Uncomment below component to see how toaster works */}
          {/* <ToastContainer/> */}

          {/* Uncomment below component to see how to send data from child to parent  */}
          {/* <Parent/> */}

        </div>
        <div className='game-info'>
             <div>{/*status*/}</div>
             <ol>{/*Todo*/}</ol>
        </div>
       </div>
        
      </div>
      )
    }
  }
  










