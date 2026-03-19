export default function IsPalindome() {
    function checkIsPalindrome() {
        const value = document.getElementById("num").value;

        if (!value) {
            document.getElementById("resultOfPalindrome").innerText = "Please, enter a number";
            return;
        }

        let num = parseInt(value);
        let originalValue = num;
        let reverseNumber = 0;

        while (num > 0) {
            let lastDigit = num % 10;
            reverseNumber = reverseNumber * 10 + lastDigit;
            num = Math.floor(num / 10);
        }

        if (originalValue === reverseNumber)
            document.getElementById("resultOfPalindrome").innerHTML = `${value} is a <b>Palindrome</b>`;
        else
            document.getElementById("resultOfPalindrome").innerHTML = `${value} is <b>NOT a Palindrome</b>`;

        console.log("clicked");
    }
    return (
        <>
            <label htmlFor="num">Enter number to check Palindome </label>
            <input type="number" name="num" id="num" />
            <button onClick={checkIsPalindrome}>Check</button>
            <br />
            <br />

            <p id="resultOfPalindrome"></p>
        </>
    )
}