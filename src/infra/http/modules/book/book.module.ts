import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { BookController } from './book.controller';
import { CreateBookUseCase } from 'src/modules/book/useCases/createBookUseCase/createBookUseCase';
import { GetAllBooksUseCase } from 'src/modules/book/useCases/getAllBookUseCase/getAllBookUseCase';
import { GetBookByIsbnUseCase } from 'src/modules/book/useCases/getBookByIsbnUseCase/getBookByIsbnUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [BookController],
  providers: [CreateBookUseCase, GetAllBooksUseCase, GetBookByIsbnUseCase],
})
export class BookModule {}
