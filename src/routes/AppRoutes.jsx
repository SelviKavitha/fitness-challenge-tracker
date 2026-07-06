import { Routes, Route } from "react-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import BrowseChallenges from "../pages/BrowseChallenges";
import ChallengeDetails from "../pages/ChallengeDetails";
import MyChallenge from "../pages/MyChallenge";
import Favorites from "../pages/Favorites";
import MyActiveChallenge from "../components/MyActiveChallenge";
import ChallengeProgress from "../pages/ChallengeProgress";
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
         <Route  path="/my-challenge/:id" element={<MyChallenge/>} />

      <Route path="/favorites" element={<Favorites />} />
       <Route path="/active-challenges" element={<MyActiveChallenge/>} />
        <Route path="/progress/:id" element={<ChallengeProgress/>} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;