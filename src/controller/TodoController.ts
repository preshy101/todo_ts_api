import { Request, Response } from "express";
import { Todo } from "../model/todo";
import { TodoRepo } from "../repository/TodoRepo";

class TodoController{
   async create(req:Request, res:Response){
    try{ 
        const new_todo = new Todo();
        new_todo.name = req.body.name
        new_todo.description = req.body.description;
        await new TodoRepo().save(new_todo);
        res.status(200).json({
            status: "created",
            message: "created todo successfully"
        });

    }catch(err){
        res.status(500).json({
            status: "Internal Serve error",
            message: "Internal Serve error"
        });
    }
}
    async delete(req:Request,res:Response){
        try{ 
            let id = parseInt(req.params['id'])
            await new TodoRepo().delete(id)
            res.status(200).json({
                status: "Ok",
                message: "successfully todo todo"
            });
    
        }catch(err){
            res.status(500).json({
                status: "Internal Serve error",
                message: "Internal Serve error"
            });
        }
    }
    async findAll(req:Request,res:Response){
        try{ 
            const new_todo = await new TodoRepo().retrieveAll();
             
            res.status(200).json({
                status: "Ok",
                message: " successfully fetched all todo",
                data: new_todo
            });
    
        }catch(err){
            res.status(500).json({
                status: "Internal Serve error",
                message: "Internal Serve error"
            });
        }
    }
    async findById(req:Request,res:Response){

        try{ 
           let id = parseInt(req.params['id']);
           const new_todo = await new TodoRepo().retrieveById(id);
             
            res.status(200).json({
                status: "Ok",
                message: " successfully fetched todo by id",
                data: new_todo
            });
    
        }catch(err){
            res.status(500).json({
                status: "Internal Serve error",
                message: "Internal Serve error"
            });
        }

    }
    async update(req:Request,res:Response){
        try{ 
            let id = parseInt(req.params['id'])
             const new_todo = new Todo();

             new_todo.id = id
             new_todo.name = req.body.name
             new_todo.description = req.body.description

             await new TodoRepo().update(new_todo)
            res.status(200).json({
                status: "Ok",
                message: "successfully todo todo"
            });
    
        }catch(err){
            res.status(500).json({
                status: "Internal Serve error",
                message: "Internal Serve error"
            });
        }
    }
}
export default new TodoController()