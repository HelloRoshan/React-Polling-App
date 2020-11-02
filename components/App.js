import React, { Component } from 'react';
import io from 'socket.io-client';
import Header from './parts/Header.jsx';

class App extends Component {
    state = { 
        status: 'disconnected',
        title: ''
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', () => {
            this.connect();
        });
        this.socket.on('disconnect', () => {
            this.disconnect();
        });
        this.socket.on('welcome', (title) => {
            this.welcome(title);
        });
    }

    connect() {
        this.setState({status: 'connected'});
    }

    disconnect() {
        this.setState({status: 'disconnected'});
    }

    welcome(serverState) {
        this.setState({ title: serverState.title });
    }
    render() { 
        return (
            <Header title={this.state.title} status={this.state.status} />
        );
    }
}
 
export default App;
