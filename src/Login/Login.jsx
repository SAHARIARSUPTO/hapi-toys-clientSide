import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Provider";

const Login = () => {
  const {handleLogin,showAlert,alertMessage} = useContext(AuthContext);
    return (
        <div>
          {showAlert && (
        <div className="alert my-30 alert-success w-50">
          <div>
            <span>{alertMessage}</span>
          </div>
        </div>
      )}
            <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link  to="/signup" className="label-text-alt link link-hover">New member? Signup First</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</form>

        </div>
    );
};

export default Login;