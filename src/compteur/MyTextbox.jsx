import React from 'react';
import { Input } from 'reactstrap';

export default function MyTextbox(props) {
  return (
    <Input className='mb-3' value={props.number} onChange={props.onChange} />
  );
}
