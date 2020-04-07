import React from 'react';
import './myform.css';
import classNames from 'classnames';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    console.log('testing :: props', props);
    const { darkMode, lightMode } = props;
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    const { darkMode, lightMode } = this.props;

    return (
      <div className={ classNames('container') }>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xknvjjjl"
          method="POST"
        >
        <ul className={ classNames(darkMode ? 'flex-outer-dark' : null, lightMode ? 'flex-outer-light' : null) }>
          <li>
            <label for="first-name" className={ classNames(darkMode ? 'labelDarkMode' : null, lightMode ? 'labelLightMode' : null) }>First Name</label>
            <input type="text" id="first-name" placeholder="Enter your first name here" />
          </li>
          <li>
            <label for="last-name" className={ classNames(darkMode ? 'labelDarkMode' : null, lightMode ? 'labelLightMode' : null) }>Last Name</label>
            <input type="text" id="last-name" placeholder="Enter your last name here" className={ classNames(darkMode ? 'textAreaDarkMode' : null, lightMode ? 'textAreaLightMode' : null) }/>
          </li>
          <li>
            <label for="email" className={ classNames(darkMode ? 'labelDarkMode' : null, lightMode ? 'labelLightMode' : null) }>Email</label>
            <input type="email" id="email" placeholder="Enter your email here" />
          </li>
          <li>
            <label for="message" className={ classNames(darkMode ? 'labelDarkMode' : null, lightMode ? 'labelLightMode' : null) }>Message</label>
            <textarea rows="6" id="message" placeholder="Enter your message here" className='textAreaLightMode'></textarea>
          </li>
        </ul>
        <div className='spacingContainer' />
        <div className={ classNames('submitContainer', darkMode ? 'flex-outer-dark' : null, lightMode ? 'flex-outer-light' : null) }>
          {status === "SUCCESS" ? <p classname={ classNames(darkMode ? 'formSuccessDark' : null, lightMode ? 'formSuccessLight' : null) }>Thank you!</p> : <button>Submit</button>}
          {status === "ERROR" && <p className='formError'>Ooops! There was an error.</p>}
        </div>
      </form>
    </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default MyForm;