import { useEffect, useState } from "react"

import { DataTable } from "@/components/Tasks/components/data-table"
import { MainNav } from "@/components/Dashboard/main-nav"
import { Search } from "@/components/Dashboard/search"
import TeamSwitcher from "@/components/Dashboard/team-switcher"
import { UserNav } from "@/components/Dashboard/user-nav"
import { columns } from "@/components/Tasks/components/columns"
import { taskSchema } from "@/components/Tasks/data/schema"
import { tasksData } from "@/components/Tasks/data/tasks"
import { z } from "zod"

// Define the type for tasks
interface Task {
    id: string;
    title: string;
    status: string;
    label: string;
    priority: string;
  }
  
  export default function TaskPage() {
    async function getTasks() {
      const data = tasksData;
      return z.array(taskSchema).parse(data);
    }
  
    const [tasks, setTasks] = useState<Task[]>([]);
  
    useEffect(() => {
      async function fetchTasks() {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
      }
  
      fetchTasks();
    }, []);
  
    return (
      <>
        <div className="md:hidden">
          <img
            src=""
            width={1280}
            height={998}
            alt="Playground"
            className="block dark:hidden"
          />
          <img
            src=""
            width={1280}
            height={998}
            alt="Playground"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden h-full flex-1 flex-col md:flex">
            
            <div className="border-b">
                <div className="flex h-16 items-center px-4">
                <TeamSwitcher />
                <MainNav className="mx-6" />
                    <div className="ml-auto flex items-center space-x-4">
                        <Search />
                        <UserNav />
                    </div>
                </div>
            </div>

          <div className="flex flex-col items-start justify-between space-y-2 p-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </>
    );
  }