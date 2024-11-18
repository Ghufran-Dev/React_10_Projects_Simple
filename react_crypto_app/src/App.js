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


import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from "react-toastify";
 import 'react-toastify/dist/ReactToastify.css'
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
    path: "/register-email/:email",
    element: <RegisterEmailVerify />
  },
  {
    path: "/email-verify/:token",
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
  const queryClient = new QueryClient()
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer position="bottom-center" className={'text-4xl'} theme="colored"/>
      </QueryClientProvider>
    </div>
  )
}

export default App