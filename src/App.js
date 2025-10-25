import React, { useState } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import logo from "./assets/123456.jpg";

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
];

export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleSave = (user) => {
    const exists = users.find((u) => u.id === user.id);
    if (exists) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, user]);
    }
    setIsModalOpen(false);
  };

  const handleEdit = (user) => {
    setUserToEdit(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <h1 className="text-3xl font-bold text-gray-800">User Profiles</h1>
          </div>
          <button
            onClick={() => {
              setUserToEdit(null);
              setIsModalOpen(true);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
          >
            + Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={() => handleEdit(user)}
              onDelete={() => handleDelete(user.id)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <UserForm
          onSave={handleSave}
          userToEdit={userToEdit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
