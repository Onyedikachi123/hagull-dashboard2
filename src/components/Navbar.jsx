const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="rounded p-2"
            />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  