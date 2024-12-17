import { SetStateAction } from "react";

export const getWords = async (x: number): Promise<Array<string>> => {
    const url = `https://random-word-api.vercel.app/api?words=${x}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw Error(`Response status: ${response.status}`)
        // console.log(response)
        const json = await response.json();
        // console.log(json)
        const passphrase = json.join(' ');
        console.log(passphrase)
        return passphrase;
    } catch (error: any) {
        console.log(error)
        throw Error(error.message);
    }
}