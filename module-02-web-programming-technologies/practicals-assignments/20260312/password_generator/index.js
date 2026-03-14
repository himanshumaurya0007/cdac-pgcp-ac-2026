function generatePassword() {

    let length = parseInt(document.getElementById("passwordLength").value);

    let characters = "";

    if (document.getElementById("small").checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (document.getElementById("capital").checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("number").checked) {
        characters += "0123456789";
    }

    if (document.getElementById("special").checked) {
        characters += "!@#$%^&*()_+-={}[]<>?/|";
    }

    if (characters === "") {
        document.getElementById("result").textContent =
        "Please select at least one option!";
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        password += characters.charAt(randomIndex);
    }

    document.getElementById("result").textContent = password;
}