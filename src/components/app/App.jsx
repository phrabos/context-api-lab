import React from 'react';
import Display from '../../containers/Display';
import ThemeProvider from '../../state/ThemeProvider';
// import styles from './app.css';

export default function App() {
  return (
    <ThemeProvider>
      <Display />
    </ThemeProvider>
  );
}
