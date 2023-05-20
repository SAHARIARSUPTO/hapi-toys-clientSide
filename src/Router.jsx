import { createBrowserRouter } from "react-router-dom";
import "./App"
import App from "./App";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";


  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        }
      ]
    },
  ]);
  export default router;