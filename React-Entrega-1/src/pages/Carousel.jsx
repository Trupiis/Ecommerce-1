import React, { useEffect, useState } from "react";
import { Box, Container, Slide } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { CardProduct, ItemCounter } from "../components/index";
import styles from "../../styles/Carousel.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  useDisclosure
} from "@chakra-ui/react";

import P01 from "../assets/CARD-OREO.jpg";
import P02 from "../assets/CARD-RASTA.jpg";
import { ArrowLeft , ArrowRight} from 'phosphor-react';

export const Carousel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const openModalWithImage = (image) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Box className={styles.carrousel}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className={styles.sliderContainer}
      >
        <SwiperSlide className={styles.swiperSlide} onClick={() => openModalWithImage(P01)}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} onClick={() => openModalWithImage(P02)}>
          <img src={P02} alt="Rasta" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} onClick={() => openModalWithImage(P01)}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} onClick={() => openModalWithImage(P01)}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} onClick={() => openModalWithImage(P01)}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide} onClick={() => openModalWithImage(P01)}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
      </Swiper>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage} alt="Imagen del postre" />
            <ItemCounter></ItemCounter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};


/* export const Carousel = () => {
  return (
    <Box className={styles.carrousel}>
    
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: -75,
          depth: 250,
          modifier: 3.5,
          slideShadows: false,
        }}
        navigation={{
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev',
          clickable: true,
        }}

      modules={[EffectCoverflow, Navigation]}
      className={styles.sliderContainer}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src={P01} alt="Oreo" />
        </SwiperSlide>
      </Swiper>
    
    </Box>
  );
};  
 */


/* 
const productsData = [
  {
    id: 1,
    nombre: "Postre Oreo",
    descripcion:
      "La vieja confiable, totalmente infaltable a la hora del bajón. Si sos goloso capaz lo terminas, sino lo podes compartir con quien más quieras!",
    precio: 5600,
    imagen: images,
  },
  {
    id: 2,
    nombre: "Postre Chocotorta",
    descripcion:
      "En nuestra opinión, la mejor opción para los no tan fanáticos del dulce. La combinación del queso crema y el dulce de leche es ideal para comer algo dulce sin empalagarte!",
    precio: 4000,
    imagen: images,
  },
  {
    id: 3,
    nombre: "Postre CheeseCake",
    descripcion:
      "La combinación del cheesecake con el ácido de nuestra mermelada casera de frutos rojos es un mil. ¿Te animas a probarlo?",
    precio: 5600,
    imagen: images,
  },
  {
    id: 4,
    nombre: "Postre Brownie",
    descripcion:
      "Hecho con nuestro brownie secreto, crema y muuuuuucho dulce de leche. Ideal para los más golosos.",
    precio: 4500,
    imagen: images,
  },
];

export const Carousel = () => {
  useEffect(() => {
    // Usar setTimeout para esperar a que Swiper haya hecho su renderizado
    const timeoutId = setTimeout(() => {
      const shadowUno = document.getElementsByClassName(
        "swiper-slide-shadow-left"
      );
      const shadowDos = document.getElementsByClassName(
        "swiper-slide-shadow-coverflow"
      );

      if (shadowUno.length > 0) {
        shadowUno[0].classList.remove("swiper-slide-shadow-left");
        console.log('Clase "swiper-slide-shadow-left" eliminada.');
      }
      if (shadowDos.length > 0) {
        shadowDos[0].classList.remove("swiper-slide-shadow-coverflow");
        console.log('Clase "swiper-slide-shadow-coverflow" eliminada.');
      }
    }, 1000); // Cambia el tiempo según sea necesario

    return () => clearTimeout(timeoutId); // Limpia el timeout al desmontar
  }, []);

  return (
    <Box className={styles.Carrusel}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
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
 */