
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { Task } from "@/types/types"

export let tasks: Task[] = [];

export async function GET() {
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const body = await req.json();
  const newTask: Task = {
    id: uuidv4(),
    title: body.title,
    description: body.description || "",
    status: body.status || "To-Do",
    priority: body.priority || "Low",
  };
  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}
