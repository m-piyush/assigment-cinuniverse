"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTasks } from "@/hooks/useTasks";

export default function EditTaskForm() {
  const { tasks, mutate } = useTasks();
  const router = useRouter();
  const search = useSearchParams();
  const id = search.get("id");

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "To-Do",
    priority: "Low",
  });

  useEffect(() => {
    const existing = tasks.find(t => t.id === id);
    if (existing) {
      setForm({
        title: existing.title,
        description: existing.description || "",
        status: existing.status,
        priority: existing.priority,
      });
    }
  }, [id, tasks]);

  const handleSubmit = async () => {
    if (!form.title) return alert("Title is required");

    await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    mutate();
    router.push("/");
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold mb-2">Edit Task</h2>
      <input
        value={form.title}
        onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
        placeholder="Title *"
        className="block w-full border p-2 mb-2 rounded" />
      <textarea
        value={form.description}
        onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
        placeholder="Description"
        className="block w-full border p-2 mb-2 rounded" />
      <select
        value={form.status}
        onChange={(e) => setForm(f => ({ ...f, status: e.target.value }))}
        className="block w-full border p-2 mb-2 rounded">
        <option>To-Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <select
        value={form.priority}
        onChange={(e) => setForm(f => ({ ...f, priority: e.target.value }))}
        className="block w-full border p-2 mb-2 rounded">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}>
        Update Task
      </button>
    </div>
  );
}
