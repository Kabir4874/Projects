import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <span>
          Don't have an account? <Link to={"/register"}>Register here</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
