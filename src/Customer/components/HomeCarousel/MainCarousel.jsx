import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';
import './MainCarousel.css'

const MainCarousel = () => {
    const items = MainCarouselData.map((item) =>
        <img className='cursor-pointer' role='presentation' src={item.image} alt="" />)
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
        />
    )
}

export default MainCarousel;