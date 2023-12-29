import { IoMdAddCircle, IoMdChatboxes, IoMdLogOut, IoMdStats } from "react-icons/io";

const menu = [
  {
    name: "Threads",
    path: "/",
    icon: <IoMdChatboxes />,
  },
  {
    name: "Leaderboards",
    path: "/leaderboards",
    icon: <IoMdStats />,
  },
  {
    name: "Add Discussion",
    path: "/new",
    icon: <IoMdAddCircle />,
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <IoMdLogOut />,
  },
];

export default menu;
