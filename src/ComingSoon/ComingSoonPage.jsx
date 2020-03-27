import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  text: {
    fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    letterSpacing: '2px',
    wordSpacing: '2px',
    color: 'white',
    textDecoration: 'none',
    fontStyle: 'normal',
  },
});

function ComingSoonPage() {

  const classes = useStyles();

  return (
    <div className={ classes.cardContainer }>
      <div className={ classes.text }>
        coming soon.
      </div>
    </div>
  );
}

export default ComingSoonPage;