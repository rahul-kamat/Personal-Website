import React from 'react';
import './App.css';
import BioCard from './views/BioCard';
import InformationCard from './views/InformationCard'
import ExperienceCard from './views/ExperienceCard'
import EducationCard from './views/EducationCard'
import Footer from './views/Footer'

function App() {
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
