import { Request, Response } from "express";
import { EmployeeService } from "../services/MasterEmployee.service";

const employeeService = new EmployeeService();

export class EmployeeController {
  async getAll(req: Request, res: Response) {
    try {
      const employees = await employeeService.getAll();
      res.json(employees);
    } catch (err) {
      console.error("Error in getAll:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const emp_id = parseInt(req.params.id);
      if (isNaN(emp_id)) {
        return res.status(400).json({ error: "Invalid employee ID" });
      }

      const employee = await employeeService.getById(emp_id);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }

      res.json(employee);
    } catch (err) {
      console.error("Error in getById:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const employee = await employeeService.create(req.body);
      res.status(201).json(employee);
    } catch (err) {
      console.error("Error in create:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const emp_id = parseInt(req.params.id);
      if (isNaN(emp_id)) {
        return res.status(400).json({ error: "Invalid employee ID" });
      }

      const employee = await employeeService.update(emp_id, req.body);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found" });
      }

      res.json(employee);
    } catch (err) {
      console.error("Error in update:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const emp_id = parseInt(req.params.id);
      if (isNaN(emp_id)) {
        return res.status(400).json({ error: "Invalid employee ID" });
      }
      await employeeService.delete(emp_id);
      res.status(204).send();
    } catch (err) {
      console.error("Error in delete:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
