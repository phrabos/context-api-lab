import React from 'react';
import { useChangeTheme } from '../state/ThemeProvider';

const Header = () => {
  const changeTheme = useChangeTheme();

  return (
    <div>
      <p>Home</p>
      <label>Toggle Dark Mode
        <input 
          type="checkbox"
          onChange={changeTheme} />
      </label>
    </div>
  );
};

export default Header;
