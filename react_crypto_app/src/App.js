import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Transactions from "./Pages/Transactions";
import Support from "./Pages/Support"
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
      element:<Dashboard />
  },
  {
    path: "/transactions",
      element:<Transactions />
  },
  {
    path: "/support",
      element:<Support />
  },
  {
    path: "/signUp",
      element:<SignUp />
  },
  {
    path: "/logIn",
      element:<LogIn />
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