import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import{createGlobalStyle} from 'styled-components'
import GlobalStyle from './theme/globalStyle';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './pages/register/register';
import Register1 from './pages/register/register';

export default function App() {
  return (
    <Router >
      <GlobalStyle />
      <Register />
      <Register1 />
      <Switch>
        <Route path="../pages/register1" component={Register1} />
      </Switch>
    
    </Router>
  );

}