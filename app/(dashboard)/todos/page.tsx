import TodoList from '@/app/components/TodoList'
import db from '@/utils/db'

async function getData() {
  const todos = await db.todo.findMany()
  return todos
}

async function TodosPage() {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
