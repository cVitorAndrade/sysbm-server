import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ReaderController } from './reader.controller';
import { CreateReaderUseCase } from 'src/modules/reader/useCases/createReaderUseCase/createReaderUseCase';
import { GetUserByCpfUseCase } from 'src/modules/reader/useCases/getReaderByCpfUseCase/getReaderByCpfUseCase';
import { GetAllReadersUseCase } from 'src/modules/reader/useCases/getAllReadersUseCase/getAllReadersUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ReaderController],
  providers: [CreateReaderUseCase, GetUserByCpfUseCase, GetAllReadersUseCase],
})
export class ReaderModule {}
