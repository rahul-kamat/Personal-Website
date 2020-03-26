import React from 'react';
import { createUseStyles } from 'react-jss'
import InformationTerminal from './InformationTerminal'

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
    height: '20px',
  },
  spacingContainerTopBottom: {
    width: '100%',
    height: '60px',
  },
});


function InformationCard(props) {

  const classes = useStyles();

  return (
    <div className={ classes.cardContainer }>
      <div className={ classes.spacingContainerTopBottom } />
      <div className={ classes.contentContainer }>
        <div className={ classes.textTitle }>
          About me
        </div>
      </div>
      <div className={ classes.spacingContainer } />
      <div className={ classes.spacingContainer } />
      <InformationTerminal />
      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default InformationCard;