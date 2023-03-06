import React from 'react';
import Utama from './Components/Utama';
//import {Link} from 'react-router-dom';
import Nav from './Components/Navigation';
import Footer from './Components/Footer';

function App () {
    return(
      <div className="App">
        <hr/>
        <Nav/>
        <Utama/>
        <Footer/>
      </div>
    );
}
export default App;
