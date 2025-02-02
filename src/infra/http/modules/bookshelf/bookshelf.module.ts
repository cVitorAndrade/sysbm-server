import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { BookshelfController } from './bookshelf.controller';
import { CreateBookshelfUseCase } from 'src/modules/bookshelf/useCases/createBookshelfUseCase/createBookshelfUseCase';
import { GetBookshelfUseCase } from 'src/modules/bookshelf/useCases/getBookshelfUseCase/getBookshelfUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [BookshelfController],
  providers: [CreateBookshelfUseCase, GetBookshelfUseCase],
})
export class BookshelfModule {}
