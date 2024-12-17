import React from "react";
import Button from "./Button";
import { getWords } from "../scripts/passphrase-generator";

function PassPhraseGenerator(props: any) {

    const handlePassphraseChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<string> => {
        const passPhrase = props.setPassword(await getWords(props.slider));
        console.log(passPhrase)
        return passPhrase;
        // @ts-ignore
      };

    return (
        <Button className='input-button' text='Generate Pass Phrase' onclick={handlePassphraseChange} />
    )
}

export default PassPhraseGenerator