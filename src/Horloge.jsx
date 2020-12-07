import React, { useState, useEffect } from 'react';

export default function Horloge() {
  const [heure, setHeure] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const ref = setInterval(() => {
      setHeure(new Date().toLocaleTimeString());
    }, 1000);

    return function cleanup() {
      clearInterval(ref);
    };
  }, []);

  return <p>{heure}</p>;
}
