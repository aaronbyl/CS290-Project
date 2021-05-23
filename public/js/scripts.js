const carouselWrapper = document.querySelector('.carouselWrapper');
const carousel = carouselWrapper.querySelector('.carousel');
const nextBtn = carouselWrapper.querySelector('.btn.next');
const prevBtn = carouselWrapper.querySelector('.btn.prev');
const itemWidth = carouselWrapper.querySelector('.carouselItem').clientWidth;
//var autoScrollVar = autoScroll();
var autoScrollVar = function() {
  setInterval(scrollToNextItem, 5000);
}

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);
window.addEventListener('load', autoScrollVar);

function scrollToNextItem() {
  if(carousel.scrollLeft < (carousel.scrollWidth - itemWidth)) {
    carousel.scrollBy({left: itemWidth, top: 0, behavior:'smooth'});
  } else {
    carousel.scrollTo({left: 0, top: 0, behavior:'smooth'});
  }
}

function scrollToPrevItem() {
  if(carousel.scrollLeft != 0) {
    carousel.scrollBy({left: -itemWidth, top: 0, behavior:'smooth'});
  } else {
    carousel.scrollTo({left: carousel.scrollWidth, top: 0, behavior:'smooth'});
  }
}
