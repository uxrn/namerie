import { domain_names } from './domains.js';

// https://codepen.io/kevinpowell/pen/BavVLra ----

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// ----

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
};

// Function to populate the <ul> with <li> items containing links in random order
const populateListRandomly = () => {
  const ul = document.getElementById('domainList');
  const domainKeys = Object.keys(domain_names);
  const shuffledKeys = shuffleArray(domainKeys);

  shuffledKeys.forEach(domain => {
    const li = document.createElement('li');
    li.classList.add('tag-list'); // Optional, for styling purposes

    // Set the onclick event to open the URL in a new tab
    li.onclick = () => window.open(`https://namerie.com/forsale.html?url=${domain}`, '_blank');
    li.textContent = domain; // Set the text inside <li>
    
    ul.appendChild(li);
  });
};

populateListRandomly();