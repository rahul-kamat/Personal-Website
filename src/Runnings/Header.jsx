import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import { DarkMode } from '../store'
import { LightMode } from '../store'
import moon from '../images/moon.png'

import Switch from 'react-switch';

const useStyles = createUseStyles({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: '#FAE3C7',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  toggleContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'no-wrap',
    alignItems: 'center',
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
  nameContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: '5px',
    marginRight: '5px',
    alignSelf: 'center',
  },
  imgMoon: {
    width: '28px',
    height: 'auto',
    filter: 'invert(100%)',
  },
  darkLightText: {
    fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    letterSpacing: '2px',
    wordSpacing: '2px',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontSize: '12px',
    fontWeight: '300',
    fontVariant: 'small-caps',
    marginLeft: '10px',
    marginRight: '10px',
  },
  selectedDarkLightText: {
    fontSize: '16px',
    fontWeight: '1000',
  },
  nameText: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '21px',
    fontWeight: '570',
    letterSpacing: '1px',
    wordSpacing: '-0.5px',
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'uppercase',
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
  darkModeText: {
    color: '#FFFFFF',
  },
  lightModeBackground: {
    backgroundColor: '#CCCCCC',
  },
  lightModeText: {
    color: '#000000',
  },
});

function Header(props) {
  const darkModeState = React.useContext(DarkMode.State)
  const darkModeDispatch = React.useContext(DarkMode.Dispatch)
  const lightModeState = React.useContext(LightMode.State)
  const lightModeDispatch = React.useContext(LightMode.Dispatch)

  const classes = useStyles();

  const icon = (
      <img
        className={ classes.imgMoon }
        src={ moon }
        alt='pic of me!'
      />
  );

  const toggle = (
    <Switch
      onChange={ () => {
        darkModeDispatch({ type: 'darkMode' });
        lightModeDispatch({ type: 'lightMode' });
      }}
      checked={ darkModeState.on }
      checkedIcon={ icon }
      uncheckedIcon={ false }
      onColor={ '#212F3D' }
      offColor={ '#212F3D' }
      onHandleColor={ '#5B2C6F' }
      offHandleColor={ '#FFFFFF' }
      height={ 30 }
      width={ 62 }
      className={ classes.toggle }
      id={ 'darkModeToggle'}
    />
  );

  return (
    <div className={ classNames(classes.cardContainer, darkModeState.on ? classes.darkModeBackground : null, lightModeState.on ? classes.lightModeBackground : null) }>
      <div className={ classes.headerContainer }>
        <div className={ classes.spacingContainer } />
          <div className={ classes.infoContainer }>

            <div className={ classes.nameContainer }>
              <div className={ classNames(classes.nameText, darkModeState.on ? classes.darkModeText : null, lightModeState.on ? classes.lightModeText : null) }>
              Rahul Kamat
              </div>
            </div>
            <div className={ classes.toggleContainer }>
              <div className={ classNames(classes.darkLightText, darkModeState.on ? classes.darkModeText : null, lightModeState.on ? classes.lightModeText : null, lightModeState.on ? classes.selectedDarkLightText : null) }>
                light
              </div>
              <label>
                { toggle }
              </label>
              <div className={ classNames(classes.darkLightText, darkModeState.on ? classes.darkModeText : null, lightModeState.on ? classes.lightModeText : null, darkModeState.on ? classes.selectedDarkLightText : null) }>
                dark
              </div>
            </div>

          </div>
        <div className={ classes.spacingContainer } />
      </div>
    </div>
  );
}

export default Header;