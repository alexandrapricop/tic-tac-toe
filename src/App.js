import React, { Component } from 'react'
import Board from "./components/Board/index";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerToMove: 1,
      board: [null,null,null,null,null,null,null,null,null],
      winner: false
    };
  }

  componentDidUpdate() {

    var board = this.state.board;
    var winner = false;

    if(board[0] == board[4] == board[8] && board[0]!=null && this.state.winner==false){
      winner = board[0];
    } else if(board[2] == board[4] == board[6] && board[2]!=null && this.state.winner==false){
      winner = board[2];
    } else if(board[0] == board[1] == board[2] && board[2]!=null && this.state.winner==false){
      winner = board[0];
    } else if(board[3] == board[4] == board[5] && board[3]!=null && this.state.winner==false){
      winner = board[3];
    } else if(board[6] == board[7] == board[8] && board[6]!=null && this.state.winner==false){
      winner = board[6];
    } else if(board[0] == board[3] == board[6] && board[6]!=null && this.state.winner==false){
      winner = board[0];
    }else if(board[1] == board[4] == board[7] && board[4]!=null && this.state.winner==false){
      winner = board[7];
    }else if(board[2] == board[5] == board[8] && board[8]!=null && this.state.winner==false){
      winner = board[7];
    }

    if(winner!=false){
      //this.setState({winner:winner});
      setTimeout(function(){ alert("The winner is" + winner)}, 0);
    }

  }

  changePlayerTurn() {
    if(this.state.playerToMove == 1)
      this.setState({playerToMove: 2})
    else
      this.setState({playerToMove: 1})

      //alert(this.state.playerToMove)
  }

  addPiecetoBoard(index, value) {

    var currentBoard = this.state.board;
    currentBoard[index] = value;
    this.setState({board:currentBoard});

    console.log(this.state.board);
  }


  render() {
    //alert(this.state.playerToMove);
    return (
      <div className="App">
        <header className="App-header">
  
        </header>
        <main class={this.state.winner != false ? "light" : " "}>
          <ul>
            <li> Player 1 : <i class="fas fa-cat"></i></li>
            <li> Player 2 : <i class="fas fa-dog"></i></li>
          </ul>
          {
            this.state.winner == false? ( <Board addPiecetoBoard={this.addPiecetoBoard.bind(this)}  playerToMove={this.state.playerToMove} changePlayerTurn={this.changePlayerTurn.bind(this)}/>) :  `The winner is ${this.state.winner}`
          }
         
        </main>
      </div>
    );
  }
}
