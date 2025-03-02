import { domain_names } from './domains.js';

// Function to get the SLD (second-level domain) from a domain
const getSLD = (domain) => {
  const parts = domain.split('.');
  return parts[0];
};

// Function to get TLD (top-level domain) from a domain
const getTLD = (domain) => {
  const parts = domain.split('.');
  return parts[parts.length - 1];
};

// Function to create a category section
const createCategorySection = (title, domains) => {
  if (!domains || domains.length === 0) return null;

  const section = document.createElement('div');
  section.classList.add('category');
  
  const heading = document.createElement('h2');
  heading.textContent = title;
  section.appendChild(heading);

  const ul = document.createElement('ul');
  ul.classList.add('fs-list');

  domains.forEach(domain => {
    const li = document.createElement('li');
    li.onclick = () => window.open(`https://namerie.com/forsale.html?url=${domain}`, '_blank');
    li.textContent = domain;
    ul.appendChild(li);
  });

  section.appendChild(ul);
  return section;
};

// Function to sort domains by length and alphabetically
const sortDomains = (domains) => {
  return domains.sort((a, b) => {
    const lenA = getSLD(a).length;
    const lenB = getSLD(b).length;
    if (lenA !== lenB) return lenA - lenB;
    return a.localeCompare(b);
  });
};

// Function to populate the domain list with categories
const populateDNList = () => {
  const container = document.querySelector('.fs-container');
  const domainKeys = Object.keys(domain_names);

  // Categorize domains
  const shortDomains = [];
  const comDomains = [];
  const netDomains = [];
  const orgDomains = [];
  const xyzDomains = [];
  const otherDomains = [];

  domainKeys.forEach(domain => {
    const sld = getSLD(domain);
    const tld = getTLD(domain);

    if (sld.length <= 2) {
      shortDomains.push(domain);
    } else {
      switch (tld) {
        case 'com':
          comDomains.push(domain);
          break;
        case 'net':
          netDomains.push(domain);
          break;
        case 'org':
          orgDomains.push(domain);
          break;
        case 'xyz':
          xyzDomains.push(domain);
          break;
        default:
          otherDomains.push(domain);
          break;
      }
    }
  });

  // Sort each category
  const categories = [
    { title: '1-2 character domains', domains: sortDomains(shortDomains) },
    { title: '.com domains', domains: sortDomains(comDomains) },
    { title: '.net domains', domains: sortDomains(netDomains) },
    { title: '.org domains', domains: sortDomains(orgDomains) },
    { title: '.xyz domains', domains: sortDomains(xyzDomains) },
    { title: 'other domains', domains: sortDomains(otherDomains) }
  ];

  // Clear existing content
  container.innerHTML = '';

  // Add each category section
  categories.forEach(category => {
    const section = createCategorySection(category.title, category.domains);
    if (section) {
      container.appendChild(section);
    }
  });
};

populateDNList();