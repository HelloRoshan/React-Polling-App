import React, { Component } from 'react';
class Board extends Component {
    state = {  }
    render() { 
        return ( 
            <h1>Board: {this.props.title}</h1>
         );
    }
}
 
export default Board;