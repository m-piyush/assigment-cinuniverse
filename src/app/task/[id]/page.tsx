"use client";
import { useParams, useRouter } from "next/navigation";
import { useTasks } from "@/hooks/useTasks";
import { useEffect, useState } from "react";

export default function TaskFormPage() {
  const router = useRouter();
  const { id } = useParams();
  const { tasks, mutate } = useTasks();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "To-Do",
    priority: "Low",
  });

  useEffect(() => {
    if (!id) return;
    const existing = tasks.find((t) => t.id === id);
    if (existing) {
      setForm({
        title: existing.title,
        description: existing.description || "",
        status: existing.status,
        priority: existing.priority,
      });
    }
  }, [tasks, id]);

  const handleSubmit = async () => {
    if (!form.title) return alert("Title is required");

    const method = id ? "PUT" : "POST";
    const endpoint = id ? `/api/tasks/${id}` : `/api/tasks`;

    await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    mutate();
    router.push("/");
  };

  return (
    <div className="p-6">
      <input
        className="block p-2 mb-2 border rounded w-full"
        value={form.title}
        onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
        placeholder="Title *"
        required
      />
      <textarea
        className="block p-2 mb-2 border rounded w-full"
        value={form.description}
        onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
        placeholder="Description"
      />
      <select className="block mb-2 p-2" value={form.status} onChange={(e) => setForm(f => ({ ...f, status: e.target.value }))}>
        <option>To-Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <select className="block mb-2 p-2" value={form.priority} onChange={(e) => setForm(f => ({ ...f, priority: e.target.value }))}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
        {id ? "Update Task" : "Create Task"}
      </button>
    </div>
  );
}
