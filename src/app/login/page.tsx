"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const DUMMY_USER = {
  username: "admin",
  password: "1234",
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAuthenticated");
    if (isLoggedIn === "true") {
      router.push("/blog/create");
    }
  }, []);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/blog/create");
    } else {
      setError("Invalid credentials. Try admin / 1234");
    }
  }

  return (
    <main className="max-w-md mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">
        Login to Create Blog
      </h1>
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow space-y-4"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded font-medium"
        >
          Login
        </button>
      </form>
    </main>
  );
}
