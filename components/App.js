import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import Header from './parts/Header.jsx';
import Audience from './Audience.jsx';
import Board from './Board.jsx';
import Speaker from './Speaker.jsx';
import Error404Page from './Error404Page.jsx';

class App extends Component {
    state = { 
        status: 'disconnected',
        title: '',
        member: {},
        audience: []
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
        this.socket.on('joined', (member) => {
            this.joined(member);
        });
        this.socket.on('audience', (audience) => {
            this.updateAudience(audience);
        })
    }

    emit = (eventName, payload) => {
        this.socket.emit(eventName, payload);
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

    joined(member) {
        this.setState({ member });
    }

    updateAudience(newAudience) {
        this.setState({ audience: newAudience })
    }
    render() { 
        return (
            <Router>
                <Header title={this.state.title} status={this.state.status} />
                <Switch>
                    <Route name="speaker" path="/speaker" render={() => (<Speaker {...this.state} /> )} />
                    <Route name="board" path="/board" render={() => (<Board {...this.state} /> )} />
                    <Route name="audience" path="/" exact render={() => ( <Audience {...this.state} emit={this.emit}/>)} />
                    <Route  component={Error404Page} />
                </Switch>
            </Router>
        );
    }
}
 
export default App;
