import React, { useEffect, useState } from "react";
import { Box, Container, Slide } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { CardProduct, ItemCounter } from "../components/index";
import styles from "../../styles/Carousel.module.css";
import { useCart } from "../components/hooks";
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

/* import P01 from "../assets/CARD-OREO.jpg";
import P02 from "../assets/CARD-RASTA.jpg"; */
import { ArrowLeft , ArrowRight} from 'phosphor-react';
import { db } from "../components/firebase/config";
import { collection, getDocs } from "firebase/firestore";

export const Carousel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const {addItem} = useCart();

  const handleAddToCart = () => {
    if (selectedProduct) {
      addItem(selectedProduct, selectedQuantity);
      onClose();
    }
  };

  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productList);
        console.log("Productos obtenidos:", productList);

      }catch (error){
        console.error ("Error al obtener el producto: ", error);
      }
    };
  fetchProducts();
},[]);

const openModalWithImage = (product) => {
  setSelectedImage(product.image);
  setSelectedProduct(product); 
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
        {products.map((product) =>(
          <SwiperSlide
          key={product.id}
          className={styles.swiperSlide}
          onClick={() => openModalWithImage(product)}
          >
            <img src={product.image} alt={product.name} />
          </SwiperSlide>
        ))}
      
      </Swiper>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedImage} alt="Imagen del postre" />
            <ItemCounter 
            item={selectedProduct} setSelectedQuantity={setSelectedQuantity}></ItemCounter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

