<<<<<<< HEAD
import React from "react";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transform hover:-translate-y-1 transition-all">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
          {user.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
          <p className="text-gray-400 text-sm">{user.email}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={onEdit}
          className="flex-1 bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
=======
import React from "react";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transform hover:-translate-y-1 transition-all">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
          {user.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>
          <p className="text-gray-400 text-sm">{user.email}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 gap-2">
        <button
          onClick={onEdit}
          className="flex-1 bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
>>>>>>> 935b443 (Initial commit)
