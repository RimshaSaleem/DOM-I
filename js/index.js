const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// task 1 set navbar
let nav = document.querySelector('nav');

let navs = document.querySelectorAll('a');
navs[0].textContent= siteContent["nav"]["nav-item-1"];
navs[1].textContent= siteContent["nav"]["nav-item-2"];
navs[2].textContent= siteContent["nav"]["nav-item-3"];
navs[3].textContent= siteContent["nav"]["nav-item-4"];
navs[4].textContent= siteContent["nav"]["nav-item-5"];
navs[5].textContent= siteContent["nav"]["nav-item-6"];

navs[0].style.color= 'green';
navs[1].style.color= 'green';
navs[2].style.color= 'green';
navs[3].style.color= 'green';
navs[4].style.color= 'green';
navs[5].style.color= 'green';

var home = document.createElement("a");
home.innerText = "Home"
home.href = '#';
home.style.color='green';
var blog = document.createElement("a");
blog.innerText = "Blog";
blog.href='#';
blog.style.color = 'green';

nav.prepend(home);
nav.appendChild(blog);

// task 2
let headertwo = document.querySelector('h1');
let buttons = document.querySelector('button');
let extraImage = document.getElementById('cta-img');
let h4Tags = document.querySelectorAll('h4');
let pTags = document.querySelectorAll('p');
let imagecenter = document.getElementById('middle-img');

headertwo.textContent = siteContent["cta"]["h1"];
buttons.textContent = siteContent["cta"]["button"];
extraImage.src = "img/header-img.png";

h4Tags[0].textContent = siteContent['main-content']['features-h4'];
h4Tags[1].textContent = siteContent['main-content']['about-h4'];
h4Tags[2].textContent = siteContent['main-content']['services-h4'];
h4Tags[3].textContent = siteContent['main-content']['product-h4'];
h4Tags[4].textContent = siteContent['main-content']['vision-h4'];

pTags[0].textContent = siteContent['main-content']["features-content"];
pTags[1].textContent = siteContent['main-content']["about-content"];
pTags[2].textContent = siteContent['main-content']["services-content"];
pTags[3].textContent = siteContent['main-content']["product-content"];
pTags[4].textContent = siteContent['main-content']["vision-content"];

imagecenter.src = "img/mid-page-accent.jpg";

h4Tags[5].textContent = siteContent["contact"]["contact-h4"];
pTags[5].textContent = siteContent["contact"]["address"];
pTags[6].textContent = siteContent["contact"]["phone"];
pTags[7].textContent = siteContent["contact"]["email"];

pTags[8].textContent = siteContent["footer"]["copyright"];