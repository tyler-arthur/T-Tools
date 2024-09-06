import './App.css';
import Input from './components/Input';
import generatePassword from './scripts/password-generator';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Input type="checkbox" />
      <Button className='input-button' text='Generate Password' onclick={() => console.log(generatePassword(true, true, true, true))} />
    </div>
  );
}

export default App;
