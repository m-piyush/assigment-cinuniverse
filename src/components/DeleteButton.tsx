"use client";
import { useTasks } from "@/hooks/useTasks";

export default function DeleteButton({ id }: { id: string }) {
  const { mutate } = useTasks();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this task?")) return;

    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    mutate();
  };

  return (
    <button
      className="bg-red-500 text-white px-3 py-1 rounded ml-2"
      onClick={handleDelete}>
      Delete
    </button>
  );
}
