import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ShelfController } from './shelf.controller';
import { CreateShelfUseCase } from 'src/modules/shelf/useCases/createShelfUseCase/createShelfUseCase';
import { GetShelfUseCase } from 'src/modules/shelf/useCases/getShelfUseCase/getShelfUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ShelfController],
  providers: [CreateShelfUseCase, GetShelfUseCase],
})
export class ShelfModule {}
