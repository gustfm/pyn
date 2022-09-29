import { Inject } from '@nestjs/common';
import { DocumentClient } from './DocumentClient';

export class CollectionManager<T> {
  constructor(
    @Inject('DocumentClient')
    private readonly documentClient: DocumentClient,
  ) {}

  public getAll(): T[] {
    return this.documentClient.getAll();
  }

  public getOne(id: number): T {
    return this.documentClient.getOne(id);
  }

  public lastOne(): T {
    return this.documentClient.lastOne();
  }

  public add(entity: T): T {
    return this.documentClient.add(entity);
  }

  public save(entities: T[]): void {
    return this.documentClient.save(entities);
  }
}
