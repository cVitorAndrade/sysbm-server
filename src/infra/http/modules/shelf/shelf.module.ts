import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { ShelfController } from './shelf.controller';
import { CreateShelfUseCase } from 'src/modules/shelf/useCases/createShelfUseCase/createShelfUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [ShelfController],
  providers: [CreateShelfUseCase],
})
export class ShelfModule {}
