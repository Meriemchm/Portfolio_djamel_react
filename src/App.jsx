import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';



const App = () => {

  
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Services/>
      <Works/>
      <Contact/>

    </div>
  );
}

export default App;