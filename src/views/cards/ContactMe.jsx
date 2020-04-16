import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import MyForm from '../../form/MyForm'

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#97A084',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    textAlign: 'center',
  },
  textTitle: {
    fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    letterSpacing: '3px',
    wordSpacing: '2px',
    color: '#FFFFFF',
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
  spacingContainerTopBottom: {
    width: '100%',
    height: '60px',
  },
  darkModeBackground: {
    backgroundColor: '#333333',
  },
  darkModeImageBorder: {
    borderColor: '#000000',
  },
  darkModeText: {
    color: '#CCCCCC',
  },
  lightModeBackground: {
    backgroundColor: '#FFFFFF',
  },
  lightModeImageBorder: {
    borderColor: '#333333'
  },
  lightModeText: {
    color: '#333333',
  },
});


function ContactCard(props) {

  const { darkMode, lightMode } = props;
  const classes = useStyles();

  return (
    <div className={ classNames(classes.cardContainer, darkMode ? classes.darkModeBackground : null, lightMode ? classes.lightModeBackground : null) }>
      <div className={ classes.spacingContainerTopBottom } />
      <div className={ classes.contentContainer }>
        <div className={ classNames(classes.textTitle, classes.about, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          Contact me
        </div>
      </div>
      <div className={ classes.spacingContainer } />
      <div className={ classes.spacingContainer } />
      <MyForm
        darkMode={ darkMode }
        lightMode={ lightMode }
      />
      <div className={ classes.spacingContainer } />
      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default ContactCard;