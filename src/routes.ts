import {Router} from "express";
import ClassController from "./Controllers/ClassController";
import ContentController from "./Controllers/ContentController";
import LessonController from "./Controllers/LessonController";
import StudentController from "./Controllers/StudentController";

const routes = Router();

routes.post("/class", ClassController.create);
routes.get("/class", ClassController.index);
routes.get("/class/:name", ClassController.show);

routes.post("/content", ContentController.create);
routes.get("/content", ContentController.index);

routes.post("/lesson", LessonController.create);
routes.get("/lesson", LessonController.index);

routes.post("/student", StudentController.create);
routes.get("/student", StudentController.index);

export default routes;