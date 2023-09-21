import React, { useState } from 'react';
import { RiSunFill, RiMoonFill } from 'react-icons/ri'; 

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark'); // Active/désactive le mode sombre
    setDarkMode(!prev); // Inverse l'état du mode sombre
  };

  return (
    <button onClick={toggleDarkMode} className="flex items-center p-2">
      {darkMode ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
    </button>
  );
};

export default DarkMode;
