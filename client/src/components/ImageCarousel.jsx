import React, { useRef, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import { Container, Button } from 'react-bootstrap';

function ImageCarousel({ images }) {

    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <div></div>,
        prevArrow: <div></div>
    };

    const handlePrev = useCallback(() => {
        sliderRef.current.slickPrev();
    }, []);

    const handleNext = useCallback(() => {
        sliderRef.current.slickNext();
    }, []);

    return (
        <Container>
            <Slider ref={sliderRef} {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`Carousel item ${index = 1}`} className="img-fluid" />
                    </div>
            ))}
            </Slider>
            <div className="arrows">
                    
            </div>
        </Container>
    );
}

export default ImageCarousel;