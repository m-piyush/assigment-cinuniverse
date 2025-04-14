"use client";
import { useTaskContext } from "@/context/TaskContext";

export default function TaskFilters() {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded"
        onChange={(e) => setFilter(f => ({ ...f, search: e.target.value }))}
      />
      <select onChange={(e) => setFilter(f => ({ ...f, status: e.target.value }))}>
        <option value="">All Status</option>
        <option>To-Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <select onChange={(e) => setFilter(f => ({ ...f, priority: e.target.value }))}>
        <option value="">All Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
  );
}
