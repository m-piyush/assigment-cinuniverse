"use client";
import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";

export default function AddTaskForm() {
  const { mutate } = useTasks();
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "To-Do",
    priority: "Low",
  });

  const handleSubmit = async () => {
    if (!form.title) return alert("Title is required");

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    mutate();
    setForm({ title: "", description: "", status: "To-Do", priority: "Low" });
  };

  return (
    <div className="p-4 border rounded shadow my-4">
      <h2 className="text-lg font-bold mb-2">Add Task</h2>
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
      <div className="relative w-full">
        <select
          value={form.priority}
          onChange={(e) => setForm(f => ({ ...f, priority: e.target.value }))}
          className="block w-full border p-2 mb-2 rounded">
          <option className="w-full">Low</option>
          <option className="w-full">Medium</option>
          <option className="w-full">High</option>
        </select>
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}>
        Add Task
      </button>
    </div>
  );
}
