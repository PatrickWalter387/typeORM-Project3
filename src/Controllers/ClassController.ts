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

    async index(req: Request, res: Response){
        try{
            const classRepository = getRepository(Class);
            const reposFind = await classRepository.find();
            res.status(201).json(reposFind);
        }
        catch(err){
            console.log("Error: " + err.message);
            res.status(400).json({message: "Error"});
        }
    }

    async show(req: Request, res: Response){
        try{
            const { name } = req.params; 
            const classRepository = getRepository(Class);
            const reposFind = await classRepository.find({ where: { name } });
            res.status(201).json(reposFind);
        }
        catch(err){
            console.log("Error: " + err.message);
            res.status(400).json({message: "Error"});
        }
    }
}

export default new ClassController();