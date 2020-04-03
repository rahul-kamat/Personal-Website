import React from 'react';
import BioCard from './BioCard';
import InformationCard from './InformationCard'
import ExperienceCard from './ExperienceCard'
import EducationCard from './EducationCard'
import Header from '../Runnings/Header'
import Footer from '../Runnings/Footer'
import { DarkMode } from '../store'
import { LightMode } from '../store'

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
                  <a href="edu"></a>
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

export default Home;