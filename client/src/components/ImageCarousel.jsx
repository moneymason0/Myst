import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';

function ImageCarousel ({ images }) {

    const sliderRef = React.useRef(null);

    // const [currentImage, setCurrentImage] = useState('');

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

    return (
        <div>Hello, again</div>
    );
}

export default ImageCarousel;