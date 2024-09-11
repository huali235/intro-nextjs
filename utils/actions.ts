'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export async function completeTodo(id: string) {
  await db.todo.update({
    where: { id },
    data: { isCompleted: true },
  })

  revalidatePath('/todos')
}

export async function newTodo(formData) {
  const todo = await db.todo.create({
    data: { content: formData.get('content') },
  })

  revalidatePath('/todos')
}

export async function deleteTodo(id: string) {
  await db.todo.delete({
    where: { id },
  })

  revalidatePath('/todos')  
}