// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import Slide_1 from './Slide_1';
import Slide_2 from './Slide_2';
import Slide_3 from './Slide_3';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return (
        <Slider {...settings}>
            <div>
                <Slide_1 />
            </div>
            <div>
                <Slide_2 />
            </div>
            <div>
                <Slide_3 />
            </div>
        </Slider>
    );
};


export default Carousel;
