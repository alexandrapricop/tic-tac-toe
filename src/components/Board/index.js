import React, { Component } from 'react'
import Square from '../Square/index'

export default class Board extends Component {


    render() {

        const elements = [1,2,3,4,5,6,7,8,9];

        const items = [];
    
        for (const [index, value] of elements.entries()) {
            items.push(<Square id={index} playerToMove = {this.props.playerToMove} changePlayerTurn={this.props.changePlayerTurn} addPiecetoBoard={this.props.addPiecetoBoard}/>)
          }


        return (
            <div className="board">
                    <h1>{this.playerToMove}</h1>
                    {items}
            </div>
        )
    }
}
