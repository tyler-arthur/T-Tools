import { SetStateAction, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import generatePassword from "../scripts/password-generator";

function PasswordGenerator(props: any) {
  const [checkLower, setCheckLower] = useState<boolean>(true);
  const [checkUpper, setCheckUpper] = useState<boolean>(true);
  const [checkNumber, setCheckNumber] = useState<boolean>(true);
  const [checkSpecial, setCheckSpecial] = useState<boolean>(true);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): SetStateAction<string> => props.setPassword(
    generatePassword(checkNumber, checkLower, checkUpper, checkSpecial, props.slider)
  );

  return (
    <div>
      <form className="flex-parent-start-column">
        <div className='flex-parent-center'>
          <label htmlFor="lower">Lowercase Letters</label>
          <Input id="lower" type="checkbox" checked={checkLower} onChange={() => setCheckLower(!checkLower)} />
        </div>
        <div className='flex-parent-center'>
          <label htmlFor="upper">Uppercase Letters</label>
          <Input id="upper" type="checkbox" checked={checkUpper} onChange={() => setCheckUpper(!checkUpper)} />
        </div>
        <div className='flex-parent-center'>
          <label htmlFor="number">Numbers</label>
          <Input id="number" type="checkbox" checked={checkNumber} onChange={() => setCheckNumber(!checkNumber)} />
        </div>
        <div className="flex-parent-center">
          <label htmlFor="special">Special Characters</label>
          <Input id="special" type="checkbox" checked={checkSpecial} onChange={() => setCheckSpecial(!checkSpecial)} />
        </div>
      </form>
      <Button className='input-button' text="Generate Password" onclick={handlePasswordChange} />
    </div>
  )
}

export default PasswordGenerator