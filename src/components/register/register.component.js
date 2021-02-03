import React from "react";
import CustomButton from "../collection/custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./register.styles.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  handleChange = (e) => {
    const { name, value } = e.target;

    console.log({ name, value });
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="register">
        <h2>CREATE ACCOUNT</h2>
        <span>Back to Customer Login</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            require
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            require
            label="password"
            handleChange={this.handleChange}
          />
          <CustomButton>Create Account</CustomButton>
          {/* <input type="submit" value="Submit Form" /> */}
        </form>
      </div>
    );
  }
}

export default Register;
