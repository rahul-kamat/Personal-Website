import React from 'react';
import './myform.css';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xknvjjjl"
        method="POST"
      >
        { /* <!-- add your custom form HTML here --> */ }
        <div className={ "formContainer" }>
          <label>Name:</label>
          <input type="text" name="_name" placeholder="Full Name"/>

          <label>Email:</label>
          <input type="text" name="_replyto" />

          <label>Message:</label>
          <input type="text" name="message" />
        <label>Message:</label>
        <input type="text" name="message" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
      </form>
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