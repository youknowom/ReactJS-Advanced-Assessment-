import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    [
      "rounded-full px-4 py-2 text-sm font-semibold transition",
      isActive
        ? "bg-orange-500 text-white shadow-md"
        : "text-gray-700 hover:bg-orange-200 hover:text-orange-700",
    ].join(" ");

  return (
    <nav className="relative flex h-14 w-screen items-center rounded-4xl bg-amber-100 m-0">
      <h2 className="absolute left-8 text-2xl font-serif font-bold text-orange-600">
        Event Management
      </h2>
      <div className="flex w-full justify-center gap-4">
        <NavLink className={linkClass} end to="/">
          Home
        </NavLink>
        <NavLink className={linkClass} to="/services">
          Services
        </NavLink>
        <NavLink className={linkClass} to="/about">
          About
        </NavLink>
        <NavLink className={linkClass} to="/contact">
          Contact
        </NavLink>
        <NavLink className={linkClass} to="/dashboard">
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
