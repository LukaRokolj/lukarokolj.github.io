about = document.getElementById("about");
skills = document.getElementById("skills");
technologies = document.getElementById("technologies");
projects = document.getElementById("projects");
news = document.getElementById("news");
contact = document.getElementById("contact");

function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }
    
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    
    var opacity = 1;
    
    if (scrollTop > distanceToTop) {
      opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
    }
    
    if (opacity >= 0) {
      element.style.opacity = opacity;
    }
  }
  
  function scrollHandler() {
    fadeOutOnScroll(about);
  }
  
  window.addEventListener('scroll', scrollHandler)