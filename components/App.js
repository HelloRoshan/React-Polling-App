import React, { Component } from 'react';
import io from 'socket.io-client';
import Header from './parts/Header.js';

class App extends Component {
    state = { 
        status: 'disconnected'
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', () => {
            this.connect();
        });
        this.socket.on('disconnect', () => {
            this.disconnect();
        });
    }

    connect() {
        this.setState({status: 'connected'});
    }

    disconnect() {
        this.setState({status: 'disconnected'});
    }
    render() { 
        return ( <div>
            <Header title="New Header" status={this.state.status} />
        </div> );
    }
}
 
export default App;
