import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/prisma/database.module';
import { BookshelfController } from './bookshelf.controller';
import { CreateBookshelfUseCase } from 'src/modules/bookshelf/createBookshelfUseCase/createBookshelfUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [BookshelfController],
  providers: [CreateBookshelfUseCase],
})
export class BookshelfModule {}
