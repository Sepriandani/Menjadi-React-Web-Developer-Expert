import CustomLink from "./CustomLink";
import PropTypes from "prop-types";

const MenuItem = ({ name, path, icon }) => {
  return (
    <CustomLink to={path}>
      {icon} {name}
    </CustomLink>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

export default MenuItem;
