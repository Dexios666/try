const header = document.querySelector("header");

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 100
  });
  
  ScrollReveal().reveal('.home-text h5, .center-text h2, .connect h2, .piece1-img, .mabuti h5', { origin:'top' });
  ScrollReveal().reveal('.home-text h1, .home-text p, .projects-container, .mabuti p', { origin:'bottom' });
  ScrollReveal().reveal('.connect-container', { origin:'left' });
  