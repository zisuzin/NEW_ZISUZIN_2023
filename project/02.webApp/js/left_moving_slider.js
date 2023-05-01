document.addEventListener('DOMContentLoaded', function() {
  // 변수 초기화
  let slider = document.querySelector('.swiper5');
  let slides = slider.querySelector('.swiper-wrapper');
  let slideCount = slides.children.length;
  let slideWidth = slider.offsetWidth / slideCount;
  let currentIndex = 0;
  let timeoutId;

  // 슬라이드 초기화
  slides.style.width = slideCount * 100 + '%';
  Array.prototype.forEach.call(slides.children, function(child) {
    child.style.width = slideWidth + '%';
  });

  // 슬라이드 이동 함수
  function moveSlides() {
    currentIndex++;
    if (currentIndex >= slideCount) {
      currentIndex = 0;
    }
    slides.style.transform = 'translateX(-' + currentIndex * slideWidth + 'px)';
    timeoutId = setTimeout(moveSlides, 1200);
  }

  // 자동 슬라이드
  timeoutId = setTimeout(moveSlides, 450);

  // 마우스 호버 이벤트
  slider.addEventListener('mouseover', function() {
    clearTimeout(timeoutId);
  });
  slider.addEventListener('mouseout', function() {
    timeoutId = setTimeout(moveSlides, 450);
  });
});
