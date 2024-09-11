import { Box, Center, ChakraProvider } from '@chakra-ui/react';


const ItemListContainer = ({greeting}) =>{
return <Box bgColor={'#fff'} color={'#000'} textAlign={'Center'} height={'20vh'}>{greeting}</Box>
}

export default ItemListContainer;