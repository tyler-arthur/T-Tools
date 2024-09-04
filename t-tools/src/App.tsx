import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import generatePassword from './scripts/password-generator';

function App() {
  return (
    <div className="App">
      <Input type="checkbox" />
      <Input type="button" onclick={() => console.log(generatePassword(true, true, true, true))}/>
    </div>
  );
}

export default App;
