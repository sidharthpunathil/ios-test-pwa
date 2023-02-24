import React from 'react';
import Auth from "./conponents/Auth"
import DroneData from './conponents/DroneData';
import Start from './conponents/Start';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Start name={"sid"} />
         <Auth />
         <DroneData />
         <h1 className="text-3xl font-bold underline">
            test
         </h1>
      </header>
    </div>
  );
}

export default App;
