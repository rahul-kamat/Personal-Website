import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import me from '../images/mee.png'
import './styles/scrollDownIndicator.css';

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
    border: '1px solid #FFFFFF',
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
    color: 'white',
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
});


function BioCard(props) {

  const classes = useStyles();

  const imgMe = (
    <div className={ classes.imageCropper }>
      <img
        className={ classes.imgMe }
        src={ me }
        alt='pic of me!'
      />
    </div>
  );

  return (
    <div className={ classes.cardContainer }>
      { imgMe }
      <div className={ classes.spacingContainer } />
      <div className={ classes.textContainer }>
        <div className={ classNames(classes.text, classes.name) }>
        Hi! I'm Rahul.
        </div>
        <div className={ classNames(classes.text, classes.about) }>
        I'm a full-stack software engineer, obsessed with user-driven application devlopment and consumer-facing software products.
        </div>
      </div>
      <div class='top-panel'></div>
      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default BioCard;