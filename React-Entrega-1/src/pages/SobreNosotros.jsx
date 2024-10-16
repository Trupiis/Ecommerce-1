import { Box, Image, Text, Center, ChakraProvider } from '@chakra-ui/react';
import styles from "../../styles/SobreNosotros.module.css"
import 'animate.css';
import classNames from 'classnames';
import images from '../assets/OREO.png';



export const SobreNosotros = () =>{
    return <Box className={styles.SobreNosotros}>
            <Text className={styles.titulo}>SOBRE NOSOTROS</Text>
            <Box className={styles.contentNosotros}>
                <Text className={styles.lemaUno}>En Del Bajón, cada postre es más que un antojo; es una experiencia que reconforta cuando más lo necesitas. 
                <span className={styles.block}>Dedicados en crear momentos únicos, esos pequeños placeres que transforman lo ordinario en extraordinario.</span></Text>

                <img src={images} className={styles.vaso}></img>

                <Text as='i' className={styles.lemaDos}>"Para nosotros, un postre es mucho más que un dulce. Es una forma de compartir, de crear memorias y disfrutar los pequeños placeres de la vida en compañía."</Text>
            </Box>
        </Box>
}