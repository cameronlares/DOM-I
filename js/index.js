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

logo.setAttribute('src', siteContent.nav["img-src"]) // second arg is the variable. nav is object, img-src is value of that object[]


//console.log(siteContent.nav["nav-item-1"])

//CTA
let ctaText = document.querySelector(".cta-text");
ctaText.children[0].textContent=siteContent["cta"]["h1"]
let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent.cta["img-src"])

let ctaButton=document.querySelector("button");
ctaButton.textContent=siteContent["cta"]["button"]

//Nav
let navNode = document.querySelector("nav")
navNode.childNodes[1].textContent=siteContent["nav"]["nav-item-1"]
navNode.childNodes[3].textContent=siteContent["nav"]["nav-item-2"]
navNode.childNodes[5].textContent=siteContent["nav"]["nav-item-3"]
navNode.childNodes[7].textContent=siteContent["nav"]["nav-item-4"]
navNode.childNodes[9].textContent=siteContent["nav"]["nav-item-5"]
navNode.childNodes[11].textContent=siteContent["nav"]["nav-item-6"]
//Nav

let textContent_1= document.querySelector(".top-content .text-content:nth-child(1)");
let textContent_2= document.querySelector(".top-content .text-content:nth-child(2)");



textContent_1.children[0].textContent=siteContent['main-content']['features-h4'];
textContent_1.children[1].textContent=siteContent['main-content']['features-content'];

textContent_2.children[0].textContent=siteContent['main-content']['about-h4'];
textContent_2.children[1].textContent=siteContent['main-content']['about-content'];


//Middle Content

let middleimg= document.querySelector("#middle-img")
// middleimg.classList.add("middle-img")
// middleimg.setAttribute("id","middle-img")
middleimg.setAttribute("src",siteContent["main-content"]["middle-img-src"])

let bottomContent_1=document.querySelector(".bottom-content .text-content")
bottomContent_1.children[0].textContent=siteContent['main-content']['services-h4']
bottomContent_1.children[1].textContent=siteContent['main-content']['services-content']

let bottomContent_2=document.querySelector(".bottom-content .text-content:nth-child(2)")
bottomContent_2.children[0].textContent=siteContent['main-content']['product-h4']
bottomContent_2.children[1].textContent=siteContent['main-content']['product-content']

let bottomContent_3=document.querySelector(".bottom-content .text-content:nth-child(3)")
bottomContent_3.children[0].textContent=siteContent['main-content']['vision-h4']
bottomContent_3.children[1].textContent=siteContent['main-content']['vision-content']


let contact=document.querySelector(".contact")

let br=document.createElement("br")

//contact
contact.children[0].textContent=siteContent["contact"]["contact-h4"]
contact.children[1].textContent=siteContent["contact"]["address"]
contact.children[2].textContent=siteContent["contact"]["phone"]
contact.children[3].textContent=siteContent["contact"]["email"]

let footer= document.querySelector("footer");
footer.children[0].textContent=siteContent["footer"]["copyright"]


// contact.insertBefore(br,contact.children[1])

// "contact-h4" : "Contact",
// "address" : "123 Way 456 Street Somewhere, USA",
// "phone" : "1 (888) 888-8888",
// "email" : "sales@greatidea.io",