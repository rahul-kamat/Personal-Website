import React, { useState } from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

import Switch from 'react-switch';

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FAE3C7',
  },
  headerContainer: {
    width: '100%',
    backgroundColor: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  spacingContainer: {
    width: '100%',
    height: '10px',
  },
  spacingContainerSmall: {
    width: '100%',
    height: '10px',
  },
  darkModeBackground: {
    backgroundColor: '#333333',
  },
  lightModeBackground: {
    backgroundColor: '#FFFFFF',
  },
});

function Header(props) {
  const [isDarkMode, setDarkMode] = useState(false);
  
  const { darkMode, lightMode } = props;

  const classes = useStyles();

  return (
    <div className={ classNames(classes.cardContainer, darkMode ? classes.darkModeBackground : null, lightMode ? classes.lightModeBackground : null) }>
      <div className={ classes.headerContainer }>
        <div className={ classes.spacingContainer } />
        <label>
          <Switch
            onChange={ () => setDarkMode(!isDarkMode) }
            checked={ isDarkMode }
          />
        </label>
        <div className={ classes.spacingContainer } />
      </div>
    </div>
  );
}

export default Header;