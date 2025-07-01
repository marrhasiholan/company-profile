"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import TeamCard from "../components/TeamCard";

interface User {
  name: { first: string; last: string };
  picture: { large: string };
  login: { username: string }; // untuk jadi role sementara
}

export default function TeamsPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8&nat=us")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <p className="text-center py-20">Loading team…</p>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
          Our Team
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the amazing people behind our mission and vision.
        </p>
      </header>

      <SectionTitle title="Team Members" />

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {users.map((u, i) => (
          <TeamCard
            key={u.login.username}
            name={`${u.name.first} ${u.name.last}`}
            role={`@${u.login.username}`}
            image={u.picture.large}
          />
        ))}
      </div>
    </section>
  );
}
