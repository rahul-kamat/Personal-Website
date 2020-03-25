import React from 'react';
import './App.css';
import BioCard from './views/BioCard';
import InformationCard from './views/InformationCard'
import ExperienceCard from './views/ExperienceCard'

function App() {
  return (
    <div className={ App }>
      <BioCard />
      <InformationCard />
      <ExperienceCard />
    </div>
  );
}

export default App;
