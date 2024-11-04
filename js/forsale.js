const param = new URLSearchParams(location.search);
const url = param.get('url');
document.getElementById('urlid').innerHTML = url;
document.title = url.charAt(0).toUpperCase() + url.slice(1) + " is for sale!";
document.getElementById('urlid2').innerHTML = url.charAt(0).toUpperCase() + url.slice(1);

var isCaps = 0;

function capCheck() {
  if (isCaps == false) 
  {
    document.getElementById('urlid').innerHTML = url.toUpperCase();
    isCaps = true;
  }
  else if (isCaps == true) 
  {
    document.getElementById('urlid').innerHTML = url.toLowerCase();
    isCaps = false;
  }
  else 
  {
    document.getElementById('urlid').innerHTML = url;
  }
}

function offerSedo() {
  alert("To make an offer via Sedo.com, please email offer@namerie.com");
}

capCheck();