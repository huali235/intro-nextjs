import Todo from './Todo'

function TodoList({ todos }: { todos: any[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
