
import { Link } from "react-router-dom";
import Card from "../components/Card";

function NotFound() {
  return (
    <div className="max-w-lg mx-auto text-center">
      <Card>
        <h1 className="text-5xl font-bold text-blue-600 dark:text-indigo-400 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all duration-300"
        >
          Return Home
        </Link>
      </Card>
    </div>
  );
}

export default NotFound;
