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
import styles from '../../../styles/Carousel.module.css'
import { Link } from 'react-router-dom'



export const ItemListContainer = ({children}) =>{
return <Box bgColor={'#f0f0f0'} color={'#000'} textAlign={'Center'} height={'100vh'} alignContent={'center'}>
  <Text className={styles.titulo}>DELEITATE</Text>
  {children}</Box>
}



export const CardProduct = () => {
  return (
        <Center py={50}>
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
              //src={}
              objectFit="cover"
              //alt={}
            />

            <Box p={5} bgColor={'red'}>
              
            </Box>
          </Box>
        </Center>
      )
};









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
