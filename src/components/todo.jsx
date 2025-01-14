import React from 'react'
import { Star, Trash2 } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Todo({ task, toggleTask, toggleImportant, deleteTask }) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => toggleTask(task.id)}
          />
          <span className={task.completed ? 'line-through text-muted-foreground' : ''}>
            {task.title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleImportant(task.id)}
            className={task.important ? 'text-yellow-500' : 'text-muted-foreground'}
          >
            <Star className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => deleteTask(task.id)}
            className="text-destructive"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

