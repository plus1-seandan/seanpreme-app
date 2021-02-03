import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import CustomButton from "../collection/custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./login.styles.scss";

class Login extends React.Component {
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
  responseGoogle = async (response) => {
    const res = await fetch("http://localhost:5000/google", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        token: response.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="login">
        <h2>CUSTOMER LOGIN</h2>
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
          <div className="login__buttons">
            <CustomButton onClick={this.handleTest}>Login</CustomButton>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <CustomButton
                  isGoogleSignIn
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign In With Google
                </CustomButton>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
