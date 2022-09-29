import { Injectable } from '@nestjs/common';
import { CollectionManager } from 'Database/CollectionManager';
import dayjs = require('dayjs');
import { Invoice } from './Invoice';

@Injectable()
export class InvoiceService {
  private collectionManager: CollectionManager<Invoice>;

  constructor(collectionManager: CollectionManager<Invoice>) {
    this.collectionManager = collectionManager;
  }

  public getInvoiceSettings(): Invoice[] {
    const items: Invoice[] = this.collectionManager.getAll();
    return items.map((i) => {
      delete i.expenses;
      return i;
    });
  }

  public getInvoice(id: number): Invoice {
    return this.collectionManager.getOne(id);
  }

  public next(): Invoice {
    const last: Invoice = this.collectionManager.lastOne();
    const invoice = new Invoice(
      last.endDate,
      this.increaseMonth(last.endDate),
      last.expenses,
    );

    return this.collectionManager.add(invoice);
  }

  private increaseMonth(date: string): string {
    return dayjs(date).add(1, 'month').format('YYYY-MM-DD');
  }
}
