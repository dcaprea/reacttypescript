import React from 'react';
import './App.css';
import Lista from './components/Lista/Lista';
import Titulo from './components/Titulos/Titulos';
import Card from './components/Cards/Cards';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <div className="App">
      <Lista></Lista>
      <Titulo layout="Daniel Aprea" />
      <Titulo layout="Daniel Lindo ">Xuxu</Titulo>
      <Card>Conteúdo do Card</Card>
      <Formulario></Formulario>
    </div>
  );
}

export default App;
