import React, { Component } from 'react'

export default class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }

    render() {
        return (
            <div value={this.state.value} data-id={this.props.id} className="square" onClick={() => {
              if(this.props.playerToMove == 1){

                if(this.state.value==null){
                  this.props.changePlayerTurn();
                }

                this.setState({value: '1'}); 
                this.props.addPiecetoBoard(this.props.id, 1);
              }
              else {

                if(this.state.value==null){
                  this.props.changePlayerTurn();
                }

                this.setState({value: '2'});
                this.props.addPiecetoBoard(this.props.id, 2);
              }



              }}
            >

              { this.state.value == 1? <i class="fas fa-cat"></i> : this.state.value == 2? <i class="fas fa-dog"></i> : "" }
            </div>
        )
    }
}
