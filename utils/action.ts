"use server"

import db from "@/utils/db"

export const NewTodo = (data:FormData)=>{
   const NewTodo = data.get("todo") as string
}

