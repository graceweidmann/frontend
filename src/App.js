import React from 'react';
import{createGlobalStyle} from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Register from './pages/register/register';
import Register1 from './pages/register/register1';

export default function App() {
  return (
    <Router >
      <GlobalStyle />
      <Switch>
        
        <Route path="/" exact component={Register} />
        <Route path="/register1" component={Register1} />
      </Switch>
    </Router>
  );

}
