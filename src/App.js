//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import SearchBoxContainer from './conrainer/SearchBoxContainer' 
import SearchResultContainer from './conrainer/SearchResultContainer'

function App() {
  return (
    <div className="container text-center">
      <div className="container bg-faded py-3">
        <h1 className="text-left">Weather App</h1>
        <SearchBoxContainer/>
        <SearchResultContainer/>
      </div>
    </div>
  );
}

export default App;
