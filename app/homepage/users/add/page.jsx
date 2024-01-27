"use client";

import React, { useState } from "react";

const addUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    Role: "",
    status: "",
    phone: "",
    address: "",
  });

  const handleSubmit= async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/addUser', {
        method: 'POST',
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        return response;
      } else {
        console.error("Hiba a szerver válaszában:", response.statusText);
        return response;
      }
    } catch (error) {
      console.error("Hiba a fetch hívás során:", error);
      return null;
    }
  }
  

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        action=""
        onSubmit={handleSubmit}
        className="shadow-md rounded-xl p-8 w-full md:max-w-2xl md:mx-auto bg-cl4 bg-opacity-50 border-2 border-slate-700"
      >
        <h2 className="text-gray-100 mb-8 border-b border-slate-800">
          Add User
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <textarea
            name="name"
            value={user.name}
            onChange={(e) => setUser((p) => ({ ...p, name: e.target.value }))}
            rows="1"
            placeholder="full name"
            className="mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl"
          ></textarea>
          <textarea
            name="address"
            value={user.address}
            onChange={(e) =>
              setUser((p) => ({ ...p, address: e.target.value }))
            }
            rows="1"
            placeholder="address"
            className="mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl"
          ></textarea>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
            onChange={(e) =>
              setUser((p) => ({ ...p, username: e.target.value }))
            }
            className="mb-4 px-4 py-2 border border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl"
            required
          ></input>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={user.email}
            onChange={(e) => setUser((p) => ({ ...p, email: e.target.value }))}
            className="mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl"
            required
          ></input>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser((p) => ({ ...p, password: e.target.value }))
            }
            className="mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl"
            required
          ></input>
          <input
            type="phone"
            placeholder="phone number"
            name="phone"
            value={user.phone}
            onChange={(e) => setUser((p) => ({ ...p, phone: e.target.value}))}
            className="mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl"
          ></input>
          <select
            name="isAdmin"
            value={user.Role ? 1:0}
            onChange={(e) =>
              setUser((p) => ({ ...p, Role: e.target.value}))
            }
            className="mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl text-cl3"
          >
            <option value={0}>Is Admin?</option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
          <select
            name="isActive"
            value={user.status ? 1:0}
            onChange={(e) =>
              setUser((p) => ({ ...p, status: e.target.value}))
            }
            className="mb-4 px-4 border py-2 border-solid border-b-2 border-r-2 w-full bg-transparent border-slate-800 rounded-xl text-cl3"
          >
            <option value={1}>Is Active?</option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default addUser;