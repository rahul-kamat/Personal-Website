import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import FadeIn from 'react-fade-in'
import me from '../../images/me.png'
import '../styles/scrollDownIndicator.css';

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#70B0B1',
  },
  imageCropper: {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: '#FFFFFF',
    position: 'relative',
    overflow: 'hidden',
    transition: '.7s',
    '&:hover': {
      webkitTransform: 'scale(1.1)',
      msTransform: 'scale(1.1)',
      transform: 'scale(1.1)',
    },
  },
  imgMe: {
    width: '100%',
    height: 'auto',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    letterSpacing: '2px',
    wordSpacing: '2px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontStyle: 'normal',
  },
  name: {
    fontSize: '25px',
    fontWeight: '700',
    fontVariant: 'small-caps',
  },
  about: {
    fontSize: '12px',
    fontWeight: '600',
    marginTop: '10px',
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


function BioCard(props) {

  const { darkMode, lightMode } = props;

  const classes = useStyles();

  const imgMe = (
    <div className={ classNames(classes.imageCropper, darkMode ? classes.darkModeImageBorder : null, lightMode ? classes.lightModeImageBorder : null) }>
      <img
        className={ classes.imgMe }
        src={ me }
        alt='pic of me!'
      />
    </div>
  );

  return (
    <div className={ classNames(classes.cardContainer, darkMode ? classes.darkModeBackground : null, lightMode ? classes.lightModeBackground : null) }>
      { imgMe }
      <div className={ classes.textContainer }>
      <div className={ classes.spacingContainer } />
      <FadeIn delay='500' transitionDuration='1800'>
        <div className={ classNames(classes.text, classes.name, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
        Hi! I'm Rahul.
        </div>
        <div className={ classNames(classes.text, classes.about, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
        I'm a full-stack software engineer, obsessed with user-driven application devlopment and consumer-facing software products.
        </div>
      </FadeIn>
      </div>
      <div className={ classes.spacingContainerTopBottom } />
      <div className={ 'topPanel' } />
      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default BioCard;