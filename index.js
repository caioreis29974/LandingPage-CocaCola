const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".main-container .header-image", {
  duration: 1000,
  delay: 1500,
});
ScrollReveal().reveal(".main-container #name1", {
  ...scrollRevealOption,
  origin: "right",
  delay: 2000,
});
ScrollReveal().reveal(".main-container .right", {
  ...scrollRevealOption,
  origin: "left",
  delay: 2000,
});
ScrollReveal().reveal(".main-container .btn.explore", {
  duration: 1000,
  delay: 2500,
});
ScrollReveal().reveal(".main-container .btn.promotions", {
  duration: 1000,
  delay: 3000,
});
ScrollReveal().reveal(".main-container .btn.news", {
  duration: 1000,
  delay: 3500,
});
ScrollReveal().reveal(".footer p", {
  duration: 1000,
  delay: 1000,
});

ScrollReveal().reveal(".footer-links", {
  duration: 0,
  delay: 0,
});