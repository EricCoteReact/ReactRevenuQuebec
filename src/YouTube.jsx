import React from 'react';

export default function YouTube(props) {
  return (
    <iframe
      id='ytplayer'
      type='text/html'
      width='480'
      height='270'
      src={`https://www.youtube.com/embed/${props.video}`}
      frameBorder='0'
      allowFullScreen
      title={props.video}
    ></iframe>
  );
}
