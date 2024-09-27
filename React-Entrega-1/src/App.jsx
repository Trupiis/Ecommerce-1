import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Inicio from './components/Inicio/Inicio';
import 'animate.css';

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <Inicio></Inicio>
      <ItemListContainer greeting={'Bem vindos'} />
    </ChakraProvider>

  )
}

export default App
