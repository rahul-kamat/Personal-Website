import React from 'react';
import BioCard from './cards/BioCard';
import InformationCard from './cards/InformationCard'
import ExperienceCard from './cards/ExperienceCard'
import EducationCard from './cards/EducationCard'
import ContactCard from './cards/ContactMe'
import Header from '../Runnings/Header'
import Footer from '../Runnings/Footer'
import { DarkMode } from '../store'
import { LightMode } from '../store'
import { HashLink as Link } from 'react-router-hash-link';

function Home(props) {
  const darkModeState = React.useContext(DarkMode.State)
  const lightModeState = React.useContext(LightMode.State)

  let darkMode = darkModeState.on;
  let lightMode = lightModeState.on;

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
      <ContactCard
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

export default Home;