import {Router} from "express";
import ClassController from "./Controllers/ClassController";

const routes = Router();

routes.post("/", ClassController.create);
routes.get("/", ClassController.index);
routes.get("/:name", ClassController.show);

export default routes;