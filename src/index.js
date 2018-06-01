import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './App';
import NavBar from './scripts/NavBar/nav';
import RegistrationForm from './scripts/Registration/registration'

ReactDOM.render(
    <Router>
        <div>
            <App />
            {/* <NavBar /> */}
            {/* <Route exact path="/" component={} />
            <Route exact path="/People" component={} />
            <Route exact path="/ProjectList" component={} /> */}
            <RegistrationForm/>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
