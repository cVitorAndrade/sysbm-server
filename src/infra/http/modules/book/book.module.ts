import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { BookController } from './book.controller';
import { CreateBookUseCase } from 'src/modules/book/useCases/createBookUseCase/createBookUseCase';
import { GetAllBooksUseCase } from 'src/modules/book/useCases/getAllBookUseCase/getAllBookUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [CreateBookUseCase, GetAllBooksUseCase],
})
export class BookModule {}
