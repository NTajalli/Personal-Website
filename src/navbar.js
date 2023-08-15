
const hamburger = document.getElementById('hamburger-btn');
const dropdown = document.getElementById('navbar-links');

hamburger.addEventListener('click', () => {
    if(dropdown.style.maxHeight === '0px' || dropdown.style.maxHeight === '') {
        dropdown.style.maxHeight = '285px'; 
        dropdown.style.minHeight = '285px';
    } else {
        dropdown.style.maxHeight = '0px';
        dropdown.style.minHeight = '0px';
    }
});
