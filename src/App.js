import React, { useState, useEffect } from 'react';

function Clock(props) {
  const [ date, setDate ] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => { clearInterval(intervalId) }
  }, []);
  return (
    <h2>It is {date.toLocaleTimeString()}.</h2>
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

  useEffect(() => {
    document.title = `${count} clicks`;
  }, [ count ])

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
      <Clock />
    </div>
  );
}

export default App;
