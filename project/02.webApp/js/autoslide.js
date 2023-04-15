/* *****************************
	* SNS 이미지 드래그 슬라이드
	* swiper.js 필요
***************************** */
  let swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true, // 무한루프(기본값:false)
      pagination: {
        // 블릿설정
        el: ".swiper-pagination", // 블릿요소설정
        clickable: true, // 클릭가능여부
      },
      autoplay: {
        // 자동넘김설정
        delay: 4000, // 시간간격(1/1000초)
        disableOnInteraction: false,
        // 상호작용(건드리는 것!)이 없으면 다시 재시작(false일때)
      },
      slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)
    });
