
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to Student Directory
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          Browse our directory and view user information.
        </p>
        <Link
          to="/users"
          className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition-all duration-300"
        >
          View Users
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-bold mb-2">User Directory</h2>
          <p className="text-slate-600 dark:text-slate-300">
            View a list of users and their profiles.
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-bold mb-2">User Details</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Select a user to see more information.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
