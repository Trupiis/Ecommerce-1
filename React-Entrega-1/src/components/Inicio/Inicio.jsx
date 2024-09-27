import { Box, Image, Text, Center, ChakraProvider } from '@chakra-ui/react';
import styles from "./Inicio.module.css"
import 'animate.css';
import { RxDoubleArrowDown } from "react-icons/rx";

const Inicio = () =>{
    return <Box className={styles.bodyInicio}>

        <Box className='animate__animated animate__bounceInDown' height={430} display={'flex'} justifyContent={'space-between'} alignItems={'end'}>
            <Text className={styles.h2}>¿Estás <span className={styles.block}>antojad@?</span></Text>
            <Text className={'${styles.containerFlechas} animate__animated animate__bounce'} >
                <RxDoubleArrowDown  className={styles.arrows}/>
            </Text>
        </Box>
        
    </Box>
}


export default Inicio;