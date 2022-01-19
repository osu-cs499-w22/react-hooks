import React, { useState } from 'react';

function Clock(props) {
  return (
    <h2>It is {props.date.toLocaleTimeString()}.</h2>
  );
}

function CountingButton() {
  const [ count, setCount ] = useState(0);
  // const [ pets, setPets ] = useState({ cats: 2, dogs: 2 })
  // setPets(prevPets => ({
  //   fish: 3,
  //   ...prevPets
  // }))
  const [ cats, setCats ] = useState(2);
  const [ dogs, setDogs ] = useState(2);
  const [ fish, setFish ] = useState(0);

  function updateCount(prevCount) {
    return prevCount + 1;
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click me
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <CountingButton />
    </div>
  );
}

export default App;
