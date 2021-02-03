import Login from "../../components/login/login.component";
import Register from "../../components/register/register.component";
import "./login-register.styles.scss";

const LoginRegisterPage = () => {
  return (
    <div className="login-register-page">
      <div className="login">
        <Login />
      </div>
      <div className="register">
        <Register />
      </div>
    </div>
  );
};

export default LoginRegisterPage;
