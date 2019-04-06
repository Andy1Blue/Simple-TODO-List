import React, { useState, useEffect } from 'react';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';

const NotFound = ({ location }) => {
  const [counter, setCounter] = useState(10);
  const countdown = () => setCounter(counter - 1);

  useEffect(() => {
    const id = setTimeout(countdown, 1000);
    return () => clearTimeout(id);
  }, [counter]);

  return (
    <div>
      <p>No match for <code>{location.pathname}</code></p>
      <p>Redirect in {counter} seconds!</p>
      <p><Link to='/'>Back to home page</Link></p>
      {counter === 0 && <Redirect to='/' />}
    </div>
  )
}

export default NotFound;