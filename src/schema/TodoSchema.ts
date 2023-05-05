import {z} from "zod"

export const createTodoSchema = z.object({
   body: z.object({
    name: z.string().min(1,{message:"Name has to be greater than one character"}),
    description: z.string().min(6,{message:"description has to be greater than six character"})
   })
})

export const updateTodoSchema = z.object({
    params: z.object({id:z.string()}),
    body: z.object({
        name:z.string().min(1, {message:"Name has to be greater than one character"}),
        description: z.string().min(6,{message:"description has to be greater than six character"})

    }).partial(),
})