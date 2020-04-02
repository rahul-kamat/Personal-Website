import React, { useState } from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { DarkMode } from '../store'
import { LightMode } from '../store'


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
    backgroundColor: '#000000',
  },
  lightModeBackground: {
    backgroundColor: '#CCCCCC',
  },
});

function Header(props) {
  const darkModeState = React.useContext(DarkMode.State)
  const darkModeDispatch = React.useContext(DarkMode.Dispatch)
  const lightModeState = React.useContext(LightMode.State)
  const lightModeDispatch = React.useContext(LightMode.Dispatch)
  const [isDarkMode, setDarkMode] = useState(false);

  const { darkMode, lightMode } = props;

  const classes = useStyles();

  return (
    <div className={ classNames(classes.cardContainer, darkModeState.on ? classes.darkModeBackground : null, lightModeState.on ? classes.lightModeBackground : null) }>
      <div className={ classes.headerContainer }>
        <div className={ classes.spacingContainer } />

        <label>
          <Switch
            onChange={ () => {
              darkModeDispatch({ type: 'darkMode' });
              lightModeDispatch({ type: 'lightMode' });
            }}
            checked={ darkModeState.on }
          />
        </label>
        <div className={ classes.spacingContainer } />
      </div>
    </div>
  );
}

export default Header;