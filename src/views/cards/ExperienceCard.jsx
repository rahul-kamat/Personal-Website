import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import Experience from '../formatters/Experience'

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
  },
  darkModeBackground: {
    backgroundColor: '#333333',
  },
  darkModeText: {
    color: '#CCCCCC',
  },
  darkModeHline: {
    backgroundColor: '#000000',
  },
  lightModeBackground: {
    backgroundColor: '#FFFFFF',
  },
  lightModeText: {
    color: '#333333',
  },
  lightModeHline: {
    backgroundColor: '#000000',
  },
});


function ExperienceCard(props) {
  const { darkMode, lightMode } = props;

  const classes = useStyles();

  const googleBullets = ['Core Team'];
  const googleSkills = ['Coming', 'Soon'];

  const amazonBullets = ['Team Placement TBD'];
  const amazonSkills = ['Coming', 'Soon'];

  const honeyBullets = ['Droplist Team'];
  const honeySkills = ['Javascript', 'React', 'Node.js', 'Google Cloud Platform', 'Kubernetes', 'Docker', 'CircleCI', 'GraphQL', 'BigQuery', 'BigTable', 'Sendgrid'];

  const dsgBullets = ['Checkout Team'];
  const dsgSkills = ['Java', 'TypeScript', 'Angular', 'Spring Boot', 'Postman', 'REST APIs', 'JIRA', 'Redis', 'Agile', 'Pivitol Cloud Foundry'];

  const spacingBetweenExperience = (
    <React.Fragment>
      <div className={ classNames(classes.spacingContainer, classes.bottomBorder) } />
        <div className={ classNames(classes.hline, darkMode ? classes.darkModeHline : null, lightMode ? classes.lightModeHline : null) } />
      <div className={ classNames(classes.spacingContainer, classes.bottomBorder) } />
    </React.Fragment>
  );
  return (
    <div className={ classNames(classes.cardContainer, darkMode ? classes.darkModeBackground : null, lightMode ? classes.lightModeBackground : null) }>
      <div className={ classes.spacingContainerTopBottom } />
      <div className={ classes.contentContainer }>
        <div className={ classNames(classes.textTitle, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          Experience
        </div>
      </div>
{ /*
      { spacingBetweenExperience }
        <Experience
          companyName='Google'
          startDate='April 2020'
          endDate='June 2020'
          location='Sunnyvale, CA'
          bullets={ googleBullets }
          skills={ googleSkills }
          darkMode={ darkMode }
          lightMode={ lightMode }
        />
        { spacingBetweenExperience }
        <Experience
          companyName='Amazon'
          startDate='June 2020'
          endDate='September 2020'
          location='Seattle, WA'
          bullets={ amazonBullets }
          skills={ amazonSkills }
          darkMode={ darkMode }
          lightMode={ lightMode }
        />
*/}
        { spacingBetweenExperience }
        <Experience
          companyName='Honey'
          startDate='January 2020'
          endDate='April 2020'
          location='Los Angeles, CA'
          bullets={ honeyBullets }
          skills={ honeySkills }
          darkMode={ darkMode }
          lightMode={ lightMode }
        />
        { spacingBetweenExperience }
        <Experience
          companyName='DICK&apos;S Sporting Goods'
          startDate='May 2019'
          endDate='August 2019'
          location='Pittsburgh, PA'
          bullets={ dsgBullets }
          skills={ dsgSkills }
          darkMode={ darkMode }
          lightMode={ lightMode }
        />
        { spacingBetweenExperience }

      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default ExperienceCard;