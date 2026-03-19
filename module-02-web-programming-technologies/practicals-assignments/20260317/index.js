let num = 6;
let arr = [];
let sum = 0;

for (let i = 1; i <= num - 1; i++) {
    if (num % i === 0)
        arr.push(i);
}

for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
}

if (num === sum)
    console.log("true");
else
    console.log("false");

// ------- OR -------
// Short version
let n = 7;
let s = 0;

for (let i = 1; i <= n - 1; i++) {
    if (n % i === 0) {
        s += i;
    }
}

if (n === s)
    console.log("true");
else
    console.log("false");