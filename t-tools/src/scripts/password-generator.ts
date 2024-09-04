interface characterSelection {
    num: Boolean;
    lower: Boolean;
    upper: Boolean;
    special: Boolean;
    size: number;
}

const numArr: Number[] = Array.from(Array(10).keys());
const strNumArr: String[] = numArr.map(num => num.toString())

const lowerCharArr: String[] = Array.from(Array(26).keys()).map(i => String.fromCharCode(i + 65));

const upperCharArr: String[] = lowerCharArr.map(char => char.toUpperCase());

const specialCharArr: String[] = Array.from(Array(14).keys()).map(i => String.fromCharCode(i + 33))
    .concat(Array.from(Array(6).keys()).map(i => String.fromCharCode(i + 91)))
    .concat(Array.from(Array(4).keys()).map(i => String.fromCharCode(i + 123)))

const generatePassword: any = (
    num = false,
    lower = false,
    upper = false,
    special = false,
    size = 12
) => {
    if (!num && !lower && !upper && !special) throw new Error("You must select one type of character for your password");
    
    const passwordSelectionArr: String[] = [];

    if (num) passwordSelectionArr.push.apply(passwordSelectionArr, strNumArr);
    if (lower) passwordSelectionArr.push.apply(passwordSelectionArr, lowerCharArr);
    if (upper) passwordSelectionArr.push.apply(passwordSelectionArr, upperCharArr);
    if (special) passwordSelectionArr.push.apply(passwordSelectionArr, specialCharArr);

    
    const password: String[] = [];

    let count: number = size;
    while (count) {
        password.push(passwordSelectionArr[Math.floor(Math.random() * passwordSelectionArr.length)]);
        count = count - 1;
    }

    return password;
}

export default generatePassword;