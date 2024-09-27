import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import CartWidget from '../CartWidget/CartWidget';
import styles from "./NavBar.module.css"


const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box className={styles.NavBar}>
        <Flex h={75} alignItems={'center'} justifyContent={'space-between'}>
          <Box className={styles.logo} fontSize={35} fontWeight={800} textShadow={'5px 5px 20px #000'}>Del Bajón</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems={'center'}>
                <Link className={styles.navlink} fontSize={20}>Inicio</Link>
                <Link className={styles.navlink} fontSize={20}>Sobre Nosotros</Link>
                <Link className={styles.navlink} fontSize={20}>Catálogo</Link>
                <Link className={styles.navlink} fontSize={20}>Hacé tu pedido</Link>

                <CartWidget/>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar