import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Footer, ItemListContainer} from '../components';
import { Inicio, SobreNosotros, Carousel } from '../pages';
import { Formulario } from '../pages/Formulario';

export const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<ItemListContainer><Carousel /></ItemListContainer>} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />

      </Routes>
      <Footer />
    </Router>
  );
};
