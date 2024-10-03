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

export const ItemListContainer = ({children}) =>{
return <Box bgColor={'#f0f0f0'} color={'#000'} textAlign={'Center'} height={'100vh'} alignContent={'center'}>
  <Text className={styles.titulo}>DELEITATE</Text>
  {children}</Box>
}


/* 
export const CardProduct = () => {
  return (
    <Center py={50}>
      <Box
        maxW={'270px'}
        w={'full'}
        bgColor={'#04020c'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'300px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit="cover"
          alt="#"
        />

        <Box p={5}>
          <Button
            w={'full'}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Añadir al carrito
          </Button>
        </Box>
      </Box>
    </Center>
  )
} */


