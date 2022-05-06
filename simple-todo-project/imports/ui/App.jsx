import React from 'react';
import { Task } from './Task';

const tasks = [
  {_id: 1, text: 'Buy Mom some Flowers for mothers day'},
  {_id: 2, text: 'Get some MILK'},
  {_id: 3, text: 'Smoke some apple bongs'},
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>

    <ul>
      { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
  </div>
);
