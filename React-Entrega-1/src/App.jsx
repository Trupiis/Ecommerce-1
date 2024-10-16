import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, ItemListContainer, CardProduct, CartWidget } from './components/index';
import { Carousel, Inicio, SobreNosotros } from './pages';
import '../styles/GlobalStyles.css'
import 'animate.css';

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <ItemListContainer>
        <Carousel></Carousel>
      </ItemListContainer>
      <SobreNosotros></SobreNosotros>

    </ChakraProvider>

  )
}

export default App
