import { BaseRepository } from "../repositories/BaseRepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class EmployeeRepository extends BaseRepository<any> {
  constructor() {
    super(prisma.employee);
  }

  
}
