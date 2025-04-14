"use client";
import Link from "next/link";
import { useTasks } from "@/hooks/useTasks";
import { useTaskContext } from "@/context/TaskContext";
import { Task } from "@/types/types";
import DeleteButton from "./DeleteButton"; 

export default function TaskList() {
  const { tasks, isLoading } = useTasks();
  const { filter } = useTaskContext();

  const filteredTasks = tasks.filter((task: Task) =>
    (!filter.status || task.status === filter.status) &&
    (!filter.priority || task.priority === filter.priority) &&
    (!filter.search || task.title.toLowerCase().includes(filter.search.toLowerCase()))
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid gap-4 mt-4">
     
      {filteredTasks.map((task: Task) => (
        <div key={task.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status} | Priority: {task.priority}</p>
          <div className="mt-2 flex gap-2">
            <Link href={`/task/${task.id}`}>
              <button className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            </Link>
            <DeleteButton id={task.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
