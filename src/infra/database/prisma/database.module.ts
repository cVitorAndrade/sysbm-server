import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LibrarianRepository } from 'src/modules/librarian/repositories/LibrarianRepository';
import { PrismaLibrarianRepository } from './repositories/PrismaLibrarianRepository';
import { BookshelfRepository } from 'src/modules/bookshelf/repositories/bookshelfRepository';
import { PrismaBookshelfRepository } from './repositories/PrismaBookshelfRepository';
import { ShelfRepository } from 'src/modules/shelf/repositories/shelfRepository';
import { PrismaShelfRepository } from './repositories/PrismaShelfRepository';

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
  ],
  exports: [LibrarianRepository, BookshelfRepository, ShelfRepository],
})
export class DatabaseModule {}
