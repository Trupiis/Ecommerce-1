import { Box, Text, Heading, Link} from "@chakra-ui/react"
import { FaInstagram } from "react-icons/fa";
import styles from '../../../styles/Footer.module.css';

import Logo from '../../assets/Logoo.pdf'

export const Footer = ()=>{
    return <Box className={styles.footer}>
        <Box className={styles.logo}>
            <img src={Logo} alt="Del Bajón" />
        </Box>
        <Box className={styles.seguinos}>
            <h2 className={styles.titulo}>Seguinos en
                <hr />
            </h2>

            <Link href="https://www.instagram.com/delbajonok" target="_blank">
            <Box className={styles.redes}>
            <FaInstagram fontSize={25} />
            <Text className={styles.red}>DelBajonOk</Text>
            </Box>
            </Link>
            
        </Box>
        <Box className={styles.frase}>
            <Text>Cuando el bajón aparece, nosotros respondemos</Text>
        </Box>
    </Box>
}