import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, ItemListContainer, ItemDetailContainer, CartWidget, ItemCounter, Footer } from './components/index';
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
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default App
