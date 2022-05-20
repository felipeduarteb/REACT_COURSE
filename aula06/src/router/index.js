import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from '../page/details';
import Filmes from '../page/filmes';
import  Home  from '../page/home';

// Componente de rota
function RouterNavigation() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='filmes' element={<Filmes />} />
      {/* '/:id' estamos passando um parametro para a rota. No caso o ID */}
      <Route path='details/:id' element={ <Details /> } />
    </Routes>
  );
}

export default RouterNavigation;