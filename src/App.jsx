import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ThreadsPage from "./pages/ThreadsPage";
import LeaderboardsPage from "./pages/LeaderboardsPage";
import DetailThreadPage from "./pages/DetailThreadpage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/threads" element={<ThreadsPage />} />
      <Route path="/leaderboards" element={<LeaderboardsPage />} />
      <Route path="/threads/thread-1" element={<DetailThreadPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}