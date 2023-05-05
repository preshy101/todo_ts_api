import { Todo } from "../model/todo"

interface ITodoRepo{
    save(todo: Todo): Promise<void>;
    update(todo: Todo): Promise<void>;
    delete(todoId: number): Promise<void>;
    retrieveById(todoId: number): Promise<Todo>;
    retrieveAll(): Promise<Todo[]>;
}

export class TodoRepo implements ITodoRepo{
   async save(todo: Todo): Promise<void> {
         try{
            await Todo.create({
                name: todo.name,
                description: todo.description
         })
         }catch(error){
            throw new Error ("failed to create todo")
         }
        
    }
  async   update(todo: Todo): Promise<void> {
        try{
            const new_todo = await Todo.findOne({
                where:{ id: todo.id},
            });
            if(!new_todo){
                throw new Error('Todo not found')
            }
            new_todo.name =  todo.name;
            new_todo.description =  todo.description;
            await new_todo.save()
        }catch(error){
            throw new Error ("failed to update todo")
         }
    }
   async delete(todoId: number): Promise<void> {
        try{
            const new_todo = await Todo.findOne({
                where:{ id: todoId},
            });
            if(!new_todo){
                throw new Error('Todo not found')
            }
          await new_todo.destroy()
         }catch(error){
            throw new Error ("failed to delete todo")
         }
    }
     async retrieveById(todoId: number): Promise<Todo> {
        try{
            const new_todo = await Todo.findOne({
                where:{ id: todoId},
            });
            if(!new_todo){
                throw new Error('Todo not found')
            }
            return new_todo;
         }catch(error){
            throw new Error ("failed to retrieve todo")
         }
    }
    async retrieveAll(): Promise<Todo[]> {
        try{
             return  await Todo.findAll(); 
         }catch(error){
            throw new Error ("failed to retrieve todo")
         }
    }
}