import React from 'react';
import Affichage from './Affichage';
import MyButton from './MyButton';
import MyTextbox from './MyTextbox';

export default function Compteur(props) {
  const [nombre, setNombre] = React.useState(props.init);

  const increase = (incr) => {
    setNombre(nombre + incr);
  };

  function change(evt) {
    if (+evt.target.value || +evt.target.value === 0) {
      setNombre(+evt.target.value);
    }
  }

  return (
    <>
      <Affichage nombre={nombre} />
      <MyTextbox number={nombre} onChange={change} />
      <MyButton increment={1} onIncrease={increase} />
      <MyButton increment={-10} onIncrease={increase} />
      <MyButton increment={100} onIncrease={increase} />
    </>
  );
}
