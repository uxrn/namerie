const param = new URLSearchParams(location.search);
const url = param.get('url');

// Set initial content
const urlElement = document.getElementById('urlid');
urlElement.innerHTML = url;

// Apply smaller font size for longer domains
if (url.length > 10) {
    urlElement.classList.add('f1-long');
    urlElement.classList.remove('f1');
}

document.title = url.charAt(0).toUpperCase() + url.slice(1) + " is for sale!";
document.getElementById('urlid2').innerHTML = url.charAt(0).toUpperCase() + url.slice(1);
document.getElementById('urlid2-mobile').innerHTML = url.charAt(0).toUpperCase() + url.slice(1);

var isCaps = 0;

function capCheck() {
    if (isCaps == false) {
        urlElement.innerHTML = url.toUpperCase();
        isCaps = true;
    }
    else if (isCaps == true) {
        urlElement.innerHTML = url.toLowerCase();
        isCaps = false;
    }
    else {
        urlElement.innerHTML = url;
    }
}

capCheck();
