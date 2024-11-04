import { PiShoppingCartLight } from "react-icons/pi";
import { useContext } from "react";
import { Box, Center, ChakraProvider } from '@chakra-ui/react';
import { CartContext } from "../context";

export const CartWidget = () => {

    const {cartState} = useContext(CartContext);

    const totalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    console.log(cartState)

    return <Box bgColor={'#f0f0f0'} color={'#000'} borderRadius={30} width={14} height={14} >
                <Center height="100%">{totalItems}<PiShoppingCartLight fontSize={25}></PiShoppingCartLight></Center>
            </Box>

}
