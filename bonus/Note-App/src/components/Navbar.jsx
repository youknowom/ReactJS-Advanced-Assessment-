import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="relative flex h-14 w-screen items-center rounded-4xl bg-amber-100 m-0">
      <h2 className="absolute left-8 text-2xl font-serif font-bold text-orange-600">
        Notes-App
      </h2>
      <div className="flex w-full justify-center gap-4">
        <link to="/">All Notes</link>
      </div>
    </nav>
  );
}

export default Navbar;
