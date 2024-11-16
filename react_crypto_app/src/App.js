import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Transactions from "./Pages/Transactions";
import Support from "./Pages/Support"
import SignUp from "./Pages/Auth/SignUp";
import LogIn from "./Pages/Auth/LogIn";
import RegisterEmailVerify from "./Pages/Auth/RegisterEmailVerify";
import RegisterSuccess from "./Pages/Auth/RegisterSuccess";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import SuccessfullySent from "./Pages/Auth/SuccessfullySent";
import ResetPasswordSuccess from "./Pages/Auth/ResetPasswordSuccess";
import ResetPassword from "./Pages/Auth/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/transactions",
    element: <Transactions />
  },
  {
    path: "/support",
    element: <Support />
  },
  {
    path: "/signUp",
    element: <SignUp />
  },
  {
    path: "/logIn",
    element: <LogIn />
  },
  {
    path: "/register-email",
    element: <RegisterEmailVerify />
  },
  {
    path: "/register-success",
    element: <RegisterSuccess />
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />
  },
  {
    path: "/success-sent",
    element: <SuccessfullySent />
  },
  {
    path: "/reset-success",
    element: <ResetPasswordSuccess />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App