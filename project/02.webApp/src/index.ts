import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function MainSlider(cardList) {
	SwiperCore.use([Navigation, Scrollbar]);
	
    return (
    	<Swiper>
           {cardList.map(card => <SwiperSlide key={card.id}>{card}</SwiperSlide>)}
        </Swiper>
    );
}

export default MainSlider;