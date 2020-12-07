import React from 'react';
import { Button } from 'reactstrap';

export default function MyButton(props) {
  return (
    <Button
      color='primary'
      className='mr-3'
      onClick={() => {
        props.onIncrease(props.increment);
      }}
    >
      Augmenter de {props.increment}
    </Button>
  );
}
