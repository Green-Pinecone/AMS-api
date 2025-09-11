import { Request, Response } from "express";
import { EmployeeService } from "../services/EmployeeService";

const employeeService = new EmployeeService();

export class EmployeeController {
  async getAll(req: Request, res: Response) {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
  }

  async getById(req: Request, res: Response) {
    const emp_id = parseInt(req.params.id);
    const employee = await employeeService.getEmployeeById(emp_id);
    if (!employee) return res.status(404).json({ error: "Employee not found" });
    res.json(employee);
  }

  async create(req: Request, res: Response) {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  }

  async update(req: Request, res: Response) {
    const emp_id = parseInt(req.params.id);
    const employee = await employeeService.updateEmployee(emp_id, req.body);
    res.json(employee);
  }

  async delete(req: Request, res: Response) {
    const emp_id = parseInt(req.params.id);
    await employeeService.deleteEmployee(emp_id);
    res.status(204).send();
  }
}
