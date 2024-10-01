export interface IBaseRepository<T> {
  create?(data: Partial<T>): T;
  createMany?(data: Partial<T>[]): T[];
  save?(data: Partial<T>): Promise<T>;
  saveMany?(data: Partial<T>[]): Promise<T[]>;
  findOneById?(id: string): Promise<T>;
  // findByCondition(filterCondition: FindOneOptions<T>): Promise<T>;
  // findAll(options?: FindManyOptions<T>): Promise<T[]>
  remove?(data: T): Promise<T>;
  // findWithRelations(relations: FindManyOptions<T>): Promise<T[]>
  // preload(entityLike: DeepPartial<T>): Promise<T>
  // findOne(options: FindOneOptions<T>): Promise<T>
}
