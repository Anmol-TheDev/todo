import { useState, useEffect,useRef } from 'react'
import Sidebar from '../sidebar'
import TaskContainer from '../taskcontainer'
import { Bell, RotateCcw, Calendar, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useTheme } from "@/components/ui/themeprovider"

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { theme, setTheme } = useTheme();
  const hasMounted = useRef(false);
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
    console.log(savedTasks)
  }, []);

  useEffect(() => {
    if (hasMounted.current) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      } else {
        hasMounted.current = true; 
      }
  }, [tasks]);

  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      const newTask = {
        id: Date.now().toString(),
        title: newTaskTitle,
        completed: false,
        important: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        tasks={tasks}
      />

      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-4 max-w-5xl">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">To Do</h1>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "light" ? (
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bell className="h-6 w-6" />
              </Button>
            </div>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Add Task</CardTitle>
              <CardDescription>Enter a new task below</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <RotateCcw className="h-5 w-5 text-muted-foreground" />
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Add a task"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addTask();
                    }
                  }}
                />
                <Button onClick={addTask}>Add Task</Button>
              </div>
            </CardContent>
          </Card>

          <TaskContainer
            tasks={tasks}
            toggleTask={toggleTask}
            toggleImportant={toggleImportant}
            deleteTask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default Home
