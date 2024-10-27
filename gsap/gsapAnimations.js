let tl = gsap.timeline();
tl.from(".header", {
  delay: 0.1,
  ease: "power1.in",
  y: -100,
  duration: 0.5,
});
tl.from("#logo", {
  delay: 0.1,
  x: -250,
  ease: "sine.in",
  duration: 0.5,
},"header");
tl.from("#menuToggle", {
  delay: 0.1,
  x: 100,
  ease: "sine.in",
  duration: 0.5,
},"header");
