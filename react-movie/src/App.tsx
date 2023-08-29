import React from 'react';
import './App.css';
import { useGetMovies } from './hooks/useGetMovies';
import dotenv from 'dotenv';

dotenv.config(); 

function App() {
  const movies= useGetMovies()
  console.log('data',movies)
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
