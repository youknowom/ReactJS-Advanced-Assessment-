import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 h-screen">
      <div className="flex flex-col gap-4 p-6 w-80 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold text-center">Page Not Found</h3>
        <h2 className="text-2xl font-bold text-center">Something Went Wrong</h2>
        <Link
          className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-5 py-2 font-semibold text-gray-900 transition"
          to="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
