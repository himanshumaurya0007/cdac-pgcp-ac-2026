// ------- Program 2 -------
const url = "https://jsonplaceholder.typicode.com/users/1";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log("Done executing..."));

const axios = require("axios");

async function getUser() {
    try {
        const res = await axios.get(url);
        console.log(res.data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Done executing using axios method");
    }
}
getUser();
