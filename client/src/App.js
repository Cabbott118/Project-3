import React from 'react';
import AppNavBar from './components/AppNavBar';
import ItemList from './components/ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <ItemList />
    </div>
  );
}

export default App;
