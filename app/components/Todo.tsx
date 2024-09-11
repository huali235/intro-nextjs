'use client'

import { completeTodo, deleteTodo } from '@/utils/actions'
import { useTransition } from 'react'

function Todo({ todo }) {
  const [isPending, startTransition] = useTransition()

  function handleCompleteClick() {
    startTransition(() => {
      completeTodo(todo.id)
    })
  }

  function handleDeleteClick() {
    startTransition(() => {
      deleteTodo(todo.id)
    })
  }

  return (
    <div
      className={`border border-black/20 cursor-pointer p-2 m-2 rounded-md shadow-sm flex justify-between items-center hover:bg-gray-100`}
    >
      <p className={`${todo.isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}`}>
        {todo.content}
      </p>
      <div className="flex space-x-2">
        <button
          className="bg-green-500 text-white p-1 rounded hover:bg-green-700"
          onClick={(e) => {
            e.stopPropagation()
            handleCompleteClick()
          }}
        >
          Complete
        </button>
      <button
        className="ml-4 bg-red-500 text-white p-1 rounded hover:bg-red-700"
        onClick={(e) => {
          e.stopPropagation()
          handleDeleteClick()
        }}
      >
        Delete
      </button>
      </div>
    </div>
  )
}
  export default Todo