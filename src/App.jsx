import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Horloge from './Horloge';
import Compteur from './compteur/Compteur';
import { Container } from 'reactstrap';
import Menu from './Menu';

export default function App() {
  return (
    <>
      <Menu />
      <Container className='mt-5'>
        <Compteur init={5} />
        <Horloge />
      </Container>
    </>
  );
}
