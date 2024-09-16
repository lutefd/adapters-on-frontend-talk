import React, { useState, useEffect } from "react";
import { getUsersV1, getUsersV2 } from "../../lib/api_client";
import type { User, UserAlternative } from "../../lib/interfaces";

export const UserListWithoutAdapter: React.FC = () => {
  const [users, setUsers] = useState<User[] | UserAlternative[]>([]);
  const [apiVersion, setApiVersion] = useState<1 | 2>(1);

  useEffect(() => {
    const fetchUsers = async () => {
      if (apiVersion === 1) {
        const data = await getUsersV1();
        setUsers(data);
      } else {
        const data = await getUsersV2();
        setUsers(data);
      }
    };
    fetchUsers();
  }, [apiVersion]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List (Without Adapter)</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setApiVersion(apiVersion === 1 ? 2 : 1)}
      >
        Switch to API v{apiVersion === 1 ? "2" : "1"}
      </button>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="bg-gray-100 p-2 rounded">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
