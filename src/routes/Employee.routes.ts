import { Router } from "express";
import { EmployeeController } from "../controllers/EmployeeController";
import { EmployeeService } from "../services/EmployeeService";
import { EmployeeRepository } from "../repositories/employeeRepository";

const employeeRouter = Router();

const controller = new EmployeeController();
const service = new EmployeeService();
const repository = new EmployeeRepository();

employeeRouter.get("/", controller.getAll.bind(controller));
employeeRouter.get("/:id", controller.getById.bind(controller));
employeeRouter.post("/", controller.create.bind(controller));
employeeRouter.put("/:id", controller.update.bind(controller));
employeeRouter.delete("/:id", controller.delete.bind(controller));

export default employeeRouter;
