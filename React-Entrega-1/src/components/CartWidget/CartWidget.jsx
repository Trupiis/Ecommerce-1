import { PiShoppingCartLight } from "react-icons/pi";
import { useContext, useState } from "react";
import { Box, Center, ChakraProvider, Flex, Button, Text, Image} from '@chakra-ui/react';
import { CartContext } from "../context";


import styles from '../../../styles/CartWidget.module.css'
import { useRef } from "react";
import { useEffect } from "react";

export const CartWidget = () => {
    
    const {cartState} = useContext(CartContext);

    const totalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);


    const [verCartBar, setVerCartBar] = useState(false)

    const cartBarRef = useRef(null)

    const HandleClick = (event) =>{

        event.stopPropagation();
        setVerCartBar(!verCartBar);
    };

    const HandleClickOutside = (event) =>{
        if (cartBarRef.current && !cartBarRef.current.contains(event.target)){
            setVerCartBar(false)
        }
    }

    const HandleScroll = ()=>{
        setVerCartBar(false)
    }

    useEffect(()=>{
        document.addEventListener('click', HandleClickOutside);
        window.addEventListener('scroll', HandleScroll);

        return ()=> {
            document.removeEventListener('click', HandleClickOutside);
            window.removeEventListener('scroll', HandleScroll);
        }
    },[]);


    return  <Box>
                <Box className={styles.CartWidget}
                onClick={HandleClick}                >

                <Center height="100%">{totalItems}<PiShoppingCartLight fontSize={25}></PiShoppingCartLight></Center>
            </Box> 
            
            <Flex
                className={`${styles.sidebar} ${verCartBar ? styles.visible : ""}`}
                ref={cartBarRef}
                direction="column"
                p="4"
            >
                <Box className={styles.pedido}>
                <Button className={styles.cerrar} onClick={HandleClick}>x</Button>
                
                {cartState.length > 0 ? (
                    <Box mt="4">
                        {cartState.map((item) => (
                            <Flex  className={styles.item} key={item.id} direction="row" justify="space-between" align="center" mb="3">
                                <Text>{item.name}</Text>
                                <Text>{item.qtyItem} x ${item.price}</Text>
                                <Text>Subtotal: ${item.price * item.qtyItem}</Text>
                            </Flex>
                        ))}
                    </Box>
                ) : (
                    <Text>No items in cart</Text>
                )}

                <Box mt="4" fontWeight="bold">
                    <Text>
                        Total: $
                        {cartState.reduce((acc, item) => acc + (item.qtyItem * item.price), 0).toFixed(2)}
                    </Text>
                </Box>
                </Box>

                <Button className={styles.finalizar}>
                    Terminar Compra
                </Button>
            </Flex>

            </Box>
}
