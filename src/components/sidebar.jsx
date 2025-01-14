import React from 'react'
import { ListTodo, CalendarIcon, Star, Map, Users, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {Progress} from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useNavigate } from 'react-router-dom'
export default function Sidebar({ isOpen, onClose, tasks }) {
  const completedTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length
  const progress = totalTasks ? (completedTasks / totalTasks) * 100 : 0
  const navigate = useNavigate()
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-card border-r transform z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static transition-transform duration-200 ease-in-out
      `}>
        <ScrollArea className="h-full">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div>
                <h2 className="font-semibold">Hey, User</h2>
                <p className="text-sm text-muted-foreground">Welcome back</p>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            <Button variant="secondary" className="w-full justify-start">
              <ListTodo className="mr-2 h-4 w-4" />
              All Tasks
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Today
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Star className="mr-2 h-4 w-4" />
              Important
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Map className="mr-2 h-4 w-4" />
              Planned
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={()=>navigate("/auth")} >
              <Users className="mr-2 h-4 w-4" />
             LogIn
            </Button>
          </nav>

          <div className="p-4">
            <Button variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add list
            </Button>
          </div>

          <div className="p-4 mt-auto">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Today's Tasks</span>
                <span>{completedTasks}/{totalTasks}</span>
              </div>
              <Progress value={progress} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Pending</span>
                <span>Done</span>
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  )
}

