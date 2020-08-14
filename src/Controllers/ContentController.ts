import { getRepository } from "typeorm";
import {Request, Response} from "express";
import Content from "../models/Content";

class ContentController{
    async create(req: Request, res: Response){
        try{
            const repository = getRepository(Content);
            const repoSaved = await repository.save(req.body);
            res.status(201).json(repoSaved);
        }
        catch(err){
            console.log("Error: " + err.message);
            res.status(400).json({message: "Error"});
        }
    }

    async index(req: Request, res: Response){
        try{
            const repository = getRepository(Content);
            const reposFind = await repository.find();
            res.status(201).json(reposFind);
        }
        catch(err){
            console.log("Error: " + err.message);
            res.status(400).json({message: "Error"});
        }
    }
}

export default new ContentController();