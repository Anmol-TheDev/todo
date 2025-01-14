import React from 'react'
import Todo from './todo'

export default function TaskContainer({ tasks, toggleTask, toggleImportant, deleteTask }) {
  const pendingTasks = tasks.filter(task => !task.completed)
  const completedTasks = tasks.filter(task => task.completed)

  return (
    <div className="space-y-6 mt-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Pending Tasks</h3>
        <div className="space-y-2">
          {pendingTasks.map(task => (
            <Todo
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              toggleImportant={toggleImportant}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>

      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-lg font-medium mb-2">Completed Tasks</h3>
          <div className="space-y-2">
            {completedTasks.map(task => (
              <Todo
                key={task.id}
                task={task}
                toggleTask={toggleTask}
                toggleImportant={toggleImportant}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

