import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cource from './Componants/Cource';
import Home from './Home/Home';
import Cources from './Componants/cources/Cources';
import Signup from './Componants/Signup';

function App() {
  return (
    <>
      <div className='dark:text-slate-300 dark:bg-slate-900'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cource' element={<Cources />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
