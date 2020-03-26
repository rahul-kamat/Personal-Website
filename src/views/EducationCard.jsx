import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import Education from './Education'

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#CC767A',
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


function EducationCard(props) {

  const classes = useStyles();

  const rutgersCoursework = [
    'Data Structures and Algorithms',
    'Databases and Info Management',
    'Design and Analysis of Algorithms',
    'Computer Architecture',
    'Linear Algebra',
    'Mathematical Theory of Probability',
    'Elementary Differential Equations',
    'Multivariable Calculus',
    'Discrete Structures',
  ];
  const rutgersSkills = ['Java', 'C', 'SQL', 'Maple'];

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
          Education
        </div>
      </div>

      { spacingBetweenExperience }
        <Education
          schoolName='Rutgers University'
          graduationDate='May 2021'
          location='New Brunswick, NJ'
          bullets={ rutgersCoursework }
          skills={ rutgersSkills }
        />
        { spacingBetweenExperience }

      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default EducationCard;