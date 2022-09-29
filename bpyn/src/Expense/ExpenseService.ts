import { Injectable } from '@nestjs/common';
import { CollectionManager } from 'Database/CollectionManager';
import { Invoice } from 'Invoice/Invoice';
import { Expense } from './Expense';

@Injectable()
export class ExpenseService {
  private collectionManager: CollectionManager<Invoice>;

  constructor(collectionManager: CollectionManager<Invoice>) {
    this.collectionManager = collectionManager;
  }

  public add(invoiceId: number, _expense: Expense) {
    const invoices = this.collectionManager.getAll();
    invoices.forEach((income) => {
      if (income.id === invoiceId) {
        const expense = new Expense(_expense.label, false, _expense.value);
        income.expenses.push(expense);
      }
    });

    this.collectionManager.save(invoices);
  }

  public check(invoiceId: number, expenseId: number) {
    const invoices = this.collectionManager.getAll();
    const expenses = this.findSelectedExpense(invoiceId, invoices);
    this.checkSelectedExpense(expenseId, expenses);

    this.collectionManager.save(invoices);
  }

  private findSelectedExpense(incomeId: number, invoices: Invoice[]) {
    const invoiceIndex = invoices.findIndex((i) => i.id === incomeId);
    return invoices[invoiceIndex].expenses;
  }

  private checkSelectedExpense(expenseId: number, expenses: Expense[]): void {
    expenses.forEach((expense) => (expense.paid = expense.id === expenseId));
  }
}
