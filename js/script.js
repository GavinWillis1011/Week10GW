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
        console.log('Giphy API Data:', jsonResponse.data);
    } catch (error) {
        console.error('Error fetching GIFs:', error);
    }
});
