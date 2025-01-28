import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LibrarianRepository } from 'src/modules/librarian/repositories/LibrarianRepository';
import { PrismaLibrarianRepository } from './repositories/PrismaLibrarianRepository';
import { BookshelfRepository } from 'src/modules/bookshelf/repositories/bookshelfRepository';
import { PrismaBookshelfRepository } from './repositories/PrismaBookshelfRepository';
import { ShelfRepository } from 'src/modules/shelf/repositories/shelfRepository';
import { PrismaShelfRepository } from './repositories/PrismaShelfRepository';
import { BookRepository } from 'src/modules/book/repositories/BookRepository';
import { PrismaBookRepository } from './repositories/PrismaBookRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: LibrarianRepository,
      useClass: PrismaLibrarianRepository,
    },
    {
      provide: BookshelfRepository,
      useClass: PrismaBookshelfRepository,
    },
    {
      provide: ShelfRepository,
      useClass: PrismaShelfRepository,
    },
    {
      provide: BookRepository,
      useClass: PrismaBookRepository,
    },
  ],
  exports: [
    LibrarianRepository,
    BookshelfRepository,
    ShelfRepository,
    BookRepository,
  ],
})
export class DatabaseModule {}
