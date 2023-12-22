import { IoMdChatboxes, IoMdLogOut, IoMdStats} from "react-icons/io";

function Sidebar() {
    return(
        <aside className="h-screen bg-indigo-400">
            <div className="h-full flex items-center">
                <ul>
                    <li className="p-4 px-10 bg-white flex gap-4 items-center">
                        <IoMdChatboxes className="text-2xl text-indigo-400" /> Threads
                    </li>
                    <li className="p-4 px-10 flex gap-4 items-center text-gray-200">
                        <IoMdStats className="text-2xl" /> Leaderboards
                    </li>
                    <li className="p-4 px-10 flex gap-4 items-center text-gray-200">
                        <IoMdLogOut className="text-2xl" /> Logout
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;