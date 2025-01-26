import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { LibrarianRepository } from 'src/modules/librarian/repositories/LibrarianRepository';
import { PrismaLibrarianRepository } from './repositories/PrismaLibrarianRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: LibrarianRepository,
      useClass: PrismaLibrarianRepository,
    },
  ],
  exports: [LibrarianRepository],
})
export class DatabaseModule {}
