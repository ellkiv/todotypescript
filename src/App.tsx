import React, { FC } from 'react';
import './App.css';

import ToDoList from './components/ToDoList'

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">To-Do-List</header>
      <ToDoList />
    </div>
  );
}

export default App;
