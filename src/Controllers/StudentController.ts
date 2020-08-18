import { getRepository } from "typeorm";
import {Request, Response} from "express";
import Student from "../models/Student";
import { validate } from "class-validator";

class StudentController{
    async create(req: Request, res: Response){
        try{
            const { key, name, email} = req.body; 
            const repository = getRepository(Student);
            const student = repository.create({ key, name, email});

            const errors = await validate(student);

            if(errors.length === 0){
                console.log("a");
                const repoSaved = await repository.save(student);
                res.status(201).json(repoSaved);
            }
            else{
                res.json(errors);
            }

            
        }
        catch(err){
            console.log("Error: " + err.message);
            res.status(400).json({message: "Error"});
        }
    }

    async index(req: Request, res: Response){
        try{
            const repository = getRepository(Student);
            const reposFind = await repository.find();
            res.status(201).json(reposFind);
        }
        catch(err){
            console.log("Error: " + err.message);
            res.status(400).json({message: "Error"});
        }
    }
}

export default new StudentController();