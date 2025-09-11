import { PrismaClient } from "@prisma/client";

export class BaseRepository<T> {
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
