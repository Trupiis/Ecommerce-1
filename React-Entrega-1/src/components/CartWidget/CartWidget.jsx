import { PiShoppingCartLight } from "react-icons/pi";

import { Box, Center, ChakraProvider } from '@chakra-ui/react';

const CartWidget = () => {
    return <Box bgColor={'#660000'} borderRadius={30} width={14} height={14} >
                <Center height="100%"> 3<PiShoppingCartLight fontSize={25}></PiShoppingCartLight></Center>
            </Box>
}

export default CartWidget;