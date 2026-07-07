import {
  createHashRouter, // <-- Changed this line
  RouterProvider,
} from "react-router"; // (or "react-router-dom")

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import "./App.css";
import BrowseChallenges from "./pages/BrowseChallenges";
import ChallengeDetails from "./pages/ChallengeDetails";
import MyChallenge from "./pages/MyChallenge";
import Favorites from "./pages/Favorites";
import MyActiveChallenge from "./components/MyActiveChallenge";
import ChallengeProgress from "./pages/ChallengeProgress";

// Changed createBrowserRouter to createHashRouter below
const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/browse",
    Component: BrowseChallenges,
  },
  {
    path: "/challenge/:id",
    Component: ChallengeDetails,
  },
  {
    path: "/my-challenge/:id",
    Component: MyChallenge,
  },
  {
    path: "/favorites",
    Component: Favorites,
  },
  {
    path: "/active-challenges",
    Component: MyActiveChallenge,
  },
  {
    path: "/progress/:id",
    Component: ChallengeProgress,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;