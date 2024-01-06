'use client'

import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'

function Todo({ todo }) {
  const [isPending, startTransition] = useTransition()

  function handleClick() {
    startTransition(() => {
      completeTodo(todo.id)
    })
  }

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.isCompleted ? 'line-through text-gray-900' : ''
      }`}
      onClick={handleClick}
    >
      <p>{todo.content}</p>
    </div>
  )
}

export default Todo
