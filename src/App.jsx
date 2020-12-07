import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Horloge from './Horloge';
import Compteur from './compteur/Compteur';
import { Container } from 'reactstrap';

export default function App() {
  return (
    <Container>
      <Compteur init={5} />
      <Horloge />
    </Container>
  );
}
