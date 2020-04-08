import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
// import RahulKamatResume from '../Rahul_Kamat_Resume.pdf'

const useStyles = createUseStyles({
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#EEEEEE',
    height: '25px',
    borderRadius: '20px 20px 0px 0px'
  },
  terminalContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    backgroundColor: '#333333',
  },
  maxWidth: {
    width: '100%',
  },
  minimize: {
    display: 'none',
    transition: 'opacity 1s ease-out',
  },
  text: {
    fontFamily: 'Monaco Courier New',
    fontSize: '13px',
    letterSpacing: '2px',
    wordSpacing: '2px',
    color: '#EEEEEE',
    textDecoration: 'none',
    fontStyle: 'normal',
  },
  textLine: {
    marginLeft: '20px',
    marginRight: '20px',
    fontWeight: '500',
  },
  textInfo: {
    marginLeft: '40px',
    marginRight: '20px',
    marginTop: '2px',
    fontWeight: '100',
  },
  textLink: {
    marginTop: '2px',
    fontWeight: '100',
    color: '#3a92c8',
  },
  textObject: {
    marginTop: '2px',
    fontWeight: '100',
  },
  textObjectKeyVals: {
    marginLeft: '37px',
  },
  textObjectClosingBrace: {
    marginLeft: '27px',
  },
  spacingContainer: {
    width: '100%',
    height: '20px',
  },
  circleButtons: {
    display: 'block',
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: 'none',
    marginLeft: '7px',
  },
  closeButton: {
    backgroundColor: '#FF5248',
    marginLeft: '15px',
  },
  minButton: {
    backgroundColor: '#FFBD48',
  },
  maxButton: {
    backgroundColor: '#3FC950',
    marginRight: '15px',
  },
  closed: {
    display: 'none',
  },
  darkModeBackgroundTopBar: {
    backgroundColor: '#999999',
  },
  darkModeBackgroundTerminal: {
    backgroundColor: '#333333',
  },
  darkModeText: {
    color: '#FFFFFF',
  },
  lightModeBackgroundTopBar: {
    backgroundColor: '#AFAFAF',
  },
  lightModeBackgroundTerminal: {
    backgroundColor: '#FFFFFF',
  },
  lightModeText: {
    color: '#000000',
  },
});


function InformationTerminal(props) {
  const [isMin, minimize] = useState(false);
  const [isMax, maximize] = useState(false);
  const [isClosed, closed] = useState(false);

  const { darkMode, lightMode } = props;

  const classes = useStyles();

  const email = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href='mailto:rahulkamat@gmail.com'
      target='_blank'
    >
        rahulkamat@gmail.com
    </a>
  );

  const companyNames = 'Honey, DICK\'S Sporting Goods';
  const companyNamesIncludingIncoming = 'Google, Amazon, Honey, DICK\'S Sporting Goods';

/*
  const resume = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href={ RahulKamatResume }
      target='_blank'
      rel='noopener noreferrer'
    >
      RahulKamatResume.pdf
    </a>
  );
*/
  const resumeComingSoon = (
    <Link
      className={ classNames(classes.text, classes.textLink) }
      to='/comingsoon'
      target='_blank'
      rel='noopener noreferrer'
    >
      RahulKamatResume.pdf
    </Link>
  );

  const github = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href='https://github.com/rahul-kamat'
      target='_blank'
      rel='noopener noreferrer'
    >
     @rahul-kamat
    </a>
  );

  const linkedin = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href='https://www.linkedin.com/in/rahul-kamat/'
      target='_blank'
      rel='noopener noreferrer'
    >
     @rahul-kamat
    </a>
  );

  const links = (
    <React.Fragment>
      <div className={ classNames(classes.text, classes.textObject, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
        => &#123;
      </div>
      <div className={ classNames(classes.text, classes.textObject, classes.textObjectKeyVals, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
        "GitHub": "{ github }",
      </div>
      <div className={ classNames(classes.text, classes.textObject, classes.textObjectKeyVals, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
        "LinkedIn": "{ linkedin }"
      </div>
      <div className={ classNames(classes.text, classes.textObject, classes.textObjectClosingBrace, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
        &#125;
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={
        classNames(
          classes.topBar,
          isMax ? classes.maxWidth : null,
          isClosed ? classes.closed : null,
          darkMode ? classes.darkModeBackgroundTopBar : null,
          lightMode ? classes.lightModeBackgroundTopBar : null
        ) }
      >
        <div
          className= { classNames(classes.circleButtons, classes.closeButton) }
          onClick={ () => closed(true) }
        >
        </div>
        <div
          className= { classNames(classes.circleButtons, classes.minButton) }
          onClick={ () => {
            minimize(isMax ? false : true);
            maximize(false);
          }}
        />
        <div
          className= { classNames(classes.circleButtons, classes.maxButton) }
          onClick={ () => {
            maximize(isMin ? false : true);
            minimize(false);
          }}
        >
        </div>
      </div>
      <div className={
        classNames(
          classes.terminalContainer,
          isMin ? classes.minimize : null,
          isMax ? classes.maxWidth : null,
          isClosed ? classes.closed : null,
          darkMode ? classes.darkModeBackgroundTerminal : null,
          lightMode ? classes.lightModeBackgroundTerminal : null
        ) }
      >
        <div className={ classes.spacingContainer } />
        <div className={ classes.spacingContainer } />

        {/* education */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.education
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          => "Rutgers University"
        </div>
        <div className={ classes.spacingContainer } />

        {/* major */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.major
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          => "Computer Science &amp; Mathematics"
        </div>
        <div className={ classes.spacingContainer } />

        {/* graduation */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.graduation
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          => "May 2021"
        </div>
        <div className={ classes.spacingContainer } />

        {/* work experience */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.workExperience
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          => "Software Engineering Intern @ { companyNames }"
        </div>
        <div className={ classes.spacingContainer } />

        {/* interests */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.interests
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          => ["Cooking", "Men's Fashion", "Fitness", "Nutrition", "Basketball", "Traveling", "Coffee<span role='img' aria-label='coffee'>&#9749;</span>", "Dogs!"]
        </div>
        <div className={ classes.spacingContainer } />

        {/* email */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.email
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          => "{ email }"
        </div>
        <div className={ classes.spacingContainer } />

        {/* resume */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.resume
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          => "{ resumeComingSoon }"
          { /* "{ resume }" */ }
        </div>
        <div className={ classes.spacingContainer } />

        {/* links */}
        <div className={ classNames(classes.text, classes.textLine, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          > Rahul.links
        </div>
        <div className={ classNames(classes.text, classes.textInfo, darkMode ? classes.darkModeText : null, lightMode ? classes.lightModeText : null) }>
          { links }
        </div>
        <div className={ classes.spacingContainer } />

        <div className={ classes.spacingContainer } />
      </div>
    </React.Fragment>
  );
}

export default InformationTerminal;