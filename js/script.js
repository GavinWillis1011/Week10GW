console.log("script.js loaded");
const API_KEY = 'YOUR_GIPHY_API_KEY_HERE'; 

const fetchButton = document.querySelector('button'); 
const gifContainer = document.querySelector('#gif-container');
const searchInput = document.querySelector('#search-input');

fetchButton.addEventListener('click', async () => {
    gifContainer.innerHTML = '';
    console.log("Button clicked!");
});

