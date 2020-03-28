import React from 'react';
import './App.css';
import BioCard from './views/BioCard';
import InformationCard from './views/InformationCard'
import ExperienceCard from './views/ExperienceCard'
import EducationCard from './views/EducationCard'
import Footer from './views/Footer'

function App() {

  const consoleLLogStyles = [
    'color: #00FFF1',
    'font-family: Lucida Sans Unicode, Lucida Grande, sans-serif',
    'font-size: 20px',
    'text-align: center'
  ].join(';');
  console.log('%cHello! Thanks for checking out my website! Feel free to contact me and if you have any feedback for improvement, I\'d love to know. :)', consoleLLogStyles);

  return (
    <div>
      <BioCard />
      <InformationCard />
      <ExperienceCard />
      <EducationCard />
      <Footer />
    </div>
  );
}

export default App;
