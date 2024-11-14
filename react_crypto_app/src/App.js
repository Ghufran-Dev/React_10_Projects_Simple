import "./App.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard"
import Transactions from "./Pages/Transactions";
import Support from "./Pages/Support"

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
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App