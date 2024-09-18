import React, { useState } from 'react';

const ThemeSwitcher = () => {
    const [theme, setThemes] = useState(localStorage.getItem("theme"));
    localStorage.setItem("theme", theme);
  
    const them = localStorage.getItem("theme");
  
    document.documentElement.className = them; //manipular el dom html para cambiar de estilos el document
    /**end de cambiar los temas*/



  return (
    <button onClick={() => setThemes("ligth")} className="p-2 bg-primary text-white rounded">
      Cambiar Tema
    </button>
  );
};

export default ThemeSwitcher;