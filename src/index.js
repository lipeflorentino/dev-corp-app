// Importando o React
import React from 'react';
// Importando o React Dom para injetar o <APP /> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
// Importando o components
import App from './App.js';
import Login from './pages/login/login-page.js';
import User from './pages/user/user-page.js';
import Admin from './pages/admin/admin-page.js';
// Impotando react router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Importando o css
import './index.css'; 


// Renderizando o component APP (com seus sub componenets e etc) em <div id="root"></div> do index.html
ReactDOM.render(
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={User} />
            <Route path="/admin" component={Admin} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));