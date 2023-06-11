// script.js
// JavaScript code for any dynamic behavior on the home page

// You can add your custom JavaScript code here

// Example: Smooth scrolling to anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let link of anchorLinks) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').substr(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const targetOffsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});
