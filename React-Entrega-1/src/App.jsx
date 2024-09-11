import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <ItemListContainer greeting={'Bem vindos'} />
    </ChakraProvider>
  )
}

export default App
