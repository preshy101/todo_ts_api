import BaseRoutes from "./base/BaseRouter";
import TodoController from '../controller/TodoController'
import validate from "../helper/validate";
import { createTodoSchema, updateTodoSchema } from "../schema/TodoSchema";

class TodoRoutes extends BaseRoutes{
   public routes(): void {
       this.router.post('',validate(createTodoSchema), TodoController.create) 
       this.router.patch('/:id', validate(updateTodoSchema), TodoController.update) 
       this.router.delete('/:id', TodoController.delete)
       this.router.get('/:id', TodoController.findById)
       this.router.get('', TodoController.findAll)
    }
}
export default new TodoRoutes().router