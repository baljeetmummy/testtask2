import React from 'react';
import './App.css';
import Routes from './routes';


function App(props) {
  return (
    <div className="App">
       <div className="container">
         <h2 className="py-3 text-center">Book Butlers</h2>
      <Routes {...props} />
    </div></div>
  );
}

export default App;
