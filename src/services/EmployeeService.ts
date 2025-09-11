import { BaseService } from "../services/Base.service";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EmployeeRepository {
  private model: any;
  constructor() {
    this.model = prisma.employee;
  }

  getAll() {
    return this.model.findMany();
  }

  getById(emp_id: number) {
    return this.model.findUnique({ where: { emp_id } });
  }

  create(data: any) {
    return this.model.create({ data });
  }

  update(emp_id: number, data: any) {
    return this.model.update({ where: { emp_id }, data });
  }

  delete(emp_id: number) {
    return this.model.delete({ where: { emp_id } });
  }
}

export class EmployeeService extends BaseService<any> {
  constructor() {
    super(new EmployeeRepository());
  }

  // Employee-specific logic can go here
}
