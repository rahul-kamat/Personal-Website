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
    backgroundColor: '#F8DBAA',
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
      <InformationTerminal />
      <div className={ classes.spacingContainerTopBottom } />
    </div>
  );
}

export default InformationCard;