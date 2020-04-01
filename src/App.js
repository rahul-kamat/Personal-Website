import React from 'react';
import './App.css';
import BioCard from './views/BioCard';
import InformationCard from './views/InformationCard'
import ExperienceCard from './views/ExperienceCard'
import EducationCard from './views/EducationCard'
import Header from './Runnings/Header'
import Footer from './Runnings/Footer'

function App() {

  const consoleLogStyles = [
    'color: #00FFF1',
    'font-family: Lucida Sans Unicode, Lucida Grande, sans-serif',
    'font-size: 20px',
    'text-align: center'
  ].join(';');
  console.log('%cHello! Thanks for checking out my website! Feel free to contact me and if you have any feedback for improvement, I\'d love to know. :)', consoleLogStyles);

  let darkMode = true; //displayMode === 'dark' ? true : false;
  let lightMode = false; // displayMode === 'light' ? true : false;

  return (
    <div>
      <Header />
      <BioCard
        darkMode={ darkMode }
        lightMode={ lightMode}
      />
      <InformationCard
        darkMode={ darkMode }
        lightMode={ lightMode}
      />
      <ExperienceCard
        darkMode={ darkMode }
        lightMode={ lightMode}
      />
      <EducationCard
        darkMode={ darkMode }
        lightMode={ lightMode}
      />
      <Footer
        darkMode={ darkMode }
        lightMode={ lightMode}
      />
    </div>
  );
}

export default App;
