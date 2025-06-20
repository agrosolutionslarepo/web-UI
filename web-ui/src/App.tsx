import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from './Router';

function App() {
  return (
    <BrowserRouter basename="/agrosolutions">
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
