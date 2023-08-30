import React from 'react';
import './App.css';
import { useGetMovies } from './hooks/useGetMovies';

function App() {
  const {data: movies}= useGetMovies()
  console.log('data',movies)
  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  );
}

export default App;
