const numArr: Number[] = Array.from(Array(10).keys());

const lowerCharArr: String[] = [...Array(26)].map((i) => String.fromCharCode(i + 65));

const upperCharArr: String[] = lowerCharArr.map(char => char.toUpperCase());

console.log(numArr, lowerCharArr, upperCharArr)

export default {
    numArr: numArr,
    lowerCharArr: lowerCharArr,
    upperCharArr: upperCharArr
}