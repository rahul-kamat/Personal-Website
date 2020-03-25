import React from 'react';
import { createUseStyles } from 'react-jss'
import Experience from './Experience'

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F8DBAA',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    textAlign: 'center',
  },
  textTitle: {
    fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    letterSpacing: '2px',
    wordSpacing: '2px',
    color: 'white',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: '700',
    fontVariant: 'small-caps',
    textTransform: 'uppercase',
  },
  spacingContainer: {
    width: '100%',
    height: '40px',
  },
  spacingContainerTopBottom: {
    width: '100%',
    height: '60px',
  },
});


function ExperienceCard(props) {

  const classes = useStyles();

  const googleBullets = ['Core Payments Team'];
  const googleSkills = [];

  const amazonBullets = [];
  const amazonSkills = [];

  const honeyBullets = ['Droplist Team'];
  const honeySkills = ['Javascript', 'React', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'CircleCI'];

  const dsgBullets = ['Checkout Team', 'Full-Stack Development'];
  const dsgSkills = ['Java', 'TypeScript', 'Angular', 'Spring Boot', 'Postman', 'REST APIs', 'JIRA', 'Redis', 'Agile', 'Pivitol Cloud Foundry'];

  return (
    <div className={ classes.cardContainer }>
      <div className={ classes.spacingContainerTopBottom } />
      <div className={ classes.contentContainer }>
        <div className={ classes.textTitle }>
          Experience
        </div>
      </div>
      <div className={ classes.spacingContainer } />

        <Experience
          companyName='Google'
          startDate='April 2020'
          endDate='June 2020'
          location='Sunnyvale, CA'
          bullets={ googleBullets }
          skills={ googleSkills }
        />
        <div className={ classes.spacingContainer } />
        <Experience
          companyName='Amazon'
          startDate='June 2020'
          endDate='September 2020'
          location='Seattle, WA'
          bullets={ amazonBullets }
          skills={ amazonSkills }
        />
        <div className={ classes.spacingContainer } />
        <Experience
          companyName='Honey'
          startDate='January 2020'
          endDate='April 2020'
          location='Los Angeles, CA'
          bullets={ honeyBullets }
          skills={ honeySkills }
        />
        <div className={ classes.spacingContainer } />
        <Experience
          companyName='DICK&apos;S Sporting Goods'
          startDate='May 2019'
          endDate='August 2019'
          location='Pittsburgh, PA'
          bullets={ dsgBullets }
          skills={ dsgSkills }
        />

      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default ExperienceCard;