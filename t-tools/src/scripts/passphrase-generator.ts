const getWords = async (x: any) => {
    const url = `https://random-word-api.vercel.app/api?words=${x}`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw Error(`Response status: ${response.status}`)
        const json = await response.json();
        return json;
    } catch (error: any) {
        console.error(error.message);
    }
}