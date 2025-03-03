import { domain_names } from './domains.js';

// remember, the domain_names array won't load directly in chrome, cause the domain_names array is set to "export" and a seperate local file
// and can only be loaded by "module" files (security measure by chrome)
// you have to test it in a live server

function binCheck() {
  if (!(url in domain_names))
  {
    document.getElementById('div-error').style.display = "inline-block";
    document.getElementById('div-banner').style.display = "none";
    document.getElementById('div-bin').style.display = "none";
    document.getElementById('div-offer').style.display = "none";
    document.getElementById('div-info').style.display = "none";
    document.getElementById('div-info-top').style.display = "none";
    document.getElementById('div-info-bottom').style.display = "none";
    document.getElementById('div-sedo-offer').style.display = "none";
    return;
  }
  if (domain_names[url][0] == "m") 
  {
    document.getElementById('div-bin').style.display = "none";
    document.getElementById('bin-price-line').style.display = "none";
    document.getElementById('bin-price-line-mobile').style.display = "none";
  }
  else if (domain_names[url][0] == "b") 
  {
    document.getElementById('bin-button').innerHTML = domain_names[url][1].toLocaleString();
    document.getElementById('bin-button-mobile').innerHTML = domain_names[url][1].toLocaleString();
  }
  
  document.getElementById('offer-price').setAttribute('value', domain_names[url][1]);
  document.getElementById('bin-price').setAttribute('value', domain_names[url][1]);
  document.getElementById('bin-img-title').setAttribute('src', "https://t.escrow.com/1px.gif?name=bin&price=" + domain_names[url][1] + "&title=" + url + "&user_id=2784092");
  document.getElementById('bin-name').setAttribute('value', url);
  document.getElementById('bin-title').setAttribute('value', url);
  document.getElementById('offer-name').setAttribute('value', url);
  document.getElementById('offer-title').setAttribute('value', url);
  document.getElementById('offer-img-title').setAttribute('src', "https://t.escrow.com/1px.gif?name=bin&price=0&title=" + url + "&user_id=2784092");
  document.getElementById('sedo-form').setAttribute('href', "https://sedo.com/checkdomainoffer.php?language=us&domain=" + url + "&&campaignId=333846");
}

binCheck();
