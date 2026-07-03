// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import './App.css'
// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login/>} />
//          {/* <Route path="/home" element={<Home /> }/> */}
//           <Route path="/dashboard" element={<Dashboard/> }/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";

// import "./App.css";

// function ProtectedRoute({ children }) {
//   const isLoggedIn =
//     localStorage.getItem("isLoggedIn") === "true";

//   return isLoggedIn ? children : <Login />;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/signup" element={<Signup />} />

//         <Route path="/login" element={<Login />} />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

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

const router = createBrowserRouter([
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
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;