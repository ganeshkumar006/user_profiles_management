<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { getUsers, saveUsers } from "../utils/storage";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import Loader from "../components/Loader";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUsers(getUsers());
      setLoading(false);
    }, 500);
  }, []);

  const handleSave = (user) => {
    const updatedUsers = users.filter(u => u.id !== user.id);
    updatedUsers.push(user);
    setUsers(updatedUsers);
    saveUsers(updatedUsers);
    setShowForm(false);
    setEditUser(null);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter(u => u.id !== id);
    setUsers(updatedUsers);
    saveUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setShowForm(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profiles Management</h1>
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        + Add User
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
      {showForm && (
        <UserForm
          onSave={handleSave}
          userToEdit={editUser}
          onClose={() => { setShowForm(false); setEditUser(null); }}
        />
      )}
    </div>
  );
}
=======
import React, { useState, useEffect } from "react";
import { getUsers, saveUsers } from "../utils/storage";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import Loader from "../components/Loader";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUsers(getUsers());
      setLoading(false);
    }, 500);
  }, []);

  const handleSave = (user) => {
    const updatedUsers = users.filter(u => u.id !== user.id);
    updatedUsers.push(user);
    setUsers(updatedUsers);
    saveUsers(updatedUsers);
    setShowForm(false);
    setEditUser(null);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter(u => u.id !== id);
    setUsers(updatedUsers);
    saveUsers(updatedUsers);
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setShowForm(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profiles Management</h1>
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        + Add User
      </button>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
      {showForm && (
        <UserForm
          onSave={handleSave}
          userToEdit={editUser}
          onClose={() => { setShowForm(false); setEditUser(null); }}
        />
      )}
    </div>
  );
}
>>>>>>> 935b443 (Initial commit)
