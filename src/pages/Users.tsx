
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../types/User";
import Card from "../components/Card";

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">User Directory</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id}>
            <h2 className="text-xl font-bold mb-2">{user.name}</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {user.email}
            </p>
            <Link
              to={`/users/${user.id}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all duration-300"
            >
              View Profile
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Users;
