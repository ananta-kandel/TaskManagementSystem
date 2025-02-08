import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
  } from "react-router-dom";

  import Test from "../components/Test";
  import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashBoardUser from "../pages/DashBoardUser";
  const router = createBrowserRouter([
    {
      path: "/test",
      element: <Test/>,
    },
    {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/dashboard",
        element: <DashBoardUser />,
      },
  ]
   );
  
  export default router;