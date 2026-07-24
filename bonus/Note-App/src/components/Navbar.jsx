import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    [
      "rounded-full px-4 py-2 text-sm font-semibold transition",
      isActive
        ? "bg-orange-500 text-white shadow-md"
        : "text-gray-700 hover:bg-orange-200 hover:text-orange-700",
    ].join(" ");

  return (
    <nav className="sticky top-0 z-10 border-b border-orange-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <h2 className="text-2xl font-mono font-bold text-orange-600">
          Notes-App
        </h2>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={navClass} end>
            All Notes
          </NavLink>
          <NavLink to="/add-note" className={navClass}>
            Add Note
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
