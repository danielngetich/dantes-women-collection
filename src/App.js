import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Categories from "./components/Categories";
import AddCollection from './components/AddCollection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Categories/>
      <AddCollection/>
    </div>
  );
}

export default App;
