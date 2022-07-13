import React from 'react';
import './App.css';

//Importando o Footer e o Header
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import HomePag from './Componentes/HomePag';

function App() {

  return (
    <div className="App">
      
      <Header />
      <HomePag />
      <Footer />
      
    </div>
  );

}

export default App;
