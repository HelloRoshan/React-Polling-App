import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import Header from './parts/Header.jsx';
import Audience from './Audience.jsx';
import Board from './Board.jsx';
import Speaker from './Speaker.jsx';

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
            <Router>
                <Header title={this.state.title} status={this.state.status} />
                <Switch>
                    <Route name="speaker" path="/speaker" render={() => (<Speaker {...this.state} /> )} />
                    <Route name="board" path="/board" render={() => (<Board {...this.state} /> )} />
                    <Route render={() => ( <Audience {...this.state}/>)} />
                </Switch>
            </Router>
        );
    }
}
 
export default App;
