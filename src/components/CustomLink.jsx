import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li>
      <Link
        to={to}
        {...props}
        className={
          isActive
            ? "text-indigo-400 flex gap-4 p-4 px-10 bg-white items-center"
            : "flex gap-4 p-4 px-10 items-center text-gray-200"
        }
      >
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default CustomLink;
