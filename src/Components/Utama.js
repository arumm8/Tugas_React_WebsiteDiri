import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from './Beranda';
import Kontak from './Kontak';
import Gallery from './Gallery';
//import Karya from './Karya';

const Utama = () => {
    return(
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        {/* <Route path='/karya' element={<Karya/>}/> */}
        <Route path='/kontak' element={<Kontak/>}/>

      </Routes>
        // <nav className="bg-gray-800">
        // <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        //   <div className="relative flex items-center justify-between h-16">
        //     <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              /* <div className="flex-shrink-0">
                <Link to="/">
                  <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                </Link>
              </div> */
      //         <div className="hidden sm:block sm:ml-6">
      //           <div className="flex space-x-4">
      //               <Routes>
      //               <Route className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" exact path='/' element={<Beranda/>} />
      //               <Route className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" exact path='/tentangSaya' element={<TentangSaya/>} />
      //               <Route className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" exact path='/karya' element={<Karya/>} />
      //               <Route className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" exact path='/kontak' element={<Kontak/>} />
      //               </Routes>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    
  

    // <div>
    //     <Routes>
    //         <Route exact path='/' element={<Beranda/>} />
    //         <Route path='/tentangSaya' element={<TentangSaya/>} />
    //         <Route path='/karya' element={<Karya/>} />
    //         <Route path='/kontak' element={<Kontak/>} />
    //     </Routes>
    // </div>
    )
}

export default Utama;