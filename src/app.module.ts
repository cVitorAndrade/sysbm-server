import { Module } from '@nestjs/common';
import { LibrarianModule } from './infra/http/modules/librarian/librarian.module';
import { DatabaseModule } from './infra/database/prisma/database.module';

@Module({
  imports: [LibrarianModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
