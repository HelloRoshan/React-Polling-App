import React, { Component } from 'react';
class Dispaly extends Component {
    state = {  }
    render() { 
        return ( 
            this.props.if ? <div>{this.props.children}</div> : null
        );
    }
}
 
export default Dispaly;