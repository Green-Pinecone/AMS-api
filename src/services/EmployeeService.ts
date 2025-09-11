import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EmployeeService {
  async getAllEmployees() {
    return prisma.employee.findMany();
  }

  async getEmployeeById(emp_id: number) {
    return prisma.employee.findUnique({
      where: { emp_id },
    });
  }

  async createEmployee(data: any) {
    return prisma.employee.create({ data });
  }

  async updateEmployee(emp_id: number, data: any) {
    return prisma.employee.update({
      where: { emp_id },
      data,
    });
  }

  async deleteEmployee(emp_id: number) {
    return prisma.employee.delete({
      where: { emp_id },
    });
  }
}
