import React, { Component } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from 'swiper';

import carouselItems1 from "../../data/carousel1.json";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import CarouselItem from "./CarouselItem";

export default class Carousel extends Component {
    render() {

        return (
            <div className="carousel">
                <h2 className="fw-bold mb-4">Handpicked Collections for You</h2>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={5.5}
                    navigation
                >
                    {
                        carouselItems1.map((currItem) => {
                            return (
                                <SwiperSlide key={currItem.id}>
                                    <CarouselItem item={currItem}/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        );
    }
}
