import React, { createContext } from "react";

// create context
export const ThemeContext = createContext();

// provider component
const ThemeProvider = ({ children }) => {
  const theme = "dark"; 

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;