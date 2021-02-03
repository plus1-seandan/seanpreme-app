import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import axios from "axios";

import "./register.styles.scss";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      await axios.post("http://localhost:5000/users", this.state);
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="register">
        <h2>CREATE ACCOUNT</h2>
        <span>Back to Customer Login</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="firstName"
            type="text"
            value={this.state.firstName}
            require
            label="first name"
            handleChange={this.handleChange}
          />
          <FormInput
            name="lastName"
            type="text"
            value={this.state.lastName}
            require
            label="last name"
            handleChange={this.handleChange}
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            require
            label="confirm password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">Create Account</CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
