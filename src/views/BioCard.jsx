import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import me from '../images/me.png'

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#70B0B1',
  },
  imageCropper: {
    width: '300px',
    height: '300px',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    display: 'inline-block',
  },
  imgMe: {
    width: '100%',
    height: 'auto',
    marginTop: '-27px',
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
      <div className={ classes.spacingContainerTopBottom } />
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
      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default BioCard;