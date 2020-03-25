import React from 'react';
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'
import RahulKamatResume from '../Rahul_Kamat_Resume.pdf'

const useStyles = createUseStyles({
  topBar: {
    width: '90%',
    backgroundColor: '#EEEEEE',
    height: '15px',
    borderRadius: '20px 20px 0px 0px'
  },
  terminalContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    backgroundColor: '#333333',
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
});


function InformationTerminal() {

  const classes = useStyles();

  const email = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href="mailto:rahulkamat@gmail.com"
      target="_blank">
        rahulkamat@gmail.com
    </a>
  );

  const resume = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href={ RahulKamatResume }
      target="_blank">
        RahulKamatResume.pdf
    </a>
  );

  const github = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href="https://github.com/rahul-kamat"
      target="_blank">
     @rahul-kamat
    </a>
  );

  const linkedin = (
    <a
      className={ classNames(classes.text, classes.textLink) }
      href="https://www.linkedin.com/in/rahul-kamat/"
      target="_blank">
     @rahul-kamat
    </a>
  );

  const links = (
    <React.Fragment>
      <div className={ classNames(classes.text, classes.textObject) }>
        => &#123;
      </div>
      <div className={ classNames(classes.text, classes.textObject, classes.textObjectKeyVals) }>
        "GitHub": "{ github }",
      </div>
      <div className={ classNames(classes.text, classes.textObject, classes.textObjectKeyVals) }>
        "LinkedIn": "{ linkedin }"
      </div>
      <div className={ classNames(classes.text, classes.textObject, classes.textObjectClosingBrace) }>
        &#125;
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className={ classes.topBar } />
      <div className={ classes.terminalContainer }>
        <div className={ classes.spacingContainer } />
        <div className={ classes.spacingContainer } />
        
        {/* education */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.education
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          => "Rutgers University"
        </div>
        <div className={ classes.spacingContainer } />

        {/* major */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.major
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          => "Computer Science &amp; Mathematics"
        </div>
        <div className={ classes.spacingContainer } />
      
        {/* graduation */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.graduation
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          => "May 2021"
        </div>
        <div className={ classes.spacingContainer } />

        {/* work experience */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.workExperience
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          => "Software Engineering Intern @ Google, Amazon, Honey, DICK'S Sporting Goods"
        </div>
        <div className={ classes.spacingContainer } />

        {/* interests */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.interests
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          => ["Cooking", "Men's Fashion", "Fitness", "Nutrition", "Basketball", "Traveling", "Coffee&#9749;", "Dogs!"]
        </div>
        <div className={ classes.spacingContainer } />

        {/* email */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.email
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          => "{ email }"
        </div>
        <div className={ classes.spacingContainer } />

        {/* resume */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.resume
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          => "{ resume }"
        </div>
        <div className={ classes.spacingContainer } />

        {/* links */}
        <div className={ classNames(classes.text, classes.textLine) }>
          > Rahul.links
        </div>
        <div className={ classNames(classes.text, classes.textInfo) }>
          { links }
        </div>
        <div className={ classes.spacingContainer } />

        <div className={ classes.spacingContainer } />
      </div>
    </React.Fragment>
  );
}

export default InformationTerminal;