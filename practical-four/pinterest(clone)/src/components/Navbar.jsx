function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-orange-500">Amazon</span>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <button className="font-medium text-gray-700 hover:text-yellow-500">
            Home
          </button>

          <button className="font-medium text-gray-700 hover:text-yellow-500">
            Products
          </button>

          <button className="font-medium text-gray-700 hover:text-yellow-500">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
