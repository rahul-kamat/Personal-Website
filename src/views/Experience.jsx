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
  },
  borderColorGoogleRed: {
    borderColor: '#DB4437',
  },
  borderColorAmazonBlue: {
    borderColor: '#37475A',
  },
  borderColorAmazonOrange: {
    borderColor: '#FF9900',
  },
  borderColorHoneyOrange: {
    borderColor: '#FF7227',
  },
  borderColorHoneyWhite: {
    borderColor: '#FFFFFF',
  },
  borderColorDSGGreen: {
    borderColor: '#006554',
  },
  borderColorDSGOrange: {
    borderColor: '#D76B00',
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

  const classes = useStyles();

  const {
      companyName,
      startDate,
      endDate,
      location,
      bullets,
      skills,
  } = props;
  console.log(props);
  return (
      <div className={ classes.experienceContainer }>
        <div className={ classes.experienceRow }>
            <div className={ classNames(classes.textExperience, classes.textCompany) }>
              { companyName }
            </div>
            <div className={ classNames(classes.textExperience, classes.textTenure) }>
              { startDate } - { endDate }
            </div>
        </div>
        <div className={ classes.experienceRow }>
            <div className={ classNames(classes.textExperience, classes.textPosition) }>
              Software Engineering Intern
            </div>
            <div className={ classNames(classes.textExperience, classes.textLocation) }>
              { location }
            </div>
        </div>
        <div className={ classes.spacingContainer } />
        <React.Fragment>
          { bullets.map(function(bullet) {
              return (
                <div className={ classes.experienceRowBullet }>
                  <div className={ classNames(classes.textExperience, classes.textBullet) }>
                    ◦
                  </div>
                  <div className={ classNames(classes.textExperience, classes.textBulletPoint) }>
                    { bullet }
                  </div>
                </div>
              );
            })
          }
        </React.Fragment>
        <div className={ classes.spacingContainer } />
        <div className={ classes.experienceRowSkills }>
          { skills.map(function(skill, index) {
              return (
                <div
                  className={ classNames(
                    classes.skillContainer,
                    companyName==='Google' && ((index % 2 === 0) ? classes.borderColorGoogleBlue : classes.borderColorGoogleRed),
                    companyName==='Amazon' && ((index % 2 === 0) ? classes.borderColorAmazonBlue : classes.borderColorAmazonOrange),
                    companyName==='Honey' && ((index % 2 === 0) ? classes.borderColorHoneyOrange : classes.borderColorHoneyWhite),
                    companyName==='DICK\'S Sporting Goods' && ((index % 2 === 0) ? classes.borderColorDSGGreen : classes.borderColorDSGOrange)
                  )}

                >
                  <div className={ classNames(classes.textExperience, classes.textSkill) }>
                    { skill }
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
  );
}

export default Experience;