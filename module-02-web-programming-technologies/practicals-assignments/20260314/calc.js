// let str = "12345asd567";

function calculateSumOfStringofNumber(str) {

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i]))
            continue;
        else
            sum += parseInt(str[i]);
    }
    console.log(`Sum is ${sum}`);
}

module.exports = calculateSumOfStringofNumber;