import React, { Component } from 'react'
import Board from './Board';
import './Game.css';




export default class Game extends Component {
    render() {
      return (
        <div className='game'>
        <div className='game-board'>
          <Board/>
        </div>
        <div className='game-info'>
             <div>{/*status*/}</div>
             <ol>{/*Todo*/}</ol>
        </div>
      </div>
      )
    }
  }
  










