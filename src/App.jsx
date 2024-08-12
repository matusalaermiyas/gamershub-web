import Competitions from "./Tournaments/Tournaments";
import Home from "./Home/Home";
import Clans from "./Clans/Clans";
import Streamers from "./Streamers/Streamers";
import Players from "./Players/Players";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tournaments",
    element: <Competitions />,
  },
  {
    path: "/clans",
    element: <Clans />,
  },
  {
    path: "/streamers",
    element: <Streamers />,
  },
  {
    path: "/players",
    element: <Players />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
