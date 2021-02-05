import React from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./login.styles.scss";
import { setCurrUser } from "../../redux/user/user.actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { setCurrUser } = this.props;

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/login",
        this.state,
        { withCredentials: "include" }
      );
      if (res.data) {
        console.log({ user: res.data });
        setCurrUser(res.data);
        this.props.history.push("/");
      }
      this.setState({
        email: "",
        password: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  responseGoogle = async (response) => {
    const { setCurrUser } = this.props;

    const res = await axios.post(
      "http://localhost:5000/auth/google",
      { token: response.tokenId },
      { withCredentials: "include" }
    );

    if (res.data) {
      console.log({ user: res.data });
      setCurrUser(res.data);
      this.props.history.push("/");
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="login">
        <h2>CUSTOMER LOGIN</h2>

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
            <div>
              <CustomButton type="submit">Login</CustomButton>
            </div>
            <div>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <CustomButton
                    isGoogleSignIn
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Google
                  </CustomButton>
                )}
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrUser: (user) => dispatch(setCurrUser(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(Login));
