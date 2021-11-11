 // swiper
 var wide = window.innerWidth;
 if (wide > 1000) {
   var slidercount = 3;
 } else {
   var slidercount = 1.5;
 }
 console.log(wide);
 console.log(slidercount);

 var swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   spaceBetween: 0,
   slidesPerView: slidercount,
   effect: "slide",
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });