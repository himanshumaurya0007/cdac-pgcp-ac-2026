// ------- WAP to check if a number is palindrome. -------
let num = 12321;

let originalNumber = num;
let reverseNumber = 0;

while (num > 0) {
    let lastDigit = num % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    num = Math.floor(num / 10);
}

if (originalNumber === reverseNumber)
    console.log("Palindrome");
else
    console.log("Not a palindrome");