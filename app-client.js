import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './components/App';
import Audience from './components/Audience.jsx';
import Board from './components/Board.jsx';
import Speaker from './components/Speaker.jsx';


const routes = (
    <HashRouter>
        <React.Fragment>
            <App />
            <Switch>
                <Route name="speaker" path="/speaker" component={Speaker}></Route>
                <Route name="board" path="/board" component={Board}></Route>
                <Route component={Audience} />
            </Switch>
        </React.Fragment>
    </HashRouter>
);

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('main-container'));
