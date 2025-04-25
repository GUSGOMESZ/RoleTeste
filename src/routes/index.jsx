import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Roulette } from "../pages/Roulette";
import { Profile } from "../pages/Profile";
import { PrivateRoute } from "./PrivateRoute";
import { Ranking } from "../pages/Ranking";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
