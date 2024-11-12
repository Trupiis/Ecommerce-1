import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { NavBar, ItemListContainer, ItemDetailContainer, CartWidget, ItemCounter, Footer } from './components/index';
import { Carousel, Inicio, SobreNosotros } from './pages';
import { MainRouter } from './router/MainRouter';
import { CartProvider } from './components/index';
import { Formulario } from './pages/Formulario';

import '../styles/GlobalStyles.css'
import 'animate.css';

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
      <NavBar></NavBar>


      <div id='inicio'>
        <Inicio/>
      </div>

      <div id='carousel'>
        <ItemListContainer>
          <Carousel/>
        </ItemListContainer>
      </div>
      
      <div id='sobreNosotros'><SobreNosotros/></div>
      
      <Footer></Footer>
      </CartProvider>
    </ChakraProvider>
  )
}

export default App
