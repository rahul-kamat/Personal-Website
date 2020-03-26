import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import Experience from './Experience'

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#BBBBBB',
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
    color: '#333333',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: '700',
    fontVariant: 'small-caps',
    textTransform: 'uppercase',
  },
  spacingContainer: {
    width: '100%',
    height: '20px',
  },
  spacingContainerExperience: {
    width: '100%',
    height: '40px',
  },
  spacingContainerTopBottom: {
    width: '100%',
    height: '60px',
  },
  hline: {
    width: '90%',
    height: '1px',
    backgroundColor: '#333333',
  }
});


function ExperienceCard(props) {

  const classes = useStyles();

  const googleBullets = ['Core Team'];
  const googleSkills = ['Coming', 'Soon'];

  const amazonBullets = ['Team Placement TBD'];
  const amazonSkills = ['Coming', 'Soon'];

  const honeyBullets = ['Droplist Team'];
  const honeySkills = ['Javascript', 'React', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'CircleCI'];

  const dsgBullets = ['Checkout Team'];
  const dsgSkills = ['Java', 'TypeScript', 'Angular', 'Spring Boot', 'Postman', 'REST APIs', 'JIRA', 'Redis', 'Agile', 'Pivitol Cloud Foundry'];

  const spacingBetweenExperience = (
    <React.Fragment>
      <div className={ classNames(classes.spacingContainer, classes.bottomBorder) } />
        <div className={ classes.hline } />
      <div className={ classNames(classes.spacingContainer, classes.bottomBorder) } />
    </React.Fragment>
  );
  return (
    <div className={ classes.cardContainer }>
      <div className={ classes.spacingContainerTopBottom } />
      <div className={ classes.contentContainer }>
        <div className={ classes.textTitle }>
          Experience
        </div>
      </div>

      { spacingBetweenExperience }
        <Experience
          companyName='Google'
          startDate='April 2020'
          endDate='June 2020'
          location='Sunnyvale, CA'
          bullets={ googleBullets }
          skills={ googleSkills }
        />
        { spacingBetweenExperience }
        <Experience
          companyName='Amazon'
          startDate='June 2020'
          endDate='September 2020'
          location='Seattle, WA'
          bullets={ amazonBullets }
          skills={ amazonSkills }
        />
        { spacingBetweenExperience }
        <Experience
          companyName='Honey'
          startDate='January 2020'
          endDate='April 2020'
          location='Los Angeles, CA'
          bullets={ honeyBullets }
          skills={ honeySkills }
        />
        { spacingBetweenExperience }
        <Experience
          companyName='DICK&apos;S Sporting Goods'
          startDate='May 2019'
          endDate='August 2019'
          location='Pittsburgh, PA'
          bullets={ dsgBullets }
          skills={ dsgSkills }
        />
        { spacingBetweenExperience }

      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default ExperienceCard;