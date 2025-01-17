function NavBar() {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const searchValue = e.target.value;
      window.location.href = `/search/${searchValue}`;
    }
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Movie App</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onKeyDown={handleKeyDown}
            />
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
