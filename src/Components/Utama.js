import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from './Beranda';
import Kontak from './Kontak';
import TentangSaya from './TentangSaya';
import Karya from './Karya';
import Gallery from '../pages/Gallery';
import Cart from '../pages/Cart';

const Utama = () => {
    return(
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/TentangSaya' element={<TentangSaya/>}/>
        <Route path='/karya' element={<Karya/>}/>
        <Route path='/kontak' element={<Kontak/>}/>
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/Cart" element={<Cart/>} />

      </Routes>
    )
}

export default Utama;