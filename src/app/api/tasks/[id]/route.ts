
import { NextResponse } from "next/server";
import { tasks } from "../route";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const body = await req.json();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return NextResponse.json({ error: "Task not found" }, { status: 404 });

  tasks[index] = { ...tasks[index], ...body };
  return NextResponse.json(tasks[index]);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return NextResponse.json({ error: "Task not found" }, { status: 404 });

  const deleted = tasks.splice(index, 1);
  return NextResponse.json(deleted[0]);
}
