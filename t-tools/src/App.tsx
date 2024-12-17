import './App.css';
import { useState, useEffect } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import PasswordGenerator from './components/PasswordGenerator';
import PassPhraseGenerator from './components/PassPhraseGenerator';

function App() {
  const [slider, setSlider] = useState<number>(12);
  const [password, setPassword] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password')

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSlider(parseInt(e.currentTarget.value, 10));
  const copyToClipboard = () => { navigator.clipboard.writeText(password) }
  const handlePasswordTypeChange = (e: React.ChangeEvent<HTMLInputElement>): void => passwordType === 'password' ?
    setPasswordType('passphrase') :
    setPasswordType('password');

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <h3>{passwordType === 'password' ? 'Password' : 'Pass Phrase'}</h3>
      <label className="switch">
        <input type="checkbox" onChange={handlePasswordTypeChange} />
        <span className="slider round"></span>
      </label>
      {passwordType === 'password' &&
        <PasswordGenerator
          slider={slider}
          setPassword={setPassword}
        />
      }
      {passwordType === 'passphrase' &&
        <PassPhraseGenerator
          slider={slider}
          setPassword={setPassword}
        />
      }
      <Input className="input-slider" type="range" min={1} max={128} value={slider} label={`${slider}`} onChange={handleSliderChange} />
      <div className='flex-parent-center'>
        <div className='password-field'>{password !== '' ? password : ''}</div>
      </div>
      <Button className='clipboard-copy input-button' text='Copy to clipboard' disabled={password === '' ? false : true} onclick={copyToClipboard} />
    </div >
  );
}

export default App;
