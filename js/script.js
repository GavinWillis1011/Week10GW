console.log("script.js loaded");
const API_KEY = 'YOUR_GIPHY_API_KEY_HERE'; 

const fetchButton = document.querySelector('button'); 
const gifContainer = document.querySelector('#gif-container');
const searchInput = document.querySelector('#search-input');

fetchButton.addEventListener('click', async () => {
    gifContainer.innerHTML = '';
    
    const searchTerm = searchInput.value.trim() || 'funny cat';
    const endpoint = `https://giphy.com{API_KEY}&q=${encodeURIComponent(searchTerm)}&limit=12&rating=g`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonResponse = await response.json();
        const gifsData = jsonResponse.data;

        gifsData.forEach(gif => {
            const imageUrl = gif.images.fixed_height.url;
            gifContainer.innerHTML += `<img src="${imageUrl}" class="col-3 mb-3" alt="${gif.title}">`;
        });

        if (gifsData.length === 0) {
            gifContainer.innerHTML = `<p class="text-center col-12">No GIFs found for "${searchTerm}". Try another keyword!</p>`;
        }
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        gifContainer.innerHTML = `<p class="text-danger text-center col-12">Failed to load GIFs. Please try again later.</p>`;
    }
});
