import { getRepository } from "typeorm";
import {Request, Response} from "express";
import Class from "../models/Class";


class ClassController{
    async create(req: Request, res: Response){
        try{
            const classRepository = getRepository(Class);
            const repoSaved = await classRepository.save(req.body);
            res.status(201).json(repoSaved);
        }
        catch(err){
            console.log("Error: " + err.message);
            res.status(400).json({message: "Error"});
        }
    }
}

export default new ClassController();