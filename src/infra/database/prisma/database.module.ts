import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LibrarianRepository } from 'src/modules/librarian/repositories/LibrarianRepository';
import { PrismaLibrarianRepository } from './repositories/PrismaLibrarianRepository';
import { BookshelfRepository } from 'src/modules/bookshelf/repositories/bookshelfRepository';
import { PrismaBookshelfRepository } from './repositories/PrismaBookshelfRepository';

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
  ],
  exports: [LibrarianRepository, BookshelfRepository],
})
export class DatabaseModule {}
