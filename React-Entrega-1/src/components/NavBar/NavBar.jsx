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



const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box boxShadow='dark-lg' fontFamily={'sora'} bg={useColorModeValue('', '#b30000')} px={10} zIndex={1} position={'relative'}>
        <Flex h={120} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontSize={35} fontWeight={800}>Del Bajón</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems={'center'}>
                <Link fontSize={20}>Inicio</Link>
                <Link fontSize={20}>Sobre Nosotros</Link>
                <Link fontSize={20}>Catálogo</Link>
                <Link fontSize={20}>Hacé tu pedido</Link>

                <CartWidget/>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar