import React, { useState, useEffect } from "react";
import { getUsersV1, getUsersV2 } from "../../lib/api_client";
import { adaptUser } from "../../lib/adapter";
import type { User } from "../../lib/interfaces";

export const UserListWithAdapter: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [apiVersion, setApiVersion] = useState<1 | 2>(1);

  useEffect(() => {
    const fetchUsers = async () => {
      if (apiVersion === 1) {
        const data = await getUsersV1();
        setUsers(data);
      } else {
        const data = await getUsersV2();
        setUsers(data.map(adaptUser));
      }
    };
    fetchUsers();
  }, [apiVersion]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List (With Adapter)</h1>
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
