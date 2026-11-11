
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { User } from "../types/User";
import Card from "../components/Card";
import Button from "../components/Button";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto">
      <Card>
        <h1 className="text-3xl font-bold mb-6">{user.name}</h1>

        <div className="space-y-3 mb-6 text-slate-600 dark:text-slate-300">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>

        <Button
          text="Back to Users"
          onClick={() => navigate("/users")}
        />
      </Card>
    </div>
  );
}

export default UserDetails;
