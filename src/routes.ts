import {Router} from "express";
import ClassController from "./Controllers/ClassController";

const routes = Router();

routes.post("/", ClassController.create);

export default routes;