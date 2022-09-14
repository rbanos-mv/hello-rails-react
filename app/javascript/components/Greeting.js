import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  const greeting = useSelector((state) => state.greeting);
  return (
    <h1>{greeting}</h1>
  );
};

export default Greeting;
