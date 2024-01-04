'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export async function newTodo(formData) {
  const todo = await db.todo.create({
    data: { content: formData.get('content') },
  })

  revalidatePath('/todos')
}
