import React from 'react';
import Affichage from './Affichage';
import MyButton from './MyButton';

export default function Compteur(props) {
  const [nombre, setNombre] = React.useState(props.init);

  const increase = (incr) => {
    setNombre(nombre + incr);
  };

  return (
    <>
      <Affichage nombre={nombre} />
      <MyButton increment={1} onIncrease={increase} />
      <MyButton increment={10} onIncrease={increase} />
      <MyButton increment={100} onIncrease={increase} />
    </>
  );
}
