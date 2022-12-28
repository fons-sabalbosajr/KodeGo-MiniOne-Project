/*------------- CHANGE BACKGROUND HEADER -------------*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >=50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*------------- SWIPER KS NAVIGATION -------------*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centerSlides: true,
    slidesPerView: 'auto',
    loop:true,

    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });