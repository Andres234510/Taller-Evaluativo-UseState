import React, { useState } from 'react'
import './index.css'
import { Cronometrer } from './assets/components/Layouts/cronometrer/Cronometrer';

export const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  

  // Manejador para cambiar modo
  /*const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };*/

  return (
    <div /*className={`min-h-screen p-6 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}*/>
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6">Taller de useState</h1>
        <Cronometrer />
        

        

        

        <div>
          <h2 className="text-xl font-semibold mb-4">Modo Oscuro/Claro</h2>
          <button /*onClick={toggleMode}*/ className="mx-auto block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
            Cambiar a {/*isDarkMode ? 'Modo Claro' : 'Modo Oscuro'*/}
          </button>
        </div>
      </div>
    </div>
  );
}
