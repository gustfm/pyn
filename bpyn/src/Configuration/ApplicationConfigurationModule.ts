import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { DocumentClient } from 'Database/DocumentClient';

@Global()
@Module({
  providers: [
    {
      provide: 'DocumentClient',
      useFactory: () => {
        const documentClient = new DocumentClient();
        try {
          documentClient.verifyConsistency();
          Logger.log('Connected to collections.');
        } catch (err) {
          Logger.error(err, 'InstanceModule');
          throw err;
        }

        return documentClient;
      },
    },
  ],
  imports: [ConfigModule.forRoot()],
  exports: ['DocumentClient'],
})
export class ApplicationConfigurationModule {}
