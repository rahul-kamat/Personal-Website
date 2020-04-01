import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

const useStyles = createUseStyles({
  EducationContainer: {
    width: '95%',
    backgroundColor: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  textEducation: {
    fontFamily: 'Lucida Sans Unicode, Lucida Grande, sans-serif',
    letterSpacing: '0px',
    wordSpacing: '0px',
    color: '#333333',
    textDecoration: 'none',
    fontStyle: 'normal',
  },
  EducationRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textSchool: {
    fontSize: '22px',
    fontWeight: '600',
    fontVariant: 'none',
    textTransform: 'uppercase',
  },
  textGraduation: {
    fontSize: '17px',
    fontWeight: '500',
    fontVariant: 'small-caps',
    textTransform: 'nones',
  },
  textLocation: {
    fontSize: '17px',
    fontWeight: '300',
    fontVariant: 'small-caps',
    textTransform: 'nones',
  },
  textCourswork: {
    fontSize: '19px',
    fontWeight: '550',
    fontVariant: 'small-caps',
    textTransform: 'nones',
  },
  EducationRowBullet: {
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
  EducationRowSkills: {
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
  borderColorRutgersRednoScarlet: {
    borderColor: '#CC0033',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#CC0033',
    },
  },
  borderColorRutgersWhite: {
    borderColor: '#FFFFFF',
    transition: '1s',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },
  lightModeBorderColorRutgersWhite: {
    borderColor: '#000000',
    '&:hover': {
      backgroundColor: '#000000',
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
    height: '20px',
  },
  spacingContainerSmall: {
    width: '100%',
    height: '10px',
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
 * @param {string} props.schoolName
 * @param {string} props.graduationDate
 * @param {string} props.location
 * @param {string[]} props.coursework
 * @param {object[]} props.skills
 */
function Education(props) {
  const { darkMode, lightMode } = props;

  const classes = useStyles();

  const {
      schoolName,
      graduationDate,
      location,
      bullets,
      skills,
  } = props;

  return (
      <div className={ classes.EducationContainer }>
        <div className={ classes.EducationRow }>
            <div className={ classNames(classes.textEducation, classes.textSchool, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              { schoolName }
            </div>
            <div className={ classNames(classes.textEducation, classes.textLocation, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              { location }
            </div>
        </div>
        <div className={ classes.EducationRow }>
            <div className={ classNames(classes.textEducation, classes.textGraduation, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              Grad: { graduationDate }
            </div>
        </div>

        <div className={ classes.spacingContainer } />
        <div className={ classes.EducationRow }>
            <div className={ classNames(classes.textEducation, classes.textCourswork, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
              Coursework:
            </div>
        </div>
        <div className={ classes.spacingContainerSmall } />

        <React.Fragment>
          { bullets.map((bullet, index) => {
              return (
                <React.Fragment key={ index }>
                  <div className={ classes.EducationRowBullet }>
                    <div className={ classNames(classes.textEducation, classes.textBullet, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
                      ◦
                    </div>
                    <div className={ classNames(classes.textEducation, classes.textBulletPoint, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
                      { bullet }
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          }
        </React.Fragment>

        <div className={ classes.EducationRowSkills }>
          { skills.map((skill, index) => {
              return (
                <React.Fragment key={ index }>
                  <div
                    className={ classNames(
                    classes.skillContainer,
                    schoolName.includes('Rutgers') && ((index % 2 === 0) ? classes.borderColorRutgersRednoScarlet : (lightMode ? classNames(classes.borderColorHoneyWhite, classes.lightModeBorderColorRutgersWhite) : classes.borderColorRutgersWhite)),
                    )}
                  >
                    <div className={ classNames(classes.textEducation, classes.textSkill, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
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

export default Education;