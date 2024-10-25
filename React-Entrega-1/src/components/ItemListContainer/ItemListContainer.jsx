import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  ChakraProvider
} from '@chakra-ui/react'
import { style } from 'framer-motion/client'

import styles from '../../../styles/Carousel.module.css'


/* const productsData = [
  {
    id: 1,
    nombre: 'Postre Oreo',
    descripcion: "La vieja confiable, totalmente infaltable a la hora del bajón. Si sos goloso capaz lo terminas, sino lo podes compartir con quien más quieras!",
    precio: 5600,
    imagen: '../../assets/oreo.jpg'
  },
  {
    id: 2,
    nombre: 'Postre Chocotorta',
    descripcion: "En nuestra opinión, la mejor opción para los no tan fanáticos del dulce. La combinación del queso crema y el dulce de leche es ideal para comer algo dulce sin empalagarte!",
    precio: 4000,
    imagen: '../../assets/oreo.jpg'
  },
  {
    id: 3,
    nombre: 'Postre CheeseCake',
    descripcion: "La combinación del cheesecake con el ácido de nuestra mermelada casera de frutos rojos es un mil. ¿Te animas a probarlo?",
    precio: 5600,
    imagen: '../../assets/oreo.jpg'
  },
  {
    id: 4,
    nombre: 'Postre Brownie',
    descripcion: "Hecho con nuestro brownie secreto, crema y muuuuuucho dulce de leche. Ideal para los más golosos.",
    precio: 4500,
    imagen: '../../assets/oreo.jpg'
  }
] */

export const ItemListContainer = ({children}) =>{
return <Box bgColor={'#f0f0f0'} color={'#000'} textAlign={'Center'} height={'100vh'} alignContent={'center'}>
  <Text className={styles.titulo}>DELEITATE</Text>
  {children}</Box>
}



export const CardProduct = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Center py={50} key={product.id}>
          <Box
            maxW={'250px'}
            w={'full'}
            bgColor={'#04020c'}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
          >
            <Image
              h={'220px'}
              w={'full'}
              src={product.imagen}
              objectFit="cover"
              alt={product.nombre}
            />

            <Box p={2} bgColor={'#292929'}>
              <Text className={styles.nombre} color={'white'}>{product.nombre}</Text>
              <Text className={styles.precio} color={'white'}>Precio: ${product.precio}</Text>

              <Box className={styles.contador}>
                <Button className={styles.resta}>-</Button>
                <Button className={styles.suma}>+</Button>
              </Box>
            </Box>
          </Box>
        </Center>
      ))}
    </>
  );
};