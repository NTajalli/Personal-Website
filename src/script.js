import './styles.css';
import linkedin_icon from './github-icon.png';
import github_icon from './linkedin-icon.png';

const typeEffectElement = document.getElementById("typeEffect");
const words = ["Innovator", "Software Engineer", "Computer Scientist", "Mathematician", "Problem-Solver", "Creative Thinker", "technologist"];
let wordIndex = 0;
let letterIndex = 0;


function typeEffect() {
    if (letterIndex < words[wordIndex].length) {
      document.getElementById("cursor").style.visibility = "visible"; // Show cursor
      typeEffectElement.textContent += words[wordIndex][letterIndex];
      letterIndex++;
      setTimeout(typeEffect, 100);
    } else {
      document.getElementById("cursor").style.visibility = "hidden"; // Hide cursor during erase
      setTimeout(eraseEffect, 100);
    }
  }
  
  function eraseEffect() {
    if (letterIndex > 0) {
      typeEffectElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(eraseEffect, 100);
    } else {
      document.getElementById("cursor").style.visibility = "visible"; // Show cursor again
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 100);
    }
  }
  

typeEffect();

document.getElementById('hamburger-btn').addEventListener('click', function() {
  var navbarLinks = document.getElementById('navbar-links');

  if (navbarLinks.style.maxHeight === '0px' || navbarLinks.style.maxHeight === '') {
    navbarLinks.style.maxHeight = '300px'; /* Adjust based on your estimated total height of links */
    navbarLinks.style.minHeight = '300px';
  } else {
    navbarLinks.style.maxHeight = '0px';
    navbarLinks.style.minHeight = '0px';
  }
});

