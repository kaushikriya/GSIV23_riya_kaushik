import React from 'react';
import './App.css';
import { useGetMovies } from './hooks/useGetMovies';

function App() {
  const {data: movies}= useGetMovies()
  console.log('data',movies)
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
