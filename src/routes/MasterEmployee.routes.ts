import { Router } from "express";
import { EmployeeController } from "../controllers/MasterEmployee.controller";

const employeeRouter = Router();

const controller = new EmployeeController();

employeeRouter.get("/", controller.getAll.bind(controller));
employeeRouter.get("/:id", controller.getById.bind(controller));
employeeRouter.post("/", controller.create.bind(controller));
employeeRouter.put("/:id", controller.update.bind(controller));
employeeRouter.delete("/:id", controller.delete.bind(controller));

export default employeeRouter;
