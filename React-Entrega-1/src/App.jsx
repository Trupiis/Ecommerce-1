import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, ItemListContainer, ItemDetailContainer, CardProduct, CartWidget, ItemCounter } from './components/index';
import { Carousel, Inicio, SobreNosotros } from './pages';
import '../styles/GlobalStyles.css'
import 'animate.css';

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <ItemListContainer>
        <Carousel/>
      </ItemListContainer>
      <SobreNosotros></SobreNosotros>
      <ItemDetailContainer>

        <ItemCounter></ItemCounter>
      </ItemDetailContainer>

    </ChakraProvider>
  )
}

export default App
