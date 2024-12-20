import { domain_names } from './domains.js';

// Function to populate the <ul> with <li> items containing links in random order
const populateDNList = () => {
  const ul = document.getElementById('domainFSList');
  const domainKeys = Object.keys(domain_names);

  domainKeys.forEach(domain => {
    const li = document.createElement('li');
    li.classList.add('fs-list'); // Optional, for styling purposes

    // Set the onclick event to open the URL in a new tab
    li.onclick = () => window.open(`https://namerie.com/forsale.html?url=${domain}`, '_blank');
    li.textContent = domain; // Set the text inside <li>
    
    ul.appendChild(li);
  });
};

populateDNList();