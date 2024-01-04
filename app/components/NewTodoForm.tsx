import { newTodo } from '@/utils/actions'

export default function NewTodoForm() {
  return (
    <form action={newTodo}>
      <input
        name="content"
        type="text"
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        New Todo Task
      </button>
    </form>
  )
}
