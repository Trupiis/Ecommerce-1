import React, {useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { CardProduct } from '../components/index';
import styles from '../../styles/Carousel.module.css';
import images from '../assets/OREO.png';

const productsData = [
  {
    id: 1,
    nombre: 'Postre Oreo',
    descripcion: "La vieja confiable, totalmente infaltable a la hora del bajón. Si sos goloso capaz lo terminas, sino lo podes compartir con quien más quieras!",
    precio: 5600,
    imagen: images
  },
  {
    id: 2,
    nombre: 'Postre Chocotorta',
    descripcion: "En nuestra opinión, la mejor opción para los no tan fanáticos del dulce. La combinación del queso crema y el dulce de leche es ideal para comer algo dulce sin empalagarte!",
    precio: 4000,
    imagen: images
  },
  {
    id: 3,
    nombre: 'Postre CheeseCake',
    descripcion: "La combinación del cheesecake con el ácido de nuestra mermelada casera de frutos rojos es un mil. ¿Te animas a probarlo?",
    precio: 5600,
    imagen: images
  },
  {
    id: 4,
    nombre: 'Postre Brownie',
    descripcion: "Hecho con nuestro brownie secreto, crema y muuuuuucho dulce de leche. Ideal para los más golosos.",
    precio: 4500,
    imagen: images
  }
];


export const Carousel = () => {
  useEffect(() => {
    // Obtener las clases de sombra al montar el componente
    const shadowUno = document.getElementsByClassName('swiper-slide-shadow-left');
    const shadowDos = document.getElementsByClassName('swiper-slide-shadow-coverflow');

    if (shadowUno.length > 0) {
      shadowUno[0].classList.remove('swiper-slide-shadow-left');
    }
    if (shadowDos.length > 0) {
      shadowDos[0].classList.remove('swiper-slide-shadow-coverflow');
    }

    console.log('ShadowUno');
    console.log('ShadowDos');
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <Box className={styles.Carrusel}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={5}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className={styles.Swiper}
      >
        {productsData.map((product) => (
          <SwiperSlide key={product.id} className={styles.swiperSlide}>
            <CardProduct products={[product]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
