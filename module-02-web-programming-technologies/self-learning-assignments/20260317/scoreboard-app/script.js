const API_URL = 'data.json'; // Replace with real API if available

function fetchScores() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', API_URL, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            renderScores(data);
        } else {
            console.error('Failed to fetch data');
        }
    };

    xhr.onerror = function () {
        console.error('Request error');
    };

    xhr.send();
}

function renderScores(scores) {
    const tbody = document.getElementById('scoreBody');
    tbody.innerHTML = '';

    scores.forEach(match => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${match.team}</td>
            <td>${match.score}</td>
            <td>${match.status}</td>
        `;

        tbody.appendChild(row);
    });
}

// Initial load
fetchScores();

// Auto-refresh every 5 seconds (live update)
setInterval(fetchScores, 5000);