import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from "react-router-dom";
import { Router } from 'react-router';
import { createHashHistory } from 'history'
import './index.css';
import App from './App';
import ComingSoon from './ComingSoon'
import * as serviceWorker from './serviceWorker';
import { Store } from './store'


const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router history={ hashHistory }>
    <Store>
      <Switch>
        <Route exact path="/" render={ App } />
        <Route path="/comingsoon" render={ ComingSoon } />
      </Switch>
    </Store>
  </Router>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
