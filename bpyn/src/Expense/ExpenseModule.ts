import { Module } from '@nestjs/common';
import { CollectionManager } from 'Database/CollectionManager';
import { ExpenseController } from './ExpenseController';
import { ExpenseService } from './ExpenseService';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService, CollectionManager],
  exports: [ExpenseService],
})
export class ExpenseModule {}
