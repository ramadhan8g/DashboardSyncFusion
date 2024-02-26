import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// d stel saat dibuka dalam kondisi tertutup
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };

  export const ContextProvider =({children})=>{
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [activeMenu, setActiveMenu] = useState(true);
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    const setMode = (e) => {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
    };
  
    const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
    };
  

    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

    return(
      <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
    )
  }

  // berikan saya datanya dari context
export const useStateContext = () => useContext(StateContext);
