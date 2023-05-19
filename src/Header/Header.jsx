import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-white font-bold">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Hapi Toys</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/toys">All Toys</Link>
            </li>
            <li>
              <Link to="/add">Add A Toy</Link>
            </li>
            <li>
              <Link to="/my-toys">My Toys</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </ul>
        </div>

        {/* user */}

        <div className="mx-1">
          <div>
            <p>Sahariar Hosen</p>
          </div>
          <div className="avatar mx-30 px-10">
            <div className="w-25 rounded-full ring ring-primary">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
