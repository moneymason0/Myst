import React, { useRef, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import { Container, Button } from 'react-bootstrap';
import '../styles/ImageCarousel.css'

function ImageCarousel({ images }) {

    const sliderRef = useRef(null);
    // Slick image carousel settings
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
    // Clicking the left arrow, sets the current image to the previous image
    const handlePrev = useCallback(() => {
        sliderRef.current.slickPrev();
    }, []);
    // Clicking the right arrow, sets the current image to the next image
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
                <Button className="arrow-btn" onClick={handlePrev}>
                    &lt;
                </Button>
                <Button className="arrow-btn" onClick={handleNext}>
                    &gt;
                </Button>
            </div>
        </Container>
    );
}

export default ImageCarousel;