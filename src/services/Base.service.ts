import { IBaseService } from "./Interfaces/IBase.service";
export class BaseService<T> implements IBaseService<T> {
  protected repository: any;

  constructor(repository: any) {
    this.repository = repository;
  }

  async getAll(): Promise<T[]> {
    return this.repository.getAll();
  }

  async getById(id: number): Promise<T | null> {
    return this.repository.getById(id);
  }

  async create(data: any): Promise<T> {
    return this.repository.create(data);
  }

  async update(id: number, data: any): Promise<T> {
    return this.repository.update(id, data);
  }

  async delete(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}
