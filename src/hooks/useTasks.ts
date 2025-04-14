import useSWR from "swr";
import { Task } from "@/types/types"; 

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useTasks() {
  const { data, error, isLoading, mutate } = useSWR<Task[]>("/api/tasks", fetcher);
  return { tasks: data || [], error, isLoading, mutate };
}
