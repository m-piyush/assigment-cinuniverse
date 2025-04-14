# 📝 Task Management Dashboard

A modern, responsive Task Management Dashboard built with **Next.js 15**, **React**, **Tailwind CSS**, and **TypeScript**. It allows users to create, update, delete, and filter tasks in a simple UI using in-memory API routing.

---

## 🚀 Features

- ✅ Create new tasks
- ✏️ Edit existing tasks
- ❌ Delete tasks
- 🔍 Filter by:
  - Status: To-Do, In Progress, Done
  - Priority: Low, Medium, High
  - Keyword search
- 🌈 Responsive UI with Tailwind CSS
- ⚡ Fast, in-memory API using Next.js App Router
- 🧠 Global filter state using Context API
- 🔐 Fully typed with TypeScript

---

## 📁 Project Structure

task-dashboard/src
├──── app/ 
    ├── api/tasks/[id]
├── task/
    ├──[id]
├── components/ │
    ├── AddTaskForm.tsx
    ├── DeleteButton.tsx
    ├── EditTaskForm.tsx
    ├── TaskFilters.tsx
    ├── TaskList.tsx
├── context/ │ 
    └── TaskContext.tsx # Global context for filters 
├── hooks/ │ 
    └── useTasks.ts # SWR-based hook for fetching tasks 
├── types/ │
    └── types.ts # Task type definitions 
└── README.md

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


📦 Tech Stack
-> Next.js 15
-> React
-> Tailwind CSS
-> TypeScript
-> SWR for data fetching
-> uuid for unique task IDs


👤 Author
Built with ❤️ by Piyush Malviya