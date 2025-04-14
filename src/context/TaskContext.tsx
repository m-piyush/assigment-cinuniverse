"use client";
import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

type FilterType = {
  status: string;
  priority: string;
  search: string;
};

type TaskContextType = {
  filter: FilterType;
  setFilter: Dispatch<SetStateAction<FilterType>>;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<FilterType>({
    status: "",
    priority: "",
    search: "",
  });

  return (
    <TaskContext.Provider value={{ filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};
