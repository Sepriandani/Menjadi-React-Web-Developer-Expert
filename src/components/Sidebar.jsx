import menu from "../utils/menu";
import MenuItem from "./MenuItem";

function Sidebar() {
  return (
    <aside className="bg-indigo-400 w-52 lg:w-60  fixed z-[9999] hidden left-36 lg:left-0 top-16 lg:top-0 lg:h-screen lg:flex items-center">
      <ul className="w-full">
        {menu.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
