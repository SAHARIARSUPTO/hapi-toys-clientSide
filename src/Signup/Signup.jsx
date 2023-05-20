import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/Provider";


const Signup = () => {

const {handleSignin,handleSignInWithGoogle} = useContext(AuthContext);


    return (
        <div>
             <form onSubmit={handleSignin} className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Signup now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="link" placeholder="image link" name="image" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <Link  to="/login" className="label-text-alt link link-hover">Already a Member? Login here.</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleSignInWithGoogle} className="btn btn-primary">Sign in With Google</button>
        </div>
      </div>
    </div>
  </div>
</form>
        </div>
    );
};

export default Signup;