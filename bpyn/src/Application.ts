import { Module } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';
import { ExpenseModule } from 'Expense/ExpenseModule';
import { ApplicationConfigurationModule } from './Configuration/ApplicationConfigurationModule';
import { CollectionManagerModule } from './Database/CollectionManagerModule';
import { InvoiceModule } from './Invoice/InvoiceModule';

@Module(
  Application.moduleConfig({
    imports: [ApplicationConfigurationModule],
    controllers: [],
  }),
)
export class Application {
  static moduleConfig(additionalConfiguration: ModuleMetadata): ModuleMetadata {
    return {
      imports: [
        InvoiceModule,
        ExpenseModule,
        CollectionManagerModule,
        ...additionalConfiguration.imports,
      ],
      controllers: [...additionalConfiguration.controllers],
    };
  }
}
