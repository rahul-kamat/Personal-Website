import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

const useStyles = createUseStyles({
  experienceContainer: {
    width: '95%',
    backgroundColor: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  textExperience: {
    fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    letterSpacing: '0px',
    wordSpacing: '0px',
    color: '#333333',
    textDecoration: 'none',
    fontStyle: 'normal',
  },
  experienceRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCompany: {
    fontSize: '22px',
    fontWeight: '600',
    fontVariant: 'none',
    textTransform: 'uppercase',
  },
  textTenure: {
    fontSize: '15px',
    fontWeight: '300',
    fontVariant: 'small-caps',
    textTransform: 'nones',
  },
  textPosition: {
    fontSize: '18px',
    fontWeight: '600',
    fontVariant: 'small-caps',
    textTransform: 'none',
  },
  textLocation: {
    fontSize: '17px',
    fontWeight: '300',
    fontVariant: 'small-caps',
    textTransform: 'nones',
  },
  experienceRowBullet: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textBullet: {
    marginLeft: '20px',
    marginRight: '10px',
  },
  textBulletPoint: {
    fontSize: '15px',
    fontWeight: '300',
    fontVariant: 'none',
    textTransform: 'nones',
  },
  experienceRowSkills: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '7px',
  },
  skillContainer: {
    border: '1px',
    borderRadius: '10px 10px 10px 10px',
    borderStyle: 'solid',
    borderColor: '#333333',
    marginLeft: '3px',
    marginRight: '3px',
    marginTop: '5px',
    marginBottom: '2px',
  },
  borderColorGoogleBlue: {
    borderColor: '#4285F4',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#4285F4',
    },
  },
  borderColorGoogleRed: {
    borderColor: '#DB4437',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#DB4437',
    },
  },
  borderColorAmazonBlue: {
    borderColor: '#37475A',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#37475A',
    },
  },
  borderColorAmazonOrange: {
    borderColor: '#FF9900',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#FF9900',
    },
  },
  borderColorHoneyOrange: {
    borderColor: '#FF7227',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#FF7227',
    },
  },
  borderColorHoneyWhite: {
    borderColor: '#FFFFFF',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
  lightModeBorderColorHoneyWhite: {
    borderColor: '#000000',
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
  borderColorDSGGreen: {
    borderColor: '#006554',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#006554',
    },
  },
  borderColorDSGOrange: {
    borderColor: '#D76B00',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#D76B00',
    },
  },
  textSkill: {
    fontSize: '12px',
    fontWeight: '300',
    fontVariant: 'none',
    textTransform: 'nones',
    marginLeft: '12px',
    marginRight: '12px',
    marginTop: '7px',
    marginBottom: '7px',
  },
  spacingContainer: {
    width: '100%',
    height: '5px',
  },
  darkModeText: {
    color: '#CCCCCC',
  },
  lightModeText: {
    color: '#333333',
  },
});

/**
 * @param {object} props
 * @param {string} props.companyName
 * @param {string} props.startDate
 * @param {string} props.endDate
 * @param {string} props.location
 * @param {string[]} props.bullets
 * @param {string[]} props.skills
 */
function Experience(props) {
  const { darkMode, lightMode } = props;

  const classes = useStyles();

  const {
      companyName,
      startDate,
      endDate,
      location,
      bullets,
      skills,
  } = props;

  return (
      <div className={ classes.experienceContainer }>
        <div className={ classes.experienceRow }>
            <div className={ classNames(classes.textExperience, classes.textCompany, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              { companyName }
            </div>
            <div className={ classNames(classes.textExperience, classes.textTenure, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              { startDate } - { endDate }
            </div>
        </div>
        <div className={ classes.experienceRow }>
            <div className={ classNames(classes.textExperience, classes.textPosition, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              Software Engineering Intern
            </div>
            <div className={ classNames(classes.textExperience, classes.textLocation, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              { location }
            </div>
        </div>
        <div className={ classes.spacingContainer } />
        <React.Fragment>
          { bullets.map((bullet, index) => {
              return (
                <React.Fragment key={ index }>
                  <div className={ classes.experienceRowBullet }>
                     <div className={ classNames(classes.textExperience, classes.textBullet, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
                      ◦
                    </div>
                    <div className={ classNames(classes.textExperience, classes.textBulletPoint, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
                      { bullet }
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          }
        </React.Fragment>
        <div className={ classes.spacingContainer } />
        <div className={ classes.experienceRowSkills }>
          { skills.map((skill, index) => {
              return (
                <React.Fragment key={ index }>
                  <div
                    className={ classNames(
                      classes.skillContainer,
                      companyName==='Google' && ((index % 2 === 0) ? classes.borderColorGoogleBlue : classes.borderColorGoogleRed),
                      companyName==='Amazon' && ((index % 2 === 0) ? classes.borderColorAmazonBlue : classes.borderColorAmazonOrange),
                      companyName==='Honey' && ((index % 2 === 0) ? classes.borderColorHoneyOrange : (lightMode ? classNames(classes.borderColorHoneyWhite, classes.lightModeBorderColorHoneyWhite) : classes.borderColorHoneyWhite)),
                      companyName==='DICK\'S Sporting Goods' && ((index % 2 === 0) ? classes.borderColorDSGGreen : classes.borderColorDSGOrange)
                    )}
                  >
                    <div className={ classNames(classes.textExperience, classes.textSkill, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
                      { skill }
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
  );
}

export default Experience;