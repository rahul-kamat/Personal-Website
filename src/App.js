import React from 'react';
import './App.css';
import Home from './views/Home'


function App() {

  const consoleLogStyles = [
    'color: #00FFF1',
    'font-family: Lucida Sans Unicode, Lucida Grande, sans-serif',
    'font-size: 20px',
    'text-align: center'
  ].join(';');
  console.log('%cHello! Thanks for checking out my website! Feel free to contact me and if you have any feedback for improvement, I\'d love to know. :)', consoleLogStyles);

  return (
    <div>
     <Home />
    </div>
  );
}

export default App;
