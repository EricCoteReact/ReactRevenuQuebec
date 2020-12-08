import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Compteur from './compteur/Compteur';
import { Container } from 'reactstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './home/Home';
import About from './about/About';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container className='mt-5'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/count' component={Compteur} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
