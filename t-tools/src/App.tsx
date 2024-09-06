import './App.css';
import Input from './components/Input';
import generatePassword from './scripts/password-generator';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [slider, setSlider] = useState<number|string>(12);
  const [password, setPassword] = useState<string>('');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSlider(parseInt(e.currentTarget.value, 10));
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(generatePassword(true, true, true, true))

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <Input className="input-slider" type="range" min={1} max={128} value={slider} label={`${slider}`} onChange={handleSliderChange} />
      <Button className='input-button' text='Generate Password' onclick={handlePasswordChange} />
      <Input type='textarea' value={password} />
    </div>
  );
}

export default App;
