import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructors from "../pages/Instructors/Instructors";
import ClassesAll from "../pages/ClassesAll/ClassesAll";
import Dashboard from "../Layout/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path: '/classes',
          element: <ClassesAll></ClassesAll>
        }
       
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'adminhome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      
      
      ]
    }
  ]);