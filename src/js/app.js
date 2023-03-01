// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

const textSlider = new Swiper('.js-text-slider',{
	autoplay: true,
	direction: 'horizontal',
	effect: 'fade',

})

const imageSlider = new Swiper('.js-image-slider',{
	effect: 'fade'
})

textSlider.controller.control = imageSlider
imageSlider.controller.control = textSlider
