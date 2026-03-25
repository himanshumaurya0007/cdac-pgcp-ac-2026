const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your API key

const newsContainer = document.getElementById('newsContainer');
const refreshBtn = document.getElementById('refreshBtn');

// Fetch News
const fetchNews = async () => {
    newsContainer.innerHTML = "<p>Loading news...</p>";

    try {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );

        const articles = response.data.articles;

        if (!articles.length) {
            newsContainer.innerHTML = "<p>No news found.</p>";
            return;
        }

        newsContainer.innerHTML = '';

        articles.forEach(article => {
            const card = document.createElement('div');
            card.className = 'news-card';

            card.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.url}" target="_blank">Read more →</a>
            `;

            newsContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error);
        newsContainer.innerHTML = "<p>Error fetching news.</p>";
    }
};

// Load on start
fetchNews();

// Refresh button
refreshBtn.addEventListener('click', fetchNews);