import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/modules/shared/infraestructure/database/postgress/prisma.orm';
import { IBaseRepository } from '@/modules/shared/domain/ports/inbound/BaseRepository.InBound';

interface HasId {
  id: string;
}

export abstract class BaseRepository<T extends HasId>
  implements IBaseRepository<T>
{
  private entity: Partial<T>;
  protected constructor(
    // private readonly prisma: PrismaService,
    entity: Partial<T>,
  ) {
    this.entity = entity;
  }

  public async findOneById(id: any) {
    return await Promise.resolve(id);
  }
}
