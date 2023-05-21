import { createBrowserRouter } from "react-router-dom";
import "./App"
import App from "./App";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ProductDetails from "./Home/Shared/ProductDetails";
import Alltoys from "./All Toys/Alltoys";
import Blog from "./Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddToy from "./Add Toy/AddToy";


  
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
        },
        {
          path: "/details/:productId",
          element: <ProductDetails></ProductDetails>,
        },
        {
          path: "/alltoy",
          element: <PrivateRoute><Alltoys></Alltoys></PrivateRoute>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path:"/add",
          element:<PrivateRoute><AddToy></AddToy></PrivateRoute>,
        }
      ]
    },
  ]);
  export default router;