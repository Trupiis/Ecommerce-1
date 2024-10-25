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
  
  import styles from '../../../styles/Detail.module.css'

  export const ItemDetailContainer = ({children})=>{
    return <Box bgColor={'#f0f0f0'} height={'100vh'}><Text>WATAFAKS</Text>{children}</Box>
  }