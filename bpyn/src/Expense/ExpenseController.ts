import { Body, Controller, Post } from '@nestjs/common';
import { Id } from 'Controller/Decorators';
import { Expense } from './Expense';
import { ExpenseService } from './ExpenseService';

@Controller('/invoices/:invoiceId/expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  add(@Id('invoiceId') invoiceId: number, @Body() expense: Expense) {
    this.expenseService.add(invoiceId, expense);
  }

  @Post()
  check(@Id('invoiceId') invoiceId: number, @Id('expenseId') expenseId: number) {
    this.expenseService.check(invoiceId, expenseId)
  }
}
