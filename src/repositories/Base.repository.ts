import { PrismaClient } from "@prisma/client";
import { IBaseRepository } from "./Interfaces/IBase.repository";

export class BaseRepository<T> implements IBaseRepository<T> {
  protected prisma: PrismaClient;
  protected model: any;
  protected primaryKey: string;

  constructor(model: any, primaryKey: string = "id") {
    this.prisma = new PrismaClient();
    this.model = model;
    this.primaryKey = primaryKey;
  }

  async getAll() {
    return this.model.findMany();
  }

  async getById(keyValue: number | string) {
    return this.model.findUnique({ where: { [this.primaryKey]: keyValue } });
  }

  async create(data: any) {
    return this.model.create({ data });
  }

  async update(keyValue: number | string, data: any) {
    return this.model.update({ where: { [this.primaryKey]: keyValue }, data });
  }

  async delete(keyValue: number | string) {
    return this.model.delete({ where: { [this.primaryKey]: keyValue } });
  }
}
