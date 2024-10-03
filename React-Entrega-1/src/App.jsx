import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, ItemListContainer, CartWidget } from './components/index';
import { Carousel, Inicio } from './pages';
import 'animate.css';

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <ItemListContainer>
        <Carousel></Carousel>
      </ItemListContainer>
      

    </ChakraProvider>

  )
}

export default App
