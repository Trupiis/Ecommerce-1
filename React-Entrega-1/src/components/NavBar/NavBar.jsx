
import { CartWidget } from "../index"
import styles from "../../../styles/NavBar.module.css"

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useEffect, useState } from "react"
import { style } from "framer-motion/client"
import { Link } from "react-scroll"


const Links = ['Inicio', 'Catálogo', 'Sobre Nosotros', 'Hacé tu pedido']

export const NavLink = ({ children, ...rest }) => {
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        {...rest}
      >
        {children}
      </Box>
    )
  }

export const NavBar = ()=> {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [verNav, setVerNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {

    const currentScrollY = window.scrollY;

    if(currentScrollY === 0){
      setVerNav(true)
    }else if (currentScrollY > lastScrollY){
      setVerNav(false);
    }else if (currentScrollY <lastScrollY){
      setVerNav(true)
    }
    
    setLastScrollY(currentScrollY);
    console.log(currentScrollY)
  
    }

  useEffect(()=>{

    window.addEventListener('scroll', controlNavbar);

    return ()=>{
      window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const handleMouseLeave = () =>{
    if (currentScrollY === 0 ){
      setVerNav (false);
    }
  };
  

  return (
      <Box className={`${styles.NavBar} ${verNav ? styles.visible : styles.escondido}`}
        onMouseEnter={() => setVerNav (true)}
        onMouseLeave={handleMouseLeave}
      >
        <Flex h={20} alignItems={'center'}>
          <Flex w="full" alignItems="center" justifyContent="space-between">
            <Box className={styles.logo} fontSize={35} fontWeight={800} textShadow={'5px 5px 10px #000'}>DEL BAJÓN</Box>

            <IconButton
            size={'md'} 
            marginRight={5}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
            <HStack as={'nav'} spacing={5} display={{ base: 'none', md: 'flex' }}>
          <Link className={styles.navlink} to="inicio" smooth={true} duration={500}>Inicio</Link>
          <Link className={styles.navlink} to="carousel" smooth={true} duration={500}>Catálogo</Link>
          <Link className={styles.navlink} to="sobreNosotros" smooth={true} duration={500}>Sobre Nosotros</Link>
          <CartWidget/>
        </HStack>
          </Flex>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
            <Link className={styles.navlinkMenu} to="inicio" smooth={true} duration={500}>Inicio</Link>
            <Link className={styles.navlinkMenu} to="carousel" smooth={true} duration={500}>Catálogo</Link>
            <Link className={styles.navlinkMenu} to="sobreNosotros" smooth={true} duration={500}>Sobre Nosotros</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
  )}
      //CARRITO
    
