import React from 'react';
import './App.css';
import CrudApp from './components/crud/CrudApp';
import Header from './components/Header';
import CrudAPI from './components/crud/CrudAPI';

function App() {
  return (
    <div className="App">
      <Header/>
      <h2 class="text-white">API</h2>
      <CrudAPI/>
      <h2 class="text-white">Local</h2>
      <CrudApp/>
    </div>
  );
}

export default App;