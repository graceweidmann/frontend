import React from 'react';
import GlobalStyle from './theme/globalStyle';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Register from './pages/register/register';
import Register1 from './pages/register/register1';
import BrowseWorkouts from './pages/browseWorkouts';
export default function App() {
  return (
    <Router >
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Dashboard} />  
        <Route path="/dashboard" exact component={Dashboard} />  
         <Route path="/register"  exact component={Register} />
        <Route path="/register1" exact component={Register1} />
        <Route path="/browseWorkouts" exact component={BrowseWorkouts} />
      </Switch>
    </Router>
  );

}
