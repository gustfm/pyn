import { Module } from '@nestjs/common';
import { CollectionManager } from 'Database/CollectionManager';
import { InvoiceController } from './InvoiceController';
import { InvoiceService } from './InvoiceService';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService, CollectionManager],
  exports: [InvoiceService],
})
export class InvoiceModule {}
