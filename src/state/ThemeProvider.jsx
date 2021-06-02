import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => setTheme(prev => prev ? false : true);

  const state = { theme, changeTheme };

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useChangeTheme = () => {
  const { changeTheme } = useContext(ThemeContext);
  return changeTheme;
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
