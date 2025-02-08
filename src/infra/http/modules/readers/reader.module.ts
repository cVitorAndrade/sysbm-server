import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ReaderController } from './reader.controller';
import { CreateReaderUseCase } from 'src/modules/reader/useCases/createReaderUseCase/createReaderUseCase';
import { GetUserByCpfUseCase } from 'src/modules/reader/useCases/getReaderByCpfUseCase/getReaderByCpfUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ReaderController],
  providers: [CreateReaderUseCase, GetUserByCpfUseCase],
})
export class ReaderModule {}
