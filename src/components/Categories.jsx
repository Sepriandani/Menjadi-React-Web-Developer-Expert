import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

function Categories({ threads }) {
  return (
    <div className="w-full">
      <div className="text-lg mb-4">Kategori Populer</div>
      <div className="flex gap-4">
      {threads.map((thread) => (
        <CategoryItem
          key={thread.id}
          category={thread.category}
        />
      ))}
      </div>
    </div>
  );
}

Categories.propTypes = {
  threads: PropTypes.array.isRequired,
}

export default Categories;
