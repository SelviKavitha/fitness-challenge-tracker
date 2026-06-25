import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import BrowseChallenges from "../pages/BrowseChallenges";
import ChallengeDetails from "../pages/ChallengeDetails";
// import Favorites from "../pages/Favorites";
// import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/browse" element={<BrowseChallenges/>} />

        <Route  path="/challenge/:id" element={<ChallengeDetails />} />

      {/* <Route path="/favorites" element={<Favorites />} /> */}

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;