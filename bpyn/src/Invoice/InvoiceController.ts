import { Body, Controller, Get, Post } from '@nestjs/common';
import { Id } from 'Controller/Decorators';
import { Invoice } from './Invoice';
import { InvoiceService } from './InvoiceService';

@Controller('/invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  getInvoiceSettings(): Invoice[] {
    return this.invoiceService.getInvoiceSettings();
  }

  @Get(':id')
  getInvoice(@Id('id') id: number): Invoice {
    return this.invoiceService.getInvoice(id);
  }

  @Post('/next')
  next(): Invoice {
    return this.invoiceService.next();
  }
}
