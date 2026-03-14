// ------- Program 1 -------
function loadData() {
    let request = new XMLHttpRequest();

    request.open("get", "https://fakestoreapi.com/products");

    request.send();

    request.onreadystatechange = function () {
        // ------- To display data from a single object (.../products/1) -------
        // if(this.readyState == 4 && this.status == 200)
        // {
        // let responseObject = JSON.parse(this.responseText);
        // console.log(responseObject);
        // document.getElementById("data").innerText = JSON.stringify(responseObject);

        // const table = document.getElementById("displayTable");
        // const tbody = table.querySelector("tbody");
        // // create table row
        // const row = document.createElement("tr");

        // row.innerHTML = `
        // <td>${responseObject.id}</td>
        // <td>${responseObject.title}</td>
        // <td>${responseObject.price}</td>
        // `;

        // tbody.appendChild(row);

        // // show table
        // table.style.display = "table";
        // }

        // ------- To display data from array of objects (.../products) -------
        if (this.readyState == 4 && this.status == 200) {
            let responseObject = JSON.parse(this.responseText);
            // console.log(responseObject);

            const table = document.getElementById("displayTable");
            const tbody = table.querySelector("tbody");
            // create table row

            tbody.innerHTML = ""; // Clear previous rows

            responseObject.forEach(product => {
                const row = document.createElement("tr");

                row.innerHTML = `
                <td style="padding: 7px 13px;">${product.id}</td>
                <td style="padding: 7px 13px;">${product.title}</td>
                <td style="padding: 7px 13px;">${product.price}</td>
                `;

                tbody.appendChild(row);
            });

            // show table
            table.style.display = "table";
        }
    };
}

// ------- Program 2 -------
// Check previous days 'animation' assignment.

// ------- Program 3 -------
function validate() {
    let username = document.getElementById("username");

    console.log(username.checkValidity());
    if (username.checkValidity())
        document.getElementById("displayErrorMessage").innerText = "Okay! All validation successfull :)";
    else
        document.getElementById("displayErrorMessage").innerText = username.validationMessage;
}

// ------- Program 4 -------
function saveStudentData() {
    let sId = document.getElementById("id").value;
    let sName = document.getElementById("name").value;

    let student = {
        id: sId,
        name: sName
    };

    console.log(student);

    let tbody = document.querySelector("#studentDataTable tbody");

    let studentTableRow = document.createElement("tr");

    studentTableRow.innerHTML = `
        <td style="padding: 7px 13px;">${student.id}</td>
        <td style="padding: 7px 13px;">${student.name}</td>
    `;

    tbody.appendChild(studentTableRow);

    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
}

// ------- Program 5 -------
function calculateAge() {
    let pDob = document.getElementById("dob").value;

    if (!pDob) {
        document.getElementById("displayResult").innerText =
            "Please select your birth date.";
        return;
    }

    let birthDate = new Date(pDob);
    let today = new Date();

    // Remove time portion for accurate comparison
    today.setHours(0, 0, 0, 0);

    // Corner case: DOB in future
    if (birthDate > today) {
        document.getElementById("displayResult").innerText =
            "Invalid birth date! Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("displayResult").innerText =
        `Age: ${years} Years ${months} Months ${days} Days`;
}