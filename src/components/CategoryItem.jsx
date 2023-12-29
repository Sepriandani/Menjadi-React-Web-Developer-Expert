import PropTypes from "prop-types";

function CategoryItem({ category }) {
    return (
        <button
            className="px-3 py-1 ring-1 ring-gray-500 rounded-sm hover:bg-indigo-400 hover:text-white"
            type="button"
        >
            #{category}
        </button>
    );
}

CategoryItem.propTypes = {
    category: PropTypes.string.isRequired,
}

export default CategoryItem;