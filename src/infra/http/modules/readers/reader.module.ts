import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ReaderController } from './reader.controller';
import { CreateReaderUseCase } from 'src/modules/reader/useCases/createReaderUseCase/createReaderUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ReaderController],
  providers: [CreateReaderUseCase],
})
export class ReaderModule {}
