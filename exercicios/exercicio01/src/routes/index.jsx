import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Courses from '../pages/Courses';

function RouterNavigation() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cursos' element={<Courses />} />
    </Routes>
  );
}

export default RouterNavigation;