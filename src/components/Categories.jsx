function Categories() {
  return (
    <div className="w-full">
      <div className="text-lg mb-4">Kategori Populer</div>
      <div className="flex gap-4">
        <button
          className="px-3 py-1 ring-1 ring-gray-500 rounded-sm hover:bg-indigo-400 hover:text-white"
          type="button"
        >
          #php
        </button>
        <button
          className="px-3 py-1 ring-1 ring-gray-500 rounded-sm hover:bg-indigo-400 hover:text-white"
          type="button"
        >
          #javascript
        </button>
        <button
          className="px-3 py-1 ring-1 ring-gray-500 rounded-sm hover:bg-indigo-400 hover:text-white"
          type="button"
        >
          #python
        </button>
      </div>
    </div>
  );
}

export default Categories;
