let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
    const inputText = input[i];
    // console.log(i);
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    }
    if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
        const vowelsText = vowels[j];
        // console.log(j);
        if (inputText === vowelsText) {
            resultArray.push(inputText);
            // console.log(inputText, vowelsText);
        } 
    }
}

const resultString = resultArray.join('').toUpperCase();

console.log(resultString);



