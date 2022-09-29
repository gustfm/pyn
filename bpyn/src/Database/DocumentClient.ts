import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class DocumentClient {
  private path: string = null;

  constructor() {
    this.path = `${process.cwd()}\\src\\Database\\db.json`;
  }

  public openCollection(): string {
    return fs.readFileSync(this.path, 'utf-8');
  }

  public writeCollection(data: any[]): void {
    fs.writeFileSync(this.path, JSON.stringify(data), 'utf-8');
  }

  public verifyConsistency(): boolean {
    return fs.existsSync(this.path);
  }

  public getAll(): any[] {
    try {
      const raw = this.openCollection();
      return JSON.parse(raw);
    } catch {
      throw new Error('Error in read collections.');
    }
  }

  public getOne(id: number): any {
    try {
      const entities = this.getAll();
      return entities.find((entity) => entity.id === id);
    } catch {
      throw new Error('Error in read collection.');
    }
  }

  public lastOne(): any {
    try {
      const raw = this.openCollection();
      const entities = JSON.parse(raw);
      if (!entities) return null;
      return entities[entities.length - 1];
    } catch {
      throw new Error('Error in read collections.');
    }
  }

  public add(entity: any): any {
    try {
      const entities = this.getAll();
      entities.push(entity);
      this.save(entities);
      return entity;
    } catch {
      throw new Error('Error in add collection.');
    }
  }

  public save(entities: any[]): void {
    try {
      this.writeCollection(entities);
    } catch {
      throw new Error('Error in save collections.');
    }
  }
}
