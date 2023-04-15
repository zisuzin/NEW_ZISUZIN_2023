function autoSlide() {}
export default autoSlide {
    let swiper = new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
    });
}