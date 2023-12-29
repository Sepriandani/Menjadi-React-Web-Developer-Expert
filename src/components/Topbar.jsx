function Topbar() {
  return (
    <div className="py-4 px-10 shadow-md bg-indigo-400 lg:bg-white w-full fixed z-[9999]">
      <div className="hidden lg:flex justify-between mr-60 items-center">
        <h1 className="text-xl text-left">Discussion Forum App</h1>
        <div className="flex gap-4 items-center">
          <p>Seprian dani</p>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          ></img>
        </div>
      </div>

      <div className="flex lg:hidden justify-between items-center">
        <h1 className="text-xl font-semibold text-white">Disccusion</h1>
        <button id="hamburger" name="hamburger" type="button">
          <span className="hamburger-line transition duration-300 ease-in-out origin-top-left "></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>
      </div>
    </div>
  );
}

export default Topbar;
