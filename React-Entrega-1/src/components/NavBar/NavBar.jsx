
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
import { Link } from "react-router-dom"


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
      setVerNav(true);
    }else if (currentScrollY <lastScrollY){
      setVerNav(false)
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

  

  return (
      <Box className={`${styles.NavBar} ${verNav ? styles.visible : styles.escondido}`}>
        <Flex h={20} alignItems={'center'}>
          <Flex w="full" alignItems="center" justifyContent="space-between">
            <Box className={styles.logo} fontSize={35} fontWeight={800} textShadow={'5px 5px 20px #000'}>DEL BAJÓN</Box>

            <IconButton
            size={'md'} 
            marginRight={5}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
            <HStack marginRight={5} as={'nav'} spacing={5} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink className={styles.navlink} fontSize={20} key={link}>{link}</NavLink>
              ))}
          </HStack>
          </Flex>
          <Flex alignItems={'center'}>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  )}
