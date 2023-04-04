window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
})
gsap.from(".nav-in-text", {
    opacity: 0, 
    y: 100, 
    duration: 1.5
  });
  gsap.from(".img-s", {
    opacity: 0, 
    x: -100, 
    duration: 1.5
  });
  gsap.from(".card-caption", {
    opacity: 1, 
    y: -100, 
    duration: 1.5
  });

  const card = document.querySelector(".card__inner");

  card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  });
  const card1 = document.querySelector(".card__inner1");

  card1.addEventListener("click", function (e) {
    card1.classList.toggle('is-flipped1');
  });
  const card2 = document.querySelector(".card__inner2");

  card2.addEventListener("click", function (e) {
    card2.classList.toggle('is-flipped2');
  });
  