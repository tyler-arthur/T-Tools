import './App.css';
import Input from './components/Input';
import generatePassword from './scripts/password-generator';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [slider, setSlider] = useState<number|string>(12);
  const [password, setPassword] = useState<string>('');

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSlider(parseInt(e.currentTarget.value, 10));
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => setPassword(generatePassword(true, true, true, true, slider))
  const copyToClipboard = () => {navigator.clipboard.writeText(password)}

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <Input className="input-slider" type="range" min={1} max={128} value={slider} label={`${slider}`} onChange={handleSliderChange} />
      <Button className='input-button' text='Generate Password' onclick={handlePasswordChange} />
      <div className='flex-parent-center'>
        <div className='password-field'>{password !== '' ? password : ''}</div>
      </div>
      <Button className='clipboard-copy input-button' text='Copy to clipboard' disabled={password === '' ? false : true} onclick={copyToClipboard} />
    </div>
  );
}

export default App;
