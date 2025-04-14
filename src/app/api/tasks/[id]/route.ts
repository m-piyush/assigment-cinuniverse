import { NextRequest, NextResponse } from "next/server";
import { tasks } from "../route";

// PUT /api/tasks/[id]
export async function PUT(request: NextRequest,{ params }: { params: { id: string } } ) {
  const id = params.id;
  const body = await request.json();

  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  tasks[index] = { ...tasks[index], ...body };
  return NextResponse.json(tasks[index]);
}

export async function DELETE(request: NextRequest,{ params }: { params: { id: string } }) {
  const id = params.id;
  const index = tasks.findIndex((t) => t.id === id);
  
  if (index === -1) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  const deleted = tasks.splice(index, 1);
  return NextResponse.json(deleted[0]);
}
