import React from 'react';
import { Button } from 'reactstrap';

export default function MyButton(props) {
  return (
    <Button
      color={props.increment >= 0 ? 'primary' : 'danger'}
      className='mr-3'
      onClick={() => {
        props.onIncrease(props.increment);
      }}
    >
      {props.increment >= 0 ? 'Augmenter' : 'Diminuer'} de{' '}
      {Math.abs(props.increment)}
    </Button>
  );
}
