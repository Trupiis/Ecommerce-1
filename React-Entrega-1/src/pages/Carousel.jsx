import { Box, Image, Text, Center, ChakraProvider } from '@chakra-ui/react';
import styles from '../../styles/Carousel.module.css'

/* export const Carousel = ({children}) =>{
    return (
        <Box bgColor={'#f0f0f0'} minHeight={'100vh'}>
            <Text className={styles.titulo}>DELEITATE</Text>
            {children}
        </Box>
    )
}
 */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export const Carousel = () => {
  return (
    <Box className={styles.Carrusel}>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.Swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
