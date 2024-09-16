import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <span>
          Already have an account? <Link to={"/login"}>Login here</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
