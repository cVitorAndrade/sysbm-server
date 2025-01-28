import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { BookController } from './book.controller';
import { CreateBookUseCase } from 'src/modules/book/useCases/createBookUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [CreateBookUseCase],
})
export class BookModule {}
