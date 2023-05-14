import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Home from "../component/Home/Home";
import Services from "../component/Services/Services";
import Login from "../component/Login/Login";
import Register from "../component/Login/Register";
import UserBooking from "../component/UserBooking/UserBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: 'userbooking',
            element: <UserBooking></UserBooking>,
            loader: () => fetch('http://localhost:5000/services')
        }
      ]
    },
  ]);

  export default router;