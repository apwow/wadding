window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 200)
})

window.onload = function(){
  
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
   
    prevBtn.addEventListener("click",function(){
      prevSlide();
   });
    nextBtn.addEventListener("click",function(){
      nextSlide();
   });
    
  }
 
  let slideNumber = 0;
  const prevSlide = () =>{
    const slides = document.getElementsByClassName('slides');
  const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName('current');
    currentSlide[0].classList.remove("current");
    if(slideNumber == 0){
      slideNumber = slides.length-1;
    }
    else{
        slideNumber = slideNumber-1;
    }
    slides[slideNumber].classList.add("current");
  }
  const nextSlide = () =>{
    const slides = document.getElementsByClassName('slides');
  const slider = document.getElementById("slider");
    const currentSlide = slider.getElementsByClassName('current');
    currentSlide[0].classList.remove("current");
    if(slideNumber == (slides.length-1)){
      slideNumber = 0;
    }
    else{
        slideNumber = slideNumber+1;
    }
    slides[slideNumber].classList.add("current");
  }
  (function() {
  
    var slideContainer = $('.slide-container');
    
    slideContainer.slick();
    
    $('.clash-card__image img').hide();
    $('.slick-active').find('.clash-card img').fadeIn(200);
    
    // On before slide change
    slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.slick-active').find('.clash-card img').fadeOut(1000);
    });
    
    // On after slide change
    slideContainer.on('afterChange', function(event, slick, currentSlide) {
      $('.slick-active').find('.clash-card img').fadeIn(200);
    });
    
  });

//  -----------------------------------------------
function toggle(){
  var x = document.getElementById("selector")
  var b = document.getElementById("wedding-revs")
  if(x.style.display === "none"){
    x.style.display = "none";
  }
  else{
    b.style.display = "flex";
    x.style.display = "none";
  }
}
// -------
function btn(){
  var x = document.getElementById("selector")
  var b = document.getElementById("wedding-revs")

  if(b.style.display === "none"){
    b.style.display = "none";
  }
  else{
    x.style.display = "flex";
    b.style.display = "none";
  }
}
// ------------------------------------------------

// var map = L.map('map').setView([32.1090, 44.9956], 11);
// mapLink = "<a href='http://openstreetmap.org'>OpenStreetMap</a>";
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'Leaflet &copy; ' + mapLink + ', contribution', maxZoom: 18 }).addTo(map);

// var taxiIcon = L.icon({
//   iconUrl: 'img/taxi.png',
//   iconSize: [70, 70]
// })

// var marker = L.marker([33.2380, 44.9956], { icon: taxiIcon }).addTo(map);

// map.on('click', function (e) {
//   console.log(e)
//   var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
//   L.Routing.control({
//     waypoints: [
//       L.latLng(34.2380, 44.9956),
//       L.latLng(e.latlng.lat, e.latlng.lng)
//     ]
//   }).on('routesfound', function (e) {
//     var routes = e.routes;
//     console.log(routes);

//     e.routes[0].coordinates.forEach(function (coord, index) {
//       setTimeout(function () {
//         marker.setLatLng([coord.lat, coord.lng]);
//       }, 100 * index)
//     })

//   }).addTo(map);
// });
