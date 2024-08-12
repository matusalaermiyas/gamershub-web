import Competitions from "./Competitions/Competitions";
import Home from "./Home/Home";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/competitions",
    element: <Competitions />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
