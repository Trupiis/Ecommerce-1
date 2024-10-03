import { Box, Image, Text, Center, ChakraProvider } from '@chakra-ui/react';
import styles from "../../styles/Inicio.module.css"
import 'animate.css';
import { RxDoubleArrowDown } from "react-icons/rx";
import classNames from 'classnames';


export const Inicio = () =>{
    return <Box className={styles.bodyInicio}>

        <Box className='animate__animated animate__bounceInDown' height={430} display={'flex'} justifyContent={'space-between'} alignItems={'end'}>
            <Text className={styles.h2}>¿Estás <span className={styles.block}>antojad@?</span></Text>
            
            <Text className={classNames(styles.containerFlechas, 'animate__animated', 'animate__bounce')}
            style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}>
                <RxDoubleArrowDown className={styles.arrows} />
            </Text>
        </Box>
    </Box>
}
