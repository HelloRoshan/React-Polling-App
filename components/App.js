import React, { Component } from 'react';
import io from 'socket.io-client';
import Header from './parts/Header.js';

class App extends Component {
    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', () => {
            this.connect()
        });
    }

    connect() {
        console.log('connection made '+ this.socket?.id);
    }

    render() { 
        return ( <div>
            <Header title="New Header" />
        </div> );
    }
}
 
export default App;
