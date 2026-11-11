
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 dark:bg-slate-950 text-white p-4 flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors duration-300">
      <h1 className="font-bold text-xl">Student Directory</h1>

      <div className="flex gap-5">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/users" className="hover:underline">Users</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
