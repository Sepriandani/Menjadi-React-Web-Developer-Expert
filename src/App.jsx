import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ThreadsPage from "./pages/ThreadsPage";
import LeaderboardsPage from "./pages/LeaderboardsPage";
import DetailThreadPage from "./pages/DetailThreadpage";
import NotFoundPage from "./pages/NotFoundPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncPreloadProcess } from "./states/isPreload/action";
import Loading from "./components/Loading";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AddDiscussionPage from "./pages/AddDiscussionPage";

export default function App() {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <main className="m-0 p-0 relative">
        <Sidebar />
        <div className=" ml-0 p-0 lg:ml-60">
          <Topbar name={authUser.name} avatar={authUser.avatar} />
          <div className="px-2 pb-10 pt-20 lg:pt-24 lg:px-10">
            <Routes>
              <Route path="/" element={<ThreadsPage />} />
              <Route path="/leaderboards" element={<LeaderboardsPage />} />
              <Route path="/new" element={<AddDiscussionPage />} />
              <Route path="/threads/thread-1" element={<DetailThreadPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}
