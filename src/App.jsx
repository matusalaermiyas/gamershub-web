import Competitions from "./Tournaments/Tournaments";
import Home from "./Home/Home";
import Clans from "./Clans/Clans";
import Streamers from "./Streamers/Streamers";
import Players from "./Players/Players";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register/Register";
import { MantineProvider } from "@mantine/core";
import { Toaster } from "react-hot-toast";
import RegisteredClans from "./RegisteredClans/RegisteredClans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/view-clans",
    element: <RegisteredClans />,
  },

  // {
  //   path: "/tournaments",
  //   element: <Competitions />,
  // },
  // {
  //   path: "/clans",
  //   element: <Clans />,
  // },
  // {
  //   path: "/streamers",
  //   element: <Streamers />,
  // },
  // {
  //   path: "/players",
  //   element: <Players />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
]);

function App() {
  return (
    <MantineProvider>
      <Toaster />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
