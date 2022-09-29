import { Expense } from 'Expense/Expense';

export class Invoice {
  public id: number;
  public startDate: string;
  public endDate: string;
  public expenses!: Expense[];

  constructor(startDate: string, endDate: string, expenses: Expense[]) {
    this.id = new Date().valueOf();
    this.startDate = startDate;
    this.endDate = endDate;
    this.expenses = expenses;
  }
}
