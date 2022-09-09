import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Create from './component/Create';
import Update from './component/Update';
import Menu from './component/Menu';
import Pnf from './component/Pnf';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={2000} position={"bottom-left"} />
      {/*react router v5
          <switch>
            <Route path={'/'} component='Home' /> 
          </switch>
      */}
      {/* react router v6 */}

      <Routes>
        <Route path={'/'} element={<Home itemCount={4} />} />
        <Route path={'/home'} element={<Home itemCount={4} />} />
        <Route path={'/create'} element={<Create/>} />
        <Route path={'/update/:contactId'} element={<Update/>} />
        
        <Route path={'/*'} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;