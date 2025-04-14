import TaskList from "@/components/TaskList";
import TaskFilters from "@/components/TaskFilters";
import AddTaskForm from "@/components/AddTaskForm";



export default function Home() {
  return (
    <div className="p-6">
      <TaskFilters />
      <TaskList />
      <AddTaskForm />         
    </div >
  );
}
