import { PrismaClient } from "@prisma/client";
import { IBaseRepository } from "./Interfaces/IBase.repository";

export class BaseRepository<T> implements IBaseRepository<T> {
  protected prisma: PrismaClient;
  protected model: any;

  constructor(model: any) {
    this.prisma = new PrismaClient();
    this.model = model;
  }

  async getAll() {
    return this.model.findMany();
  }

  async getById(id: number) {
    return this.model.findUnique({ where: { id } });
  }

  async create(data: any) {
    return this.model.create({ data });
  }

  async update(id: number, data: any) {
    return this.model.update({ where: { id }, data });
  }

  async delete(id: number) {
    return this.model.delete({ where: { id } });
  }
}
