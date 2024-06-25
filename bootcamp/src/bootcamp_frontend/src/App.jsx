import React, { useState, useEffect } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 20) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div style={{ textAlign: 'center', fontSize: '2em', margin: '20px' }}>
      {count}
    </div>
  );
}

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    bootcamp_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting || 'siemano'}</section>
      <Counter />
    </main>
  );
}

export default App;
