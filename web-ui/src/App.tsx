import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Button, Container, CssBaseline } from '@mui/material';
import { NavBar } from './common/NavBar';
import { AppRouter } from './Router';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
